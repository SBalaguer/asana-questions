import React, { useState } from 'react';
import './App.css';

import Question from './Components/Question';
import Summary from './Components/Summary';
import Result from './Components/Result';
import Intro from './Components/Intro';

import listOfQuestions from './static/questionsInfo.json';
import { sendAnswers } from './Services/answers.js';
import { sendAnswersAnon } from './Services/answers.js';
import recomendationEngine from './Utils/recomendation-engine';
import linksToBuy from './static/linksToBuy.json';

function App() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [reco, setReco] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (event, questionName) => {
    const name = event.target.name;
    const value = event.target.value;
    const questionExists = !![...answers].find((_answer) => _answer.
    question === name);
    const tag = listOfQuestions[questionName].options.find(option => option.label === value).tags;
    
    if (questionExists) {
      //question was not answered before
      const newAnswers = [...answers].map((_answer) => {
        if (_answer.question === name) {
          _answer.answer = value;
          _answer.tag = tag;
        }
        return _answer;
      });
      setAnswers(newAnswers);
    } else {
      //question was answered before
      setAnswers([...answers, { question: name, answer: value, tag}]);
    }
  };

  const handleUserInputChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === 'name' && value) {
      //quiero hacer la primer letra mayuscula
      value = value
        .split(' ')
        .map((word) => {
          if (word.length) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          } else {
            return word;
          }
        })
        .join(' ');
    }
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmision = async (event) => {
    event.preventDefault();
    setLoading(true);
    const reco = recomendationEngine(answers);
    setReco(linksToBuy[reco]);
    const info = {
      answers,
      userInfo,
      reco: linksToBuy[reco]
    };
    try {
      const response = await sendAnswers(info);
      if (response.success) {
        setQuestion('result');
      } else {
        if (response.error.message.includes('Daily user sending quota exceeded')) {
          setQuestion('result');
        } else {
          setQuestion('result');
          // setError(true);
        }
      }
    } catch (error) {
      setQuestion('result');
      //setError(true);
    }
  };

  const seeResult = async () => {
    setLoading(true);
    const reco = recomendationEngine(answers);
    setReco(linksToBuy[reco]);
    const info = {
      answers,
      reco: linksToBuy[reco]
    };
    try {
      const response = await sendAnswersAnon(info);
      if (response.success) {
        setQuestion('result');
      } else {
        if (response.error.message.includes('Daily user sending quota exceeded')) {
          setQuestion('result');
        } else {
          // setQuestion('result');
          setError(true);
        }
      }
    } catch (error) {
      setQuestion('result');
      //setError(true);
    }
    setQuestion('result');
  }

  const handleNextQuestion = (i) => {
    if (i === 'last') {
      setQuestion('summary');
    } else {
      setQuestion(i + 1);
    }
  };
  const handlePreviousQuestion = (i) => {
    setQuestion(i - 1);
  };

  // eslint-disable-next-line default-case
  switch (question) {
    case 0:
      return (
        <div className="container">
          <h3 className="title">
            El siguiente test te ayudará a conocer cuál es el modelo y talle de copa ideal para vos.
            ¿Empezamos?
          </h3>
          <button onClick={() => handleNextQuestion(0)}>CLICK PARA INICIAR</button>
          <Intro />
        </div>
      );
    case 1:
      return (
        <Question
          name={'age'}
          title={listOfQuestions.age.title}
          options={listOfQuestions.age.options}
          question={1}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          first
          answers={answers}
        />
      );
    case 2:
      return (
        <Question
          name={'births'}
          title={listOfQuestions.births.title}
          options={listOfQuestions.births.options}
          question={2}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          answers={answers}
        />
      );
    case 3:
      return (
        <Question
          name={'experience'}
          title={listOfQuestions.experience.title}
          subtitle={listOfQuestions.experience.subtitle}
          multi
          options={listOfQuestions.experience.options}
          question={3}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          answers={answers}
        />
      );
    case 4:
      return (
        <Question
          name={'preference'}
          title={listOfQuestions.preference.title}
          options={listOfQuestions.preference.options}
          question={4}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          answers={answers}
        />
      );
    case 5:
      return (
        <Question
          name={'cervixHeight'}
          title={listOfQuestions.cervixHeight.title}
          subtitle={listOfQuestions.cervixHeight.subtitle}
          options={listOfQuestions.cervixHeight.options}
          question={5}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          answers={answers}
        />
      );
    case 6:
      return (
        <Question
          name={'sportLevel'}
          title={listOfQuestions.sportLevel.title}
          subtitle={listOfQuestions.sportLevel.subtitle}
          options={listOfQuestions.sportLevel.options}
          question={6}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          answers={answers}
        />
      );
    case 7:
      return (
        <Question
          name={'whyBuy'}
          title={listOfQuestions.whyBuy.title}
          options={listOfQuestions.whyBuy.options}
          question={7}
          handleInputChange={handleInputChange}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          last
          answers={answers}
        />
      );
    case 'summary':
      return (
        <Summary
          handleUserInputChange={handleUserInputChange}
          handleSubmision={handleSubmision}
          answers={answers}
          listOfQuestions={listOfQuestions}
          loading={loading}
          userInfo={userInfo}
          seeResult={seeResult}
          error={error}
        />
      );
    case 'result':
      return <Result answers={answers} userInfo={userInfo} reco={reco} />;
  }
}

export default App;

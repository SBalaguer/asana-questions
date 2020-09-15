import React, { useState, useEffect } from 'react';

import './style.css';

export default function Question(props) {
  const [value, setValue] = useState('');
  //importante a tener en cuenta
  //si es seleción múltiple o simple
  //que número de pregunta es
  //que opciones tienen que tener
  //options = [{label: XXX, value:YYY}]

  const manageSelectionChange = (event) => {
    props.handleInputChange(event);
    setValue(event.target.value);
  };

  useEffect(() => {
    const ans = props.answers.filter((_answer) => _answer.question === title);
    if (ans.length) {
      setValue(ans[0].answer);
    }
  }, [props.question]);

  const checkChecked = (optionSelected) => {
    return !!props.answers.filter((_answer) => optionSelected === _answer.answer).length;
  };

  const move = (type) => {
    const question = props.question;
    if (type === 'next') {
      if (props.last) {
        props.handleNextQuestion('last');
      } else {
        props.handleNextQuestion(question);
      }
    } else {
      props.handlePreviousQuestion(question);
    }
    setValue('');
  };

  const { title, subtitle, options, first, last } = props;

  return (
    <div className="container">
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      <form>
        {options.map((option) => {
          return (
            <div
              className={option.image ? 'questionsWithImage' : 'questions'}
              key={Math.random() * Date.now()}
            >
              <label
                className={option.image ? 'labelImage' : 'labelNoImage'}
                htmlFor={option.value}
              >
                <input
                  style={{ marginRight: '1.5em' }}
                  type="radio"
                  checked={checkChecked(option.label)}
                  id={option.value}
                  onChange={manageSelectionChange}
                  name={title}
                  value={option.label}
                />
                {option.label}
                {option.image ? (
                  <div className="image" style={{ backgroundImage: `url(${option.image})` }}></div>
                ) : null}
              </label>
            </div>

            // Version anterior (Santi) - Tom cambia para que quede bien la imagen
            // <div
            // className={
            //   option.image
            //     ? 'questionsWithImage'
            //     : 'questions'
            // }
            // key={Math.random() * Date.now()}>
            //   {option.image ? (
            //     <div className="image" style={{ backgroundImage: `url(${option.image})` }}></div>
            //   ) : null}
            //   <input
            //     type="radio"
            //     checked={checkChecked(option.label)}
            //     id={option.value}
            //     onChange={manageSelectionChange}
            //     name={title}
            //     value={option.label}
            //   />
            //   <label htmlFor={option.value}>{option.label}</label>
            // </div>
          );
        })}
      </form>
      <div className="button-container">
        {!first && (
          <button className="button-arrow" onClick={() => move('prev')}>
            {'← ANTERIOR'}
          </button>
        )}
        <button
          className={
            value.length
              ? !last
                ? 'button-arrow'
                : 'button-arrow-last'
              : !last
              ? 'button-arrow disabled'
              : 'button-arrow-last disabled'
          }
          disabled={value.length ? false : true}
          onClick={() => move('next')}
          // onclick="window.scrollTo(0, 0);"
        >
          {!last ? 'SIGUIENTE →' : 'FINALIZAR'}
        </button>
      </div>
    </div>
  );
}

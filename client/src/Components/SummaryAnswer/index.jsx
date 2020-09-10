import React from 'react';

import './style.css';

export default function SummaryAnswer(props) {
  return (
    <div className="summary_container">
      <div className="summary_question-bullet">
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </div>
      <div className="summary_question">
        <div className="summary_question-question">{props.question}</div>
        <div className="summary_answer">{props.answer}</div>
      </div>
    </div>
  );
}

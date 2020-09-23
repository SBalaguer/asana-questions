import React from 'react';

import './style.css';
import SummaryAnswer from '../SummaryAnswer';

export default function Summary(props) {
  return (
    <div className="container">
      {/* <h3>Listo! Estas son tus respuestas:</h3>
      <ul>
        {props.answers.map((answer) => (
          <SummaryAnswer key={answer.question} {...answer} />
        ))}
      </ul> */}
      <h3>Dejanos tus datos así te enviamos los resultados a tu email. </h3>
      <form className="user-info" onSubmit={props.handleSubmision}>
        <input
          className="input"
          required
          type="text"
          name="name"
          value={props.userInfo['name']}
          onChange={props.handleUserInputChange}
          placeholder="* Nombre"
          autoComplete="off"
        />
        <input
          className="input"
          required
          type="email"
          name="email"
          value={props.userInfo['email']}
          onChange={props.handleUserInputChange}
          placeholder="* Email"
          autoComplete="off"
        />
        <input
          className="input"
          type="text"
          name="phone"
          value={props.userInfo['phone']}
          onChange={props.handleUserInputChange}
          placeholder="Teléfono"
          autoComplete="off"
        />
        <button>VER RESULTADO</button>
      </form>
    </div>
  );
}

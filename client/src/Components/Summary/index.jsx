import React from 'react';

import './style.css';

export default function Summary(props) {
  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <div className="container">
      {/* <h3>Listo! Estas son tus respuestas:</h3>
      <ul>
        {props.answers.map((answer) => (
          <SummaryAnswer key={answer.question} {...answer} />
        ))}
      </ul> */}
      <h3>Dejanos tus datos así te enviamos los resultados. </h3>
      <form className="user-info" onSubmit={props.handleSubmision}>
        <input
          className="input"
          required
          type="text"
          name="name"
          value={props.userInfo['name']}
          onChange={props.handleUserInputChange}
          placeholder="* Nombre o apodo preferido"
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
          type="number"
          name="phone"
          value={props.userInfo['phone']}
          onChange={props.handleUserInputChange}
          placeholder="Teléfono (sin el '0' ni '15')"
          autoComplete="off"
        />
        {(!props.error &&
          ((props.loading && <button disabled>Calculando...</button>) || (
            <button>VER SUGERENCIA</button>
          ))) ||
          null}
      </form>
      {props.error && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontSize: '1.7em', marginBottom: '0.5em' }}>
            Hubo un error{' '}
            <span role="img" aria-label="sad">
              😕
            </span>
          </h4>
          <button style={{ marginTop: '0px' }} onClick={refreshPage}>
            <span role="img" aria-label="refresh">
              🔄
            </span>{' '}
            Rehacer
          </button>
        </div>
      )}
    </div>
  );
}

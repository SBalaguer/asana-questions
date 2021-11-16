import React from 'react';

import './style.css';

export default function Summary(props) {
  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <div className="container">
      <h3>Te enviaremos el resultado y un regalito especial 🎁 </h3>
      <form className="user-info" onSubmit={props.handleSubmision}>
        <input
          className="input"
          type="text"
          name="name"
          required
          value={props.userInfo['name']}
          onChange={props.handleUserInputChange}
          placeholder="* Nombre"
          autoComplete="off"
        />
        <input
          className="input"
          type="email"
          name="email"
          required
          value={props.userInfo['email']}
          onChange={props.handleUserInputChange}
          placeholder="* Email"
          autoComplete="off"
        />
        <input
          className="input"
          type="number"
          name="phone"
          required
          value={props.userInfo['phone']}
          onChange={props.handleUserInputChange}
          placeholder="* Whatsapp"
          autoComplete="off"
        />
        {(!props.error &&
          ((props.loading && <button disabled>Calculando...</button>) || (
            <button class="view-result" type="submit">VER SUGERENCIA</button>
          ))) ||
          null}
      </form>
      <button class="skip-btn" onClick={props.seeResult}>Prefiero no dejar mis datos</button>
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

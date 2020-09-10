import React from 'react';

import './style.css';

export default function Result({ userInfo, reco }) {
  return (
    <div className="container">
      <h3>Felicitaciones {userInfo.name}</h3>
      <h3 style={{ marginTop: 0 }}>
        Terminaste tu <span className="asana">Asana Test</span>!
      </h3>
      <h3 className="subtitle">Esta es nuestra recomendación</h3>
      <section className="recommendation">
        <div className="product">
          <div className="product-title">{reco.name}</div>
          <div
            style={{
              width: '180px',
              height: '180px',
              backgroundImage: `url(${reco.image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}
          ></div>
          <div className="buy">
            <a className="button" href={reco.linkToBuy} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
            <a
              className="button"
              href={reco.linkToBuyDuo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Promo Duo - XX% Descuento!
            </a>
          </div>
        </div>
        <div className="disclaimer">
          Recordá que la sugerencia de este test no es absoluta y pueden haber otros talles y
          modelos que también resulten bien para tu caso.
        </div>
        <div className="disclaimer bold">
          El precio incluye ENVIO GRATIS{' '}
          <span role="img" aria-label="truck">
            🚚
          </span>{' '}
          a todo el país.
        </div>
      </section>
    </div>
  );
}

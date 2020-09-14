import React from 'react';

import './style.css';

export default function Result({ userInfo, reco }) {
  return (
    <div className="container">
      <h3 className="subtitle">¡Felicitaciones {userInfo.name}!</h3>
      <h3 style={{ marginTop: 0 }}>
      Terminaste el test. A continuación verás nuestra recomendación.
      </h3>
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
              COMPRAR 1 COPA
            </a>
            <a
              className="button"
              href={reco.linkToBuyDuo}
              target="_blank"
              rel="noopener noreferrer"
            >
              COMPRAR PROMO DUO 20% OFF
            </a>
          </div>
        </div>
        <div className="disclaimer">
          Recordá que la sugerencia de este test no es absoluta y pueden haber otros talles y
          modelos que también resulten bien para tu caso.
        </div>
        <div className="disclaimer bold">
          El precio incluye ENVÍO GRATIS{' '}
          <span role="img" aria-label="truck">
            🚚
          </span>{' '}
          a todo el país.
        </div>
      </section>
    </div>
  );
}

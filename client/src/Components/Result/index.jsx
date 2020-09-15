import React from 'react';

import './style.css';

export default function Result({ userInfo, reco }) {
  return (
    <div className="container">
      <h3 className="subtitle">¡Felicitaciones {userInfo.name}!</h3>
      <h3 style={{ marginTop: 0 }}>Nuestra recomendación es el siguiente modelo y talle:</h3>
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
          <div className="product-description">{reco.description}</div>

          <div className="buy">
          <div className="buyColumn">
          
            <div className="product-price1 light">1 copa</div>
            <div className="product-price1">$1,399</div>
            <a className="button" href={reco.linkToBuy} target="_blank" rel="noopener noreferrer">
                COMPRAR 1 COPA
            </a>
          </div>
          
          <div className="buyColumn">
          
          <div className="product-price2 light">Promo Duo</div>
          <div className="product-price2">$1,119 c/u</div>
          <a className="buttonPromo" href={reco.linkToBuyDuo} target="_blank" rel="noopener noreferrer">
              COMPRAR PROMO DUO
          </a>
          </div>

          </div>

          <div className="disclaimer bold">
            Los precios incluyen <span className="dark">ENVÍO GRATIS</span> a todo el país y una <span className="dark">CLASE DE YOGA</span> de prueba.
            {/* <span role="img" aria-label="truck"> 🚚
            </span>{' '} */}
          </div>
        </div>

        <div className="disclaimer underline">
          <a href="https://asanacup.com/pages/elegi-tu-copa" target="_blank" rel="noopener noreferrer">Para ver las diferencias entre nuestros modelos, hacé click aqui.
          </a>
          </div>

        <div className="disclaimer">
          Recordá que la sugerencia de este test no es absoluta y pueden haber otros talles y
          modelos que también resulten bien para tu caso.
        </div>
      </section>
    </div>
  );
}

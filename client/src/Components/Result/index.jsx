import React from 'react';

import './style.css';

export default function Result({ userInfo, reco }) {
  return (
    <div className="container">
      <h3 className="subtitle">¡Listo! TU copa ideal es 👇</h3>
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
          <div className="product-description">{reco.description}
          </div>

          <div className="buy">
          <div className="buyColumn">
            <a className="button" href={reco.linkToBuy} target="_blank" rel="noopener noreferrer">
                COMPRALA CON ENVÍO GRATIS!
            </a>
          </div>

          </div>
        </div>

        <div className="whatsapp">
            <img src="https://cdn.shopify.com/s/files/1/0265/3719/7677/files/WhatsappIcon40x40.jpg?v=1631039928"></img>
            <a className="underline" href={ 'https://api.whatsapp.com/send?phone=+5491162532264&text=Hola%21%20Hice%20el%20test%20y%20me%20interesa%20comprar%20el%20modelo%20' + reco.name + '%20%F0%9F%99%8B%E2%80%8D%E2%99%80%EF%B8%8F%0A'} rel="noopener noreferrer">o hacé tu pedido por Whatsapp!</a>
        </div>

        <div className="disclaimer">
          Recordá que la sugerencia de este test no es absoluta y pueden haber otros talles y
          modelos que también resulten bien para tu caso.
        </div>
      </section>
    </div>
  );
}

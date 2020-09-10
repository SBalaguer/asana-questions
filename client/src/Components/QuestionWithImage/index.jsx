import React from 'react';

export default function Question(props) {
  //importante a tener en cuenta
  //si es seleción múltiple o simple
  //que número de pregunta es
  //que opciones tienen que tener
  //options = [{label: XXX, value:YYY}]
  const { title, name, subtitle, options } = props;
  return (
    <div>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      <form>
        {options.map((option) => {
          return (
            <>
              {option.image ? (
                <div className="image" style={{ backgroundImage: URL(props.image) }}></div>
              ) : null}
              <input type="radio" id={option.value} name={name} value={option.value} />
              <label for={option.value}>{option.label}</label>
            </>
          );
        })}
      </form>
      <div>
        <button>Next Question</button>
        <button>Previous Question</button>
      </div>
    </div>
  );
}

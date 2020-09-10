const pointsSchema = [
  {
    question: 'Tuviste partos?',
    answers: {
      'No tuve partos': { points: ['rectaS', 'curvaS'], exclude: [] },
      'Sí, tuve parto natural': { points: ['rectaL', 'curvaL'], exclude: [] },
      'Sí, tuve parto por cesárea': { points: ['rectaS', 'curvaS'], exclude: [] },
      'Sí, tuve parto por cesárea y natural': { points: ['rectaL', 'curvaL'], exclude: [] }
    }
  },
  {
    question: 'Cuál es tu experiencia con la copa menstrual?',
    answers: {
      'Nunca usé una copa Mensutral.': {
        points: ['rectaS', 'rectaL', 'curvaS', 'curvaL'],
        exclude: []
      },
      'La copa me parece larga para mí, o tuve que cortarle el tallo.': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'La copa me es difícil de agarrar o extraer.': {
        points: ['rectaS', 'rectaL'],
        exclude: ['curvaS', 'curvaL']
      },
      'Me cuesta que la copa se abra totalmente.': { points: ['rectaS', 'rectaL'], exclude: [] },
      'Mi copa menstrual me resulta Ok, pero me gustaría probar una diferente.': {
        points: ['rectaS', 'rectaL', 'curvaS', 'curvaL'],
        exclude: []
      }
    }
  },
  {
    question: 'Prefiero tener una copa menstrual que sea, por sobre todo...',
    answers: {
      'Más fácil de colocar y extraer de mi cuerpo': { points: ['rectaS', 'rectaL'], exclude: [] },
      "Extra comodidad, pero que requiere un poco más de 'autoconocimiento' y práctica al colocar y extraer": {
        points: ['curvaS', 'curvaL'],
        exclude: []
      }
    }
  },
  {
    question: 'Cuál es la altura de tu cérvix?',
    answers: {
      'Tengo cérvix alto. No llego o apenas llego a tocarlo con mi dedo más largo (más de 55mm)': {
        points: ['rectaS', 'rectaL'],
        exclude: []
      },
      'Tengo cérvix medio. Llego a tocarlo con dos falanges aproximadamente (entre 45mm y 55mm)': {
        points: ['rectaS', 'rectaL', 'curvaS', 'curvaL'],
        exclude: []
      },
      'Tengo cérvix bajo. Lo toco con una falange de dedo o menos (44mm o menos)': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'No tengo idea. Prefiero no verificarlo.': {
        points: ['rectaS', 'rectaL', 'curvaS', 'curvaL'],
        exclude: []
      }
    }
  }
];

export default pointsSchema;

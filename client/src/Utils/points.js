const pointsSchema = [
  {
    question: '¿Cuántos años tenés?',
    answers: {
      'Menos de 15 años': { 
        points: ['mini'], 
        exclude: [] },
      '15 a 18 años': { 
        points: ['mini','curvaS'], 
        exclude: [] },
      '19 a 24 años': { 
        points: ['curvaL', 'curvaS','mini'], 
        exclude: [] },
      '25 a 35 años': { 
        points: ['curvaL', 'curvaS','mini'], 
        exclude: [] },
      '36 años o más': { 
        points: ['curvaL','curvaS','mini'], 
        exclude: [] }
    }
  },
  {
    question: '¿Tuviste partos?',
    answers: {
      'No tuve partos': { 
        points: ['curvaS','mini'], 
        exclude: ['rectaL', 'curvaL'] },
      'Sí, tuve parto natural': { 
        points: ['rectaL', 'curvaL'], 
        exclude: ['rectaS', 'curvaS','mini'] },
      'Sí, tuve parto por cesárea': { 
        points: ['rectaS', 'curvaS','mini'], 
        exclude: ['rectaL', 'curvaL'] },
      'Sí, tuve parto por cesárea y natural': { 
        points: ['rectaL', 'curvaL'], 
        exclude: ['rectaS'] }
    }
  },
  {
    question: '¿Cuál es tu experiencia con la copa menstrual?',
    answers: {
      'Nunca usé una copa menstrual.': {
        points: ['curvaS','curvaL','mini'],
        exclude: []
      },
      'La copa me parece larga para mí, o tuve que cortarle el tallo.': {
        points: ['curvaS', 'curvaL','mini'],
        exclude: []
      },
      'La copa me es difícil de agarrar o extraer.': {
        points: ['curvaS', 'curvaL','mini'],
        exclude: []
      },
      'La copa me pierde o cuesta que se abra totalmente.': { 
        points: ['curvaS','curvaL','mini'],
        exclude: [] 
      },
      'Mi copa menstrual está bien, pero me gustaría probar una diferente.': {
        points: ['curvaS','curvaL','mini'],
        exclude: []
      }
    }
  },
  {
    question: 'Prefiero tener una copa menstrual que sea, por sobre todo...',
    answers: {
      'Más fácil de colocar y extraer de mi cuerpo': { 
        points: ['rectaS','rectaL','curvaS','curvaL','mini'], 
        exclude: [] },
      "Extra comodidad, aunque requiera un poco más de práctica al colocar y extraer.": {
        points: ['curvaS','curvaL','mini'],
        exclude: []
      }
    }
  },
  {
    question: '¿Cuál es la altura de tu cérvix?',
    answers: {
      'Tengo cérvix alto. No llego o apenas llego a tocarlo con mi dedo más largo (más de 55mm)': {
        points: ['rectaL','curvaS','curvaL'],
        exclude: ['mini']
      },
      'Tengo cérvix medio. Llego a tocarlo con dos falanges aproximadamente (entre 45mm y 55mm)': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'Tengo cérvix bajo. Lo toco con una falange de dedo o menos (44mm o menos)': {
        points: ['mini'],
        exclude: ['rectaS', 'rectaL']
      },
      'No tengo idea. Prefiero no verificarlo.': {
        points: ['curvaS', 'curvaL','mini'],
        exclude: []
      }
    }
  },
  {
    question: '¿Cómo te llevás con el deporte?',
    answers: {
      'No me gusta mucho el deporte.': {
        points: ['curvaS','curvaL','mini'],
        exclude: []
      },
      'Trato de hacer deporte 1 vez por semana.': {
        points: ['curvaS', 'curvaL','mini'],
        exclude: []
      },
      'Soy deportista, o hago actividad física más de 2 veces por semana.': {
        points: ['curvaS', 'curvaL','mini'],
        exclude: ['rectaS','rectaL',]
      }
    }
  }
];

export default pointsSchema;

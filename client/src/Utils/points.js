const pointsSchema = [
  {
    question: '¿Cuántos años tenés?',
    answers: {
      'Menos de 15 años': { 
        points: ['mini'], 
        exclude: ['rectaL', 'curvaL','rectaS', 'curvaS'] },
      '15 a 18 años': { 
        points: [], 
        exclude: [] },
      '19 a 24 años': { 
        points: [], 
        exclude: [] },
      '25 a 35 años': { 
        points: [], 
        exclude: [] },
      '36 años o más': { 
        points: [], 
        exclude: [] }
    }
  },
  {
    question: '¿Tuviste partos?',
    answers: {
      'No tuve partos': { 
        points: ['rectaS', 'curvaS'], 
        exclude: ['rectaL', 'curvaL'] },
      'Sí, tuve parto natural': { 
        points: ['rectaL', 'curvaL'], 
        exclude: ['rectaS', 'curvaS'] },
      'Sí, tuve parto por cesárea': { 
        points: ['rectaS', 'curvaS'], 
        exclude: ['rectaL', 'curvaL'] },
      'Sí, tuve parto por cesárea y natural': { 
        points: ['rectaL', 'curvaL'], 
        exclude: ['rectaS', 'curvaS'] }
    }
  },
  {
    question: '¿Cuál es tu experiencia con la copa menstrual?',
    answers: {
      'Nunca usé una copa menstrual.': {
        points: ['rectaS', 'curvaS','rectaL','curvaL'],
        exclude: []
      },
      'La copa me parece larga para mí, o tuve que cortarle el tallo.': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'La copa me es difícil de agarrar o extraer.': {
        points: ['rectaS', 'rectaL'],
        exclude: []
      },
      'La copa me pierde o cuesta que se abra totalmente.': { 
        points: ['rectaS', 'rectaL','curvaS','curvaL'],
        exclude: [] 
      },
      'Mi copa menstrual está bien, pero me gustaría probar una diferente.': {
        points: ['curvaS','curvaL','rectaS', 'rectaL'],
        exclude: []
      }
    }
  },
  {
    question: 'Prefiero tener una copa menstrual que sea, por sobre todo...',
    answers: {
      'Más fácil de colocar y extraer de mi cuerpo': { 
        points: ['rectaS','rectaL','curvaS','curvaL'], 
        exclude: [] },
      "Extra comodidad, aunque requiera un poco más de práctica al colocar y extraer.": {
        points: ['curvaS','curvaL'],
        exclude: []
      }
    }
  },
  {
    question: '¿Cuál es la altura de tu cérvix?',
    answers: {
      'Tengo cérvix alto. No llego o apenas llego a tocarlo con mi dedo más largo (más de 55mm)': {
        points: ['rectaS', 'rectaL'],
        exclude: []
      },
      'Tengo cérvix medio. Llego a tocarlo con dos falanges aproximadamente (entre 45mm y 55mm)': {
        points: ['rectaS', 'rectaL','curvaS', 'curvaL'],
        exclude: []
      },
      'Tengo cérvix bajo. Lo toco con una falange de dedo o menos (44mm o menos)': {
        points: ['mini'],
        exclude: ['curvaS','curvaL','rectaS', 'rectaL']
      },
      'No tengo idea. Prefiero no verificarlo.': {
        points: ['rectaS', 'curvaS', 'rectaL','curvaL'],
        exclude: []
      }
    }
  },
  {
    question: '¿Cómo te llevás con el deporte?',
    answers: {
      'No me gusta mucho el deporte.': {
        points: ['rectaS', 'curvaS', 'rectaL','curvaL'],
        exclude: []
      },
      'Trato de hacer deporte 1 vez por semana.': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'Soy deportista, o hago actividad física más de 2 veces por semana.': {
        points: ['curvaS', 'curvaL'],
        exclude: ['rectaS','rectaL',]
      }
    }
  }
];

export default pointsSchema;

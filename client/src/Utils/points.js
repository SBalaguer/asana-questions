const pointsSchema = [
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
        points: ['rectaS', 'curvaS', 'curvaL','rectaL'],
        exclude: []
      },
      'La copa me parece larga para mí, o tuve que cortarle el tallo.': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'La copa me es difícil de agarrar o extraer.': {
        points: ['rectaS', 'rectaL'],
        exclude: ['curvaS','curvaL']
      },
      'Me cuesta que la copa se abra totalmente.': { 
        points: ['rectaS', 'rectaL', 'curvaL','curvaS'], 
        exclude: [] 
      },
      'Mi copa menstrual me resulta Ok, pero me gustaría probar una diferente.': {
        points: ['rectaS', 'curvaS', 'curvaL','rectaL'],
        exclude: []
      }
    }
  },
  {
    question: 'Prefiero tener una copa menstrual que sea, por sobre todo...',
    answers: {
      'Más fácil de colocar y extraer de mi cuerpo': { 
        points: ['rectaS','rectaL'], 
        exclude: [] },
      "Extra comodidad, pero que requiere un poco más de 'autoconocimiento' y práctica al colocar y extraer": {
        points: ['rectaS', 'curvaS', 'curvaL'],
        exclude: []
        //agregue rectaS
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
        points: ['rectaS', 'rectaL', 'curvaS', 'curvaL'],
        exclude: []
      },
      'Tengo cérvix bajo. Lo toco con una falange de dedo o menos (44mm o menos)': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'No tengo idea. Prefiero no verificarlo.': {
        points: ['rectaS', 'curvaS', 'curvaL','rectaL'],
        exclude: []
      }
    }
  },
  {
    question: '¿Cómo te llevás con el deporte?',
    answers: {
      'No me gusta mucho el deporte.': {
        points: ['rectaS', 'curvaS', 'curvaL','rectaL'],
        exclude: []
      },
      'Trato de hacer deporte 1 vez por semana.': {
        points: ['rectaS', 'curvaS', 'curvaL', 'rectaL'],
        exclude: []
      },
      'Soy deportista, o hago actividad física más de 2 veces por semana.': {
        points: ['curvaS', 'curvaL','rectaS', 'rectaL'],
        exclude: []
        //agrego recta. 
      }
    }
  }
];

export default pointsSchema;

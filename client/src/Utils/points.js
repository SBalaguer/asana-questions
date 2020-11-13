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
        points: ['rectaS', 'curvaS', 'curvaL'],
        exclude: []
        // saque rectaL
      },
      'La copa me parece larga para mí, o tuve que cortarle el tallo.': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      },
      'La copa me es difícil de agarrar o extraer.': {
        points: ['rectaS', 'curvaL'],
        exclude: ['curvaS']
        //se elimino  'curvaL' del exclude
        //se agrego CurvaL
        //se sacó RectaL
      },
      'Me cuesta que la copa se abra totalmente.': { 
        points: ['rectaS', 'rectaL', 'curvaL'], 
        exclude: [] 
        //se agrego CurvaL
      },
      'Mi copa menstrual me resulta Ok, pero me gustaría probar una diferente.': {
        points: ['rectaS', 'curvaS', 'curvaL'],
        exclude: []
        //se elimino  'rectaL' de puntos
      }
    }
  },
  {
    question: 'Prefiero tener una copa menstrual que sea, por sobre todo...',
    answers: {
      'Más fácil de colocar y extraer de mi cuerpo': { 
        points: ['rectaS','curvaL'], 
        exclude: [] },
        //se agregó 'curvaL'
        //Se elimino la rectaL
      "Extra comodidad, pero que requiere un poco más de 'autoconocimiento' y práctica al colocar y extraer": {
        points: ['curvaS', 'curvaL'],
        exclude: []
      }
    }
  },
  {
    question: '¿Cuál es la altura de tu cérvix?',
    answers: {
      'Tengo cérvix alto. No llego o apenas llego a tocarlo con mi dedo más largo (más de 55mm)': {
        points: ['rectaS', 'rectaL','curvaL'],
        exclude: []
        //se agrego 'curvaL'
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
        points: ['rectaS', 'curvaS', 'curvaL'],
        exclude: []
        //sacamos RectaL
      }
    }
  },
  {
    question: '¿Cómo te llevás con el deporte?',
    answers: {
      'No me gusta mucho el deporte.': {
        points: ['rectaS', 'curvaS', 'curvaL'],
        exclude: []
        //Sacamos RectaL
      },
      'Trato de hacer deporte 1 vez por semana.': {
        points: ['rectaS', 'curvaS', 'curvaL'],
        exclude: []
        //se elimino rectaL
      },
      'Soy deportista, o hago actividad física más de 2 veces por semana.': {
        points: ['curvaS', 'curvaL'],
        exclude: []
      }
    }
  }
];

export default pointsSchema;

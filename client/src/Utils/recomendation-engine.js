import pointsSchema from './points';

const recomendationEngine = (answers) => {
  let recoProduct = '';
  let maxPoints = 0;

  const recoPoints = {
    rectaS: 0,
    rectaL: 0,
    curvaS: 0,
    curvaL: 0,
    mini: 0
  };

  for (const _answer of answers) {
    for (const _points of pointsSchema) {
      if (_answer.question === _points.question) {
        const points = _points.answers[_answer.answer].points;
        const exclude = _points.answers[_answer.answer].exclude;
        for (const product of points) {
          recoPoints[product] = recoPoints[product] + 1;
        }
        for (const product of exclude) {
          recoPoints[product] = recoPoints[product] - 100000;
        }
      }
    }
  }

  for (const product in recoPoints) {
    if (recoPoints[product] > maxPoints) {
      recoProduct = product;
      maxPoints = recoPoints[product];
    }
  }

  return recoProduct;
};

export default recomendationEngine;

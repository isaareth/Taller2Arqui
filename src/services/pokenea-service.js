const pokeneas = require('../models/pokenea-data');
const os = require('os');

const getRandomPokeneaInstance = () => {
  const index = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[index];
};


exports.getRandomPokenea = () => {
  const pokenea = getRandomPokeneaInstance();

  return {
    id: pokenea.getId(),
    name: pokenea.getName(),
    height: pokenea.getHeight(),
    skill: pokenea.getSkill(),
    containerId: os.hostname()
  };
};


exports.getRandomImageAndPhrase = () => {
  const pokenea = getRandomPokeneaInstance();

  return {
    name: pokenea.getName(),
    image: pokenea.getImage(),
    phrase: pokenea.getPhrase(),
    containerId: os.hostname()
  };
};

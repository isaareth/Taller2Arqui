const { getRandomPokenea, getRandomImageAndPhrase } = require('../services/pokenea-service');

exports.getPokeneaJson = (req, res, next) => {
    try {
        const pokenea = getRandomPokenea();
        
        if (!pokenea) {
            throw new Error('The Pokenea was not found');
        }
        
        res.json(pokenea);
    } catch (error) {
        next(error);
    }
};

exports.getPokeneaImageAndPhrase = (req, res, next) => {
    try {
        const pokenea = getRandomImageAndPhrase();
        
        if (!pokenea) {
            throw new Error('Error finding Pokenea image');
        }
        
        res.render('pokenea', {
            name: pokenea.name,
            image: pokenea.image,
            phrase: pokenea.phrase,
            containerId: pokenea.containerId
        });
    } catch (error) {
        next(error);
    }
};
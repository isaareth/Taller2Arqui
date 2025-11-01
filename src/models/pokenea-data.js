const Pokenea = require('./pokenea-model');
require('dotenv').config();

const BUCKET_URL = process.env.BUCKET_URL;

const pokeneas = [
    new Pokenea(1, 'Guaromago', 1.6, 'Hechizo de Aguardiente', `${BUCKET_URL}/Guaromago.png`, 'Con guaro y alegría, se espanta la melancolía.'),
    new Pokenea(2, 'Bandejazor', 2.0, 'Festín Montañero', `${BUCKET_URL}/Bandejazor.png`, 'Con fríjol y corazón, todo día es un fiestón.'),
    new Pokenea(3, 'Mazamorrón', 1.3, 'Nube de Dulzura', `${BUCKET_URL}/Mazamorrón.png`, 'Con bocadillo y ternura, endulzo cualquier amargura.'),
    new Pokenea(4, 'Chicharronix', 1.8, 'Crocrash', `${BUCKET_URL}/Chicharronix.png`, 'Crujo con emoción, soy pura tradición.'),
    new Pokenea(5, 'Bocadillux', 1.0, 'Corazón de Guayaba', `${BUCKET_URL}/Bocadillux.png`, 'Soy rojo de pasión, firme en cada ocasión.'),
    new Pokenea(6, 'Carrielo', 1.5, 'Bolsa del Recuerdo', `${BUCKET_URL}/Carrielo.png`, 'Entre cuero y devoción, guardo amor y bendición.'),
    new Pokenea(7, 'Floralia', 1.7, 'Desfile Eterno', `${BUCKET_URL}/Floralia.png`, 'Florezco con ilusión, llevo colores en el corazón.'),
    new Pokenea(8, 'Empanadash', 0.9, 'Explosión de Hogar', `${BUCKET_URL}/Empanadash.png`, 'Con salsita y sazón, reparto pura emoción.'),
    new Pokenea(9, 'Cafetron', 1.4, 'Despertar Supremo', `${BUCKET_URL}/Cafetron.png`, 'Con aroma y convicción, despierto la inspiración.'),
    new Pokenea(10, 'Parcerion', 1.2, 'Abrazo Colectivo', `${BUCKET_URL}/Parcerion.png`, 'Donde hay unión, florece la amistad y la acción.')
];

module.exports = pokeneas;

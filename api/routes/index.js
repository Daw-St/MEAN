let express = require('express');
let router = express.Router();
let ctrlHotels = require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll)

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne)

router
    .route('/hotels/new')
    .post(ctrlHotels.hotellsAddOne)

module.exports = router;
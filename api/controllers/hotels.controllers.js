let hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = (req, res) => {

    console.log("GET the hotels");
    console.log(req.query)

    let offset = 0;
    let count = 5;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.offset){
        count = parseInt(req.query.count, 10);
    }

    let returnData = hotelData.slice(offset, offset+count);

    res
        .status(200)
        .json(returnData);

};

module.exports.hotelsGetOne = (req, res) => {

    let hotelId = req.params.hotelId;
    let thisHotel = hotelData[hotelId];
    console.log("GET hotelId ", hotelId);
    res
        .status(200)
        .json(thisHotel)

};

module.exports.hotellsAddOne = (req, res) => {

    console.log('POST new hotel');
    console.log(req.body);
    res
        .status(200)
        .json(req.body);

}
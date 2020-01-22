const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Buscar todos os devs num raio de 10km
//Filtrar por techs

module.exports = {
    async index(request,response) {
        const { latitude, longitude, techs } = request.query;
        
        const techsArray = parseStringAsArray(techs); 

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
                //operador logico do mongo
            },
            location: {
                $near: {
                    $geometry: {
                        type:'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                },
            },
        });
         
        return response.json(devs);
    }
}
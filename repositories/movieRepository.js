const {movie:Movie} = require ("../models");

class movieRepository{

    static findAll = async(params,next)=>{
        try{
            const movies = await Movie.findAll();
            return movies;

        }catch(err){
            next(err);
        }
    }
    static findOne = async(id)=>{
       
        try{

            const movie = await Movie.findOne({
                where: {
                    id 
                }
            })
            return movie;

        }catch(err){
            console.log(err);
        }
    }
    static create = async (payload) => {
        try{


            const movie = await Movie.create(payload);
            return movie
        }catch(err){
            console.log(err);
        }
    }
    static destroy = async (id) => {
        try{

            const movie = await Movie.destroy({
                where: {
                    id
                }
            })
            return movie;
        }catch(err){
            console.log(err);
        }
    }
    static update = async (id,payload) =>{
        try{

            const movie = await Movie.update(payload,{
                where: {
                    id
                }
            })
            return movie

        }catch(err){
            console.log(err);
        }
    }

}

module.exports = movieRepository;
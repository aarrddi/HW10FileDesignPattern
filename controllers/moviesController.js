const movieServices = require ("../services/movieServices.js")

class movieController{

    static findAll = async (req,res,next) =>{
        try{
            const movies = await movieServices.findAll(req.query,next);

            res.status(200).json(movies);
        }catch(err){
            next(err);
        }

    }

    static findOne = async (req,res,next) =>{
        try{
            const movie = await movieServices.findOne(req.params);

            if(!movie){
                throw{name : "ErrorNotFound"}
            }

            res.status(200).json(movie);
        }catch(err){
            next(err);
        }
    }
    static create = async (req,res,next) =>{
        try{
            console.log(req.file, req.body, "<<<<<<");

            const movie = await movieServices.create(req.file, req.body);

            res.status(201).json({message: "Created Movie Succesfully"})
        }catch(err){
            next(err); 
        }

    }
    static update = async () =>{

    }
    static destroy = async () =>{

    }


}

module.exports = movieController;
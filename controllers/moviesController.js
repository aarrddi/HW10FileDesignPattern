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
    static update = async (req,res,next) =>{
        try{

            const movie = await movieServices.update(req.params,req.file,req.body);
            res.status(200).json({message : "Update Movie Success"})
        }catch(err){
            console.log(err);
        }

    }
    static destroy = async (req,res,next) =>{
        try{
            const movie = await movieServices.destroy(req.params);
            res.status(200).json({message : "Movie Deleted"});

            if(!movie){
                throw(err)
            }

        }catch(err){
            next(err);
        }
    }


}

module.exports = movieController;
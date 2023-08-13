const movieRepository = require("../repositories/movieRepository.js")
class movieServices {

    static findAll = async (params, next)=>{
        try {
            const movies = await movieRepository.findAll(params,next);
            return movies;

        }catch(err){
            next(err);
        }
    }

    static findOne = async (params)=>{
        try{

            const {id} = params;

            const movie = await movieRepository.findOne(id);
            return movie;

        }catch(err){
            console.log(err);
        }
    }
    static create = async (filePhoto,params)=>{
        try{
            const{title,genres,year} = params;
            let payload = {
                title,
                genres,
                year
            }

            if(filePhoto){
                let linkPhoto = `http://localhost:3000/${filePhoto.filename}`
                payload.photo = linkPhoto;

            }

            const movie = await movieRepository.create(payload)
            return movie; 

        }catch(err){
            console.log(err,"<<<<");
        }
    }
    static destroy = async (params) =>{
        try{
            const{id} = params;

            const movie = await movieRepository.destroy(id);

            return movie;
        }catch(err){
            console.log(err);
        }
    }
    static update = async(pathParams,filePhoto,params) =>{
        try{

            const {id} = pathParams;
            const{title,genres,year} = params;
            let payload = {
                title,
                genres,
                year
            }

            if(filePhoto){
                let linkPhoto = `http://localhost:3000/${filePhoto.filename}`
                payload.photo = linkPhoto;

            }
            const movie = await movieRepository.update(id,payload,)
            return movie;

        }catch(err){
            console.log(err);
        }
    }

}

module.exports = movieServices;
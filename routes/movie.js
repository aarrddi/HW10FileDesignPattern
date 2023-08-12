const express = require ('express')
const router = express.Router();
const movieController = require("../controllers/moviesController.js");
const upload = require('../middlewares/multer.js')


router.get("/",movieController.findAll);
router.get("/:id",movieController.findOne);
router.post("/",upload.single("photo"),movieController.create);

module.exports = router;
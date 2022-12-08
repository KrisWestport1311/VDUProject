const router = require("express").Router();
const Location = require("../models/Location")



//Create new assessment location

router.post("/", async (req, res, next) =>{
    
    const newLocation = new Location(req.body)
    
    try{
        const savedLocation = await newLocation.save()
        res.status(200).json(savedLocation)


    } catch(err){
        next(err)
    }

});

//update existing locations
router.put("/:id", async (req, res, next) =>{

    
    
    try{
        const updatedLocation = await Location.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new : true}
        );
        res.status(200).json(updatedLocation)


    } catch(err){
        next(err)
    }

});

//Delete an existing location
router.delete("/:id", async (req, res, next) =>{

    
    
    try{
        await Location.findByIdAndDelete(
        req.params.id,
        );
        res.status(200).json("Location has been deleted")


    } catch(err){
        next(err)
    }

});

//Get specific location
router.get("/:id", async (req, res, next) =>{

    
    
    try{
        const location = await Location.findById(
        req.params.id
        );
        res.status(200).json(location)


    } catch(err){
        next(err)
    }

});

//Get all locations
router.get("/", async (req, res, next) =>{

        
    
    try {
        const locations = await Location.find();
        res.status(200).json(locations)

        

        

    } catch(err){
        next(err)
    }

});


//Get all locations for vdu assessment form





module.exports = router;

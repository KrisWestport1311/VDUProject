const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


//Register new user
router.post("/register", async (req,res) =>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,

        })

        const user = await newUser.save(); 
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err);
    }
})


//Log in user
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("User not found")

        const validated = await bcrypt.compare(req.body.password, user.password)   
        !validated   && res.status(400).json("Wrong details")

        const token = jwt.sign({id:user._id}, process.env.JWT)

        const { password, ...others } = user._doc;

        res.cookie("access_token", token, {
           httpOnly:true 
        })
        .status(200)
        .json(others);

        

    }catch (err){
        res.status(500).json(err);
    }
});




module.exports = router;
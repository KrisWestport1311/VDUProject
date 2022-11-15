import User from "../models/User.js"

export const getUsers = async (req, res) =>{
   try{
        const users = await User.find();
        res.json(users);
   } catch (error) {
        res.status(500).json({messgage: error.message}); //error on our server
   }
}
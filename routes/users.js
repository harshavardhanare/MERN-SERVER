//roots->users.js
const express=require('express')
const router=express.Router()
const User=require('../models/userSchema')

//PUT the data (update the data)
const updateUser=router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId, {password: password }, { new: true });
          //use findByIdAndUpdate instead of UpdateOne
          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" }); }
        res.status(200).json({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });

router.delete('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId);
        res.status(200).json({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });

module.exports=router;

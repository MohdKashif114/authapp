const express=require("express");
const router=express.Router();

const {login,signup} = require("../controllers/userController");
const {auth,isStudent,isAdmin}= require("../middlewares/auth");

router.post("/signup",signup);
router.post("/login",login);

// Protected routes
router.get("/student",auth,isStudent,(req,res) => {
    res.json({
        success:true,
        message:"welcome to the protected routes for Students",
    });
});
router.get("/admin",auth,isAdmin,(req,res) =>{
    res.json({
        success:true,
        message:"welcome to the protected routes for Admin",
    });
});

module.exports=router;
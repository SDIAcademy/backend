const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/", async (req, res) => {
    let result = await User.find({});
    res.json(result);
});

router.get("/test", async (req, res) => {
    // let result = await User.find({});
    res.send("hello");
});

router.post("/mongo", (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        interests: req.body.interests,
        organizations: req.body.organizations,
        courses: req.body.courses
    });

    User.create((err, user) => {
        if (err) console.error("error entering into DB: " + err);
        res.redirect("/");
    });
});

module.exports = router;

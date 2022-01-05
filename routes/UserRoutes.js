const express = require("express");
const router = express.Router();
const User = require("../Modal/Users");






/*getting all users in the database*/
router.get("/getallusers", (req, res) => {
    User.find()
      .then((users) => res.send(users))
      .catch((err) => console.log(err));
  });


  /*adding users in the Database*/
  router.post("/adduser", (req, res) => {
    console.log(req.body);
    const { name, lastName, age } = req.body;
    const newUser = new User({
      name,
      lastName,
      age,
    });
    newUser
      .save()
      .then((response) => res.send(`user added:${response}`))
      .catch((err) => console.log(err));
  });


  /*edit user in the Database*/
  router.put("/edituser/:userId", (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body)
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  });



  /*delete user in the Database*/
  router.delete("/deleteuser/:userId", (req, res) => {
    User.findByIdAndRemove(req.params.userId, function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    });
  });

  module.exports = router;

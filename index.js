//dont know if you need this but here is the video link i used to learn and use express with mongo and node for reference https://www.youtube.com/watch?v=_7UQPve99r4&t=3581s
//these are imports for mongo, express, and the routes which run crud actions
const express = require("express");
const mongoose = require("mongoose");
const gymMemberRoutes = require("./routes/gymMember.routes");
const gymClassRoutes = require("./routes/gymClass.routes");
const memberClassRoutes = require("./routes/memberClass.routes");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/gym-members", gymMemberRoutes);
app.use("/api/gym-classes", gymClassRoutes);
app.use("/api/member-classes", memberClassRoutes);

//random fun stuff i got off a video
app.get("/", (req, res) => {
  res.send("Hello welcome to my gym management database");
});

//connect u to database
mongoose
  .connect(
    "mongodb+srv://glenceaserCS230:cq7Wp0TuQzbBuHze@cluster0.lgqqi30.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

/**
 * Database Design and Modeling Overview:
 *
 * I used MongoDB for the gym management system as said in the assignment. Its a pretty easy setup with three main parts: GymMember, GymClass, and MemberClass, each based on its own model.
 *
 * 1. GymMember Model:
 *    - This is about the gym members and they info.
 *    - It gets stuff like names, emails, and whether they've gone for the premium membership.
 *    - used for keeping tabs on member info and their membership types.
 *
 * 2. GymClass Model:
 *    - This one tracks class information like time and stuff
 *    - It has basics—class names, when they happen, how long they last, how much they cost, and how many are signed up.
 *    - It makes schedulimg classes easier and convienient
 *
 * 3. MemberClass Model:
 *    - The link between GymMembers and GymClasses.
 *    - Each record connects a member to the 3 or more classes they're enrolled in.
 *    - Its good for handling which users have which classes
 *
 * Linking up MemberClass with references to GymMember and GymClass makes it easy to make changes and see current info
 *
 * Impact on Code Development:
 * - The way things are modeled means I can focus on one part of the app at a time—developing, testing, and maintaining it separately.
 * - Using Mongoose for the schema makes it easier for the database part of the assignment as it doesnt need unnesaccery long code and works nicely
 * - The apis are organised allowing for extentions to be easy if wanted such as more models.
 * - And since the design is so adaptable, I can introduce new stuff down the line without meesing other aspects of the code that is currently in place.
 *
 *  In conclusion my database design ties in nicely with what I need for a gym management system. It's solid and adjustable.
 */

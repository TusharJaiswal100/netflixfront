const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// .then(() => {
//     console.log("DB Connected");
// });

app.use("/api/user", userRoutes);

// app.listen(4000, console.log("server started"));

const PORT = process.env.PORT || 4000

 

const CONNECTION_URL = "mongodb+srv://tusharjaiswal:tusharjaiswal@netflixcluster.oxwmnho.mongodb.net/test"




mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})

.then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))

.catch((err) => console.log(err.message))
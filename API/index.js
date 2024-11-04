const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const connectDb = require("./config/dbconfig");
const addHotelSeedData = require("./routes/dataImport");
const addCategorySeedData = require("./routes/categoryImport");

const hotelRoutes = require("./routes/hotel");
const categoryRoutes = require("./routes/category");
const singleHotelRoutes = require("./routes/singleHotel");
const authRoutes = require("./routes/auth");
const wishListRoutes = require("./routes/wishlist");

const PORT = 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('<html><h1>Welcome to travel app...!</h1></html>')
})
app.use("/api", addHotelSeedData);
app.use("/api", addCategorySeedData);

app.use("/api", hotelRoutes);
app.use("/api", singleHotelRoutes);
app.use("/api", categoryRoutes);
app.use("/api", authRoutes);
app.use("/api", wishListRoutes);

connectDb(() => {
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is up and running...");
  });
});

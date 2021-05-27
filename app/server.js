require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_URI, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(_=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Successfully connected to database");
        console.log(`Server listening at port ${process.env.PORT}`);
    });
})
.catch(error=>{
    console.log("Unable to start server because of the error", error);
});
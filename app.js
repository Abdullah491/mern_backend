const express = require('express');
const mongoose=require('mongoose');
const app = express();
const DB='mongodb+srv://Abdullah:hassan655@cluster0.ozoll0a.mongodb.net/mern?retryWrites=true&w=majority'


// Database Connection
mongoose.connect(DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{console.log('Mongo Connection Successful')}).catch((err)=>console.log("Error in Connection: ",err));

// Middleware
const middleware=(req,res,next)=>{
    console.log('this is middleware');
    next();

}


app.get('/', (req, res) => {
    res.send('This is home page');

});
app.get('/about', middleware,(req, res) => {
    console.log('this  is about page');
    res.send('This is About page');
});
app.get('/signIn', (req, res) => {
    res.send('This is Signin page');
});
app.get('/signUp', (req, res) => {
    res.send('This is SignUp page');
});
app.listen(3000, () => {
    console.log('server is runninng in the nodemon');
})
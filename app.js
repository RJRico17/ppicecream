import express, { urlencoded } from 'express';
const app = express();
app.use(express(urlencoded({extended: true})));
app.use(express.static('public'));
app.set('view engine','ejs');
const PORT = 5000;
app.get('/',(req,res) => {
    res.render("index");
})
app.listen(PORT,(req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
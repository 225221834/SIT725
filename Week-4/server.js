
var express = require("express")
var app = express()
var port = process.env.port || 3004
const mongoose = require('mongoose');

//middleware 
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
    mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
// 2. Define your schema and model
    const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('Project', ProjectSchema);
    // 3. REST API route
    app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
});
    

/*const cardList = [
{
    title: "Pattern 2",
    image: "images/image2.jpg",
    link: "About Pattern 2",
    desciption: "Demo desciption about Pattern 2"
},
{
    title: "Pattern 3",
    image: "images/image3.jpg",
    link: "About Pattern 3",
    desciption: "Demo desciption about Pattern 3"
}
]*/
    app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})
var port = process.env.port || 3000;

app.listen(port,()=>{
console.log("App listening to: "+port)
});


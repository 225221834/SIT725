const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
  {
    title: "Pattern 1",
    image: "images/image1.jpg",
    link: "About Pattern 1",
    description: "A touch of beauty",
  },
  {
    title: "Pattern 2",
    image: "images/image2.jpg",
    link: "About Pattern 2",
    description: "A touch of Life",
  },
  {
    title: "Pattern 3",
    image: "images/image3.jpg",
    link: "About Pattern 3",
    description: "A touch of imagination",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
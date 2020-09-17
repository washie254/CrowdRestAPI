const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database
mongoose.connect('mongodb:127.0.0.1:27017/workersdb',{useNewUrlParser: true }) 
.then(() => console.log("Connected to the database"))
.catch(err => console.log(err));

//Middleware 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Controllers
const WorkerControl = require('./controllers/WorkerControl');

//Routes
app.post('/api/worker/create', WorkerControl.create);
app.post('/api/worker/update', WorkerControl.update);
app.get('/api/worker/retrieve',WorkerControl.retrieve);
app.delete('/api/worker/delete',WorkerControl.delete);

//Start Server
app.listen(3000, ()=> console.log("server started on 3000"));
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const EmployeeRoute = require('./routes/employee');
var cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://ravitejanamani:Naktelidu%4015@demoapp.fzdsvbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client = mongoose.connection;
client.on('error', (err) => console.log('Error occured with DB'));
client.once('open', () => console.log('DB Established'));

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.listen(4000, () => console.log('Staterd...'));

app.use('/app', EmployeeRoute);

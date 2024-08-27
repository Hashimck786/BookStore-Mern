import express from 'express';
import {PORT,MONGODB_URL} from './config.js'
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//   origin:'http://localhost:3000',
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders:['Content-Type']
// }))
app.get('/',(req,res)=>{
  return res.status(200).send('Mern stack project started')
})

app.use('/books',bookRoute)



app.listen(PORT,()=>{
  console.log('App is working on port 5005');
})


mongoose.connect(MONGODB_URL)
.then(()=>{
  console.log('app connected to database');
})
.catch((err)=>{
  console.error(err.message)
})
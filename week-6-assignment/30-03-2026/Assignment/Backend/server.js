import exp from 'express'
import 'dotenv/config'
import { connect } from 'mongoose'
import { employeeApp } from './APIs/EmployeeAPI.js'
import cors from 'cors'

const app = exp()

app.use(
  cors({
    origin: 'https://atp-24eg110a09-frontend.onrender.com'
  })
)

app.use(exp.json())
app.use('/employee-api', employeeApp)

const port = process.env.PORT || 4000;

// Start server immediately
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// Connect DB separately
connect(process.env.DB_URL)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log('Error in DB Connect', err));

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url)
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name)
  console.log(err)
  //ValidationError
  if (err.name === 'ValidationError') {
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  }
  //CastError
  if (err.name === 'CastError') {
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  }
  //Duplicate Key
  if (err.code === 11000) {
    return res
      .status(400)
      .json({ message: 'Error occured', error: 'Duplicate entry detected (e.g. Email already exists)' })
  }
  //Send server side errors
  res.status(500).json({ message: 'Error occured', error: err.message })
})

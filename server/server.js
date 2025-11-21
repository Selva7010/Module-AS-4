// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv/config'
// import cookiePaser from 'cookie-parser'
// import connectDB from './config/mongodb.js'
// import  authRouter  from './routes/authRoutes.js'


// const app=express()
// const port = process.env.PORT || 4000
// connectDB()

// app.get('/', (req,res)=>console.log('API Working'))
// app.use('/api/auth', authRouter)

// app.use(express.json())
// app.use(cookiePaser())
// app.use(cors({credentials:true}))

// app.listen(port, ()=>console.log(`server started on PORT : ${port}`))

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import router from './routes/customerRoutes.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()

// MIDDLEWARE MUST COME BEFORE ROUTES
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:4000",  // your frontend
    credentials: true
}))

// ROUTES
app.use('/api/auth', authRouter)
app.use("/api/customers", router)

app.get('/', (req, res) => res.send('API Working'))

app.listen(port, () => console.log(`Server started on PORT: ${port}`))

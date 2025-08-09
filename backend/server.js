import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000

// Connect to services
connectDB()
connectCloudinary()

// Show service status
console.log("\n🚀 Starting E-commerce Backend...")
console.log("📊 MongoDB: Connecting...")
console.log("☁️  Cloudinary: Checking configuration...")
console.log("💳 Stripe: " + (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== 'sk_test_dummy_key_for_now' ? '✅ Configured' : '⚠️  Not configured'))
console.log("💳 Razorpay: " + (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID !== 'dummy_key_id_for_now' ? '✅ Configured' : '⚠️  Not configured'))
console.log("")

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))
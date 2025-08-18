import 'dotenv/config'

console.log('Backend Environment Variables:')
console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID || 'NOT SET')
console.log('RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET ? '***' + process.env.RAZORPAY_KEY_SECRET.slice(-4) : 'NOT SET')
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'NOT SET')
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'SET' : 'NOT SET')

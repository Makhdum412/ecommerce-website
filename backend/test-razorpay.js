import razorpay from 'razorpay'
import 'dotenv/config'

console.log('Testing Razorpay Configuration...')
console.log('Key ID:', process.env.RAZORPAY_KEY_ID)
console.log('Key Secret:', process.env.RAZORPAY_KEY_SECRET ? '***' + process.env.RAZORPAY_KEY_SECRET.slice(-4) : 'NOT SET')

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error('❌ Razorpay keys not found in environment variables')
    process.exit(1)
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Test creating a simple order
const testOrder = async () => {
    try {
        const options = {
            amount: 100, // 1 rupee in paise
            currency: 'INR',
            receipt: 'test_receipt_' + Date.now()
        }
        
        console.log('Creating test order...')
        const order = await razorpayInstance.orders.create(options)
        console.log('✅ Razorpay test successful!')
        console.log('Order ID:', order.id)
        console.log('Order Status:', order.status)
        return true
    } catch (error) {
        console.error('❌ Razorpay test failed:')
        console.error('Error:', error.error?.description || error.message)
        console.error('Status Code:', error.statusCode)
        return false
    }
}

testOrder()

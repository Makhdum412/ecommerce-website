# Razorpay Payment Troubleshooting Guide

## 🚨 Common Issues and Solutions

### 1. **"Razorpay payment is not configured" Error**

**Problem**: Backend shows "⚠️ Not configured" for Razorpay in server logs.

**Solution**: 
1. Create a `.env` file in the `backend` directory with:
```env
RAZORPAY_KEY_ID=your_actual_razorpay_key_id
RAZORPAY_KEY_SECRET=your_actual_razorpay_secret_key
```

2. Create a `.env` file in the `frontend` directory with:
```env
VITE_RAZORPAY_KEY_ID=your_actual_razorpay_key_id
```

### 2. **"Razorpay is not configured" Frontend Error**

**Problem**: Frontend shows this error when trying to pay.

**Solution**: 
- Ensure `VITE_RAZORPAY_KEY_ID` is set in frontend `.env` file
- Restart the frontend development server after adding environment variables

### 3. **Payment Gateway Not Opening**

**Problem**: Clicking Razorpay payment doesn't open the payment modal.

**Possible Causes**:
- Razorpay script not loaded
- Invalid key configuration
- JavaScript errors

**Solutions**:
1. Check browser console for errors
2. Verify Razorpay script is loaded (should be in `index.html`)
3. Ensure valid Razorpay keys are used

### 4. **Payment Verification Fails**

**Problem**: Payment completes but verification fails.

**Solutions**:
1. Check backend logs for verification errors
2. Ensure `razorpay_order_id` is being passed correctly
3. Verify Razorpay webhook configuration (if using webhooks)

## 🔧 Setup Instructions

### Step 1: Get Razorpay Keys
1. Sign up/login to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to Settings → API Keys
3. Generate a new key pair
4. Copy the Key ID and Key Secret

### Step 2: Configure Backend
1. Create `.env` file in `backend` directory:
```env
RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_secret_key_here
```

### Step 3: Configure Frontend
1. Create `.env` file in `frontend` directory:
```env
VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
```

### Step 4: Restart Servers
```bash
# Backend
cd backend
npm run server

# Frontend  
cd frontend
npm run dev
```

## 🐛 Debugging Steps

### 1. Check Server Logs
Look for these messages when starting backend:
```
💳 Razorpay: ✅ Configured
```
If you see "⚠️ Not configured", environment variables are missing.

### 2. Check Browser Console
Open browser dev tools and look for:
- JavaScript errors
- Network request failures
- Razorpay initialization errors

### 3. Test API Endpoints
Test the Razorpay endpoints directly:
```bash
# Test order creation
curl -X POST http://localhost:4000/api/order/razorpay \
  -H "Content-Type: application/json" \
  -H "token: your_jwt_token" \
  -d '{"items":[],"amount":100,"address":{}}'
```

## 🔍 Common Error Messages

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "Razorpay payment is not configured" | Missing environment variables | Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to backend .env |
| "Failed to create Razorpay order" | Invalid amount or currency | Check amount format (should be in paise) |
| "Payment verification failed" | Order status not 'paid' | Check Razorpay dashboard for payment status |
| "Razorpay is not configured" (frontend) | Missing VITE_RAZORPAY_KEY_ID | Add to frontend .env file |

## 📞 Support

If issues persist:
1. Check Razorpay dashboard for payment status
2. Review server logs for detailed error messages
3. Verify all environment variables are correctly set
4. Ensure you're using test keys for development

## 🔐 Security Notes

- Never commit `.env` files to version control
- Use test keys for development
- Use production keys only in production environment
- Keep your Razorpay secret keys secure

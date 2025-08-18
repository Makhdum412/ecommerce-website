# 🛍️ Islavida E-Commerce Platform

A modern, feature-rich e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a customer-facing frontend, admin panel, and robust backend API.

## ✨ Features

### 🛒 Customer Features
- **User Authentication & Authorization** - Secure JWT-based login/signup
- **Product Catalog** - Browse products with search and filtering
- **Shopping Cart** - Add/remove items with quantity management
- **Order Management** - Place orders and track order history
- **Payment Integration** - Multiple payment gateways (Stripe & Razorpay)
- **User Profile** - Manage personal information and addresses

### 👨‍💼 Admin Features
- **Product Management** - Add, edit, delete products
- **Order Management** - Process and track customer orders
- **User Management** - View and manage customer accounts
- **Dashboard** - Analytics and overview of business metrics
- **Image Management** - Cloudinary integration for product images

### 🔧 Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Real-time Updates** - Live cart and order status updates
- **File Upload** - Image handling with Cloudinary
- **Security** - Password hashing, JWT tokens, CORS protection
- **Scalable Architecture** - Modular backend with separate admin panel

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - Modern UI framework
- **Vite 5.4.1** - Fast build tool and dev server
- **React Router DOM 6.26.1** - Client-side routing
- **Tailwind CSS 3.4.10** - Utility-first CSS framework
- **Axios 1.7.4** - HTTP client for API communication
- **React Toastify 10.0.5** - User notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.19.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.5.3** - MongoDB object modeling
- **JWT 9.0.2** - Authentication and authorization
- **bcryptjs 2.4.3** - Password security
- **Multer 1.4.5-lts.1** - File upload handling
- **CORS 2.8.5** - Cross-origin resource sharing
- **Validator 13.12.0** - Input validation

### Services & Integrations
- **Cloudinary 2.4.0** - Cloud image/video management
- **Stripe 16.8.0** - Payment processing
- **Razorpay 2.9.4** - Alternative payment gateway
- **Vercel** - Deployment platform

## 📁 Project Structure

```
ecommerce-website/
├── frontend/                 # Customer-facing React app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state
│   │   └── assets/         # Static assets
│   ├── public/             # Public files
│   └── package.json        # Frontend dependencies
├── admin/                   # Admin panel React app
│   ├── src/                # Admin-specific components
│   └── package.json        # Admin dependencies
├── backend/                 # Node.js/Express API
│   ├── routes/             # API route handlers
│   ├── models/             # MongoDB schemas
│   ├── controllers/        # Business logic
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration files
│   ├── vercel.json         # Vercel deployment config
│   └── server.js           # Main server file
├── RAZORPAY_TROUBLESHOOTING.md  # Payment gateway troubleshooting
└── README.md               # This file
```

## 🌐 Live Demo

### Frontend (Customer Portal)
https://ecommerce-website-frontend-d0kx.onrender.com/

### Admin Panel
*Deployed separately - check deployment section for setup*

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database (local or MongoDB Atlas)
- Cloudinary account
- Stripe account (optional)
- Razorpay account (optional)

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ecommerce-website
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with your configuration
cp .env.example .env
# Edit .env with your actual values

npm run server
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Payment Gateways (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Server
PORT=4000
```

## 🚀 Running the Application

### Development Mode
```bash
# Backend (Terminal 1)
cd backend
npm run server

# Frontend (Terminal 2)
cd frontend
npm run dev

# Admin Panel (Terminal 3)
cd admin
npm run dev
```

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Admin
cd admin
npm run build

# Backend
cd backend
npm start
```

## 📱 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Products
- `GET /api/product` - Get all products
- `POST /api/product` - Create product (admin)
- `PUT /api/product/:id` - Update product (admin)
- `DELETE /api/product/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove` - Remove item from cart

### Orders
- `POST /api/order/create` - Create order
- `GET /api/order/history` - Get order history
- `PUT /api/order/status` - Update order status (admin)

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for custom design system
- Update CSS variables in `src/index.css`
- Customize component styles in individual component files

### Features
- Add new product categories in backend models
- Implement additional payment gateways
- Extend admin dashboard with new analytics

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Frontend/Admin**: Deploy to Netlify, Vercel, or any static hosting
- **Backend**: Deploy to Railway, Render, or any Node.js hosting
- **Database**: Use MongoDB Atlas for cloud database

## 🔧 Troubleshooting

### Payment Gateway Issues
Check the `RAZORPAY_TROUBLESHOOTING.md` file for common Razorpay integration issues and solutions.

### Common Issues
- Ensure all environment variables are properly set
- Check MongoDB connection string format
- Verify Cloudinary credentials
- Ensure CORS is properly configured for your domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing frontend framework
- **Express.js** for the robust backend framework
- **Tailwind CSS** for the utility-first CSS framework
- **MongoDB** for the flexible database solution
- **Vite** for the fast build tooling

## 📞 Support

If you have any questions or need help with the project:

- Create an issue in the GitHub repository
- Check the existing issues for solutions
- Review the code comments for implementation details
- Check the troubleshooting documentation

---

⭐ **Star this repository if you found it helpful!**

**Happy Coding! 🚀**



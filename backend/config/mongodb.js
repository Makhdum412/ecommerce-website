import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Connection options to prevent timeouts and fix SSL issues
        const options = {
            maxPoolSize: 10, // Maximum number of connections in the pool
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            socketTimeoutMS: 45000, // Timeout for socket operations
            bufferCommands: false, // Disable mongoose buffering
            bufferMaxEntries: 0, // Disable mongoose buffering
            
            // SSL/TLS Configuration for MongoDB Atlas
            ssl: true,
            tls: true,
            tlsAllowInvalidCertificates: false,
            tlsAllowInvalidHostnames: false,
            
            // Retry settings
            retryWrites: true,
            retryReads: true,
            
            // Connection timeout
            connectTimeoutMS: 10000,
        };

        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, options);

        // Connection event handlers
        mongoose.connection.on('connected', () => {
            console.log("✅ MongoDB Connected Successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("❌ MongoDB Connection Error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("⚠️  MongoDB Disconnected");
        });

        // Graceful shutdown
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log("MongoDB connection closed through app termination");
            process.exit(0);
        });

    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;
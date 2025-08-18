import mongoose from 'mongoose'

const carouselSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    position: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const carouselModel = mongoose.models.carousel || mongoose.model('carousel', carouselSchema)

export default carouselModel




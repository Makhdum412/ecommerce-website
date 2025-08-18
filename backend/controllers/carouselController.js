import { v2 as cloudinary } from 'cloudinary'
import carouselModel from '../models/carouselModel.js'

// Add a new carousel slide
const addSlide = async (req, res) => {
    try {
        const { title = '', link = '', position = 0, active = true } = req.body
        const image = req.files?.image && req.files.image[0]

        if (!image) {
            return res.json({ success: false, message: 'Image is required' })
        }

        const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: 'image' })

        const slide = new carouselModel({
            imageUrl: uploadResult.secure_url,
            title,
            link,
            position: Number(position) || 0,
            active: String(active) === 'false' ? false : Boolean(active)
        })

        await slide.save()
        res.json({ success: true, message: 'Slide added', slide })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// List slides (active first, by position then date)
const listSlides = async (req, res) => {
    try {
        const slides = await carouselModel.find({}).sort({ active: -1, position: 1, date: -1 })
        res.json({ success: true, slides })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Public: list active slides
const listActiveSlides = async (req, res) => {
    try {
        const slides = await carouselModel.find({ active: true }).sort({ position: 1, date: -1 })
        res.json({ success: true, slides })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Update slide
const updateSlide = async (req, res) => {
    try {
        const { id, title, link, position, active } = req.body
        const update = {}
        if (title !== undefined) update.title = title
        if (link !== undefined) update.link = link
        if (position !== undefined) update.position = Number(position)
        if (active !== undefined) update.active = String(active) === 'false' ? false : Boolean(active)

        // Optional: replace image
        const image = req.files?.image && req.files.image[0]
        if (image) {
            const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: 'image' })
            update.imageUrl = uploadResult.secure_url
        }

        await carouselModel.findByIdAndUpdate(id, update)
        res.json({ success: true, message: 'Slide updated' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Remove slide
const removeSlide = async (req, res) => {
    try {
        const { id } = req.body
        await carouselModel.findByIdAndDelete(id)
        res.json({ success: true, message: 'Slide removed' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addSlide, listSlides, listActiveSlides, updateSlide, removeSlide }




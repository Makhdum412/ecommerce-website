import express from 'express'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'
import { addSlide, listSlides, listActiveSlides, updateSlide, removeSlide } from '../controllers/carouselController.js'

const carouselRouter = express.Router()

// Admin
carouselRouter.post('/add', adminAuth, upload.fields([{ name: 'image', maxCount: 1 }]), addSlide)
carouselRouter.post('/list', adminAuth, listSlides)
carouselRouter.post('/update', adminAuth, upload.fields([{ name: 'image', maxCount: 1 }]), updateSlide)
carouselRouter.post('/remove', adminAuth, removeSlide)

// Public
carouselRouter.get('/active', listActiveSlides)

export default carouselRouter





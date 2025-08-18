import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.aboutus} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Isla Vidaa, we design and curate resort wear, beachwear, travel outfits, and accessories that bring together elegance, comfort, and versatility. From breezy dresses and chic co-ords to statement accessories that complete your look, every piece is crafted to ensure you feel confident and stylish wherever your adventures take you.</p>
              <p>Since our inception, we’ve worked tirelessly to bring together unique collections tailored for women, men, couples, and even pets, making Isla Vidaa a brand that travels with you in every sense. With a focus on quality fabrics, thoughtful designs, and sustainable practices, we aim to inspire a lifestyle where fashion meets wanderlust.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Isla Vidaa, our mission is to make travel stylish and effortless with elegant, comfortable, and sustainable resort wear that celebrates freedom, togetherness, and responsible living.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exclusive Resort Wear:</b>
            <p className=' text-gray-600'>Stylish, comfortable, and perfect for travel & leisure.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Personalised Fashion:</b>
            <p className=' text-gray-600'>Custom boxes, couple outfits, and even pet-friendly styles.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Sustainable & Premium:</b>
            <p className=' text-gray-600'>High-quality fabrics with eco-conscious practices.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About

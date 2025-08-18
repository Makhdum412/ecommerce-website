import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Carousel = ({ token }) => {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [position, setPosition] = useState(0)
  const [active, setActive] = useState(true)
  const [slides, setSlides] = useState([])

  const loadSlides = async () => {
    try {
      const res = await axios.post(backendUrl + '/api/carousel/list', {}, { headers: { token } })
      if (res.data.success) setSlides(res.data.slides)
      else toast.error(res.data.message)
    } catch (err) {
      toast.error(err.message)
    }
  }

  useEffect(() => { loadSlides() }, [])

  const onAdd = async (e) => {
    e.preventDefault()
    try {
      const form = new FormData()
      if (image) form.append('image', image)
      form.append('title', title)
      form.append('link', link)
      form.append('position', position)
      form.append('active', active)
      const res = await axios.post(backendUrl + '/api/carousel/add', form, { headers: { token } })
      if (res.data.success) {
        toast.success('Slide added')
        setImage(null); setTitle(''); setLink(''); setPosition(0); setActive(true)
        loadSlides()
      } else toast.error(res.data.message)
    } catch (err) { toast.error(err.message) }
  }

  const onToggleActive = async (id, current) => {
    try {
      const res = await axios.post(backendUrl + '/api/carousel/update', { id, active: !current }, { headers: { token } })
      if (res.data.success) { loadSlides() } else toast.error(res.data.message)
    } catch (err) { toast.error(err.message) }
  }

  const onRemove = async (id) => {
    try {
      const res = await axios.post(backendUrl + '/api/carousel/remove', { id }, { headers: { token } })
      if (res.data.success) { toast.success('Removed'); loadSlides() } else toast.error(res.data.message)
    } catch (err) { toast.error(err.message) }
  }

  return (
    <div className='flex flex-col gap-6'>
      <form onSubmit={onAdd} className='flex flex-col gap-3 w-full max-w-xl'>
        <p className='font-medium'>Add Carousel Slide</p>
        <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
        <input className='px-3 py-2 border' placeholder='Title (optional)' value={title} onChange={e => setTitle(e.target.value)} />
        <input className='px-3 py-2 border' placeholder='Link (optional)' value={link} onChange={e => setLink(e.target.value)} />
        <input className='px-3 py-2 border' type='number' placeholder='Position' value={position} onChange={e => setPosition(e.target.value)} />
        <label className='flex gap-2 items-center'>
          <input type='checkbox' checked={active} onChange={() => setActive(!active)} /> Active
        </label>
        <button type='submit' className='w-28 py-2 bg-black text-white'>Add</button>
      </form>

      <div>
        <p className='font-medium mb-2'>Existing Slides</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {slides.map(slide => (
            <div key={slide._id} className='border p-3 flex flex-col gap-2'>
              <img src={slide.imageUrl} alt='' className='w-full h-40 object-cover' />
              <p className='text-sm truncate'>{slide.title}</p>
              <div className='flex items-center justify-between'>
                <label className='flex items-center gap-2 text-sm'>
                  <input type='checkbox' checked={slide.active} onChange={() => onToggleActive(slide._id, slide.active)} /> active
                </label>
                <button onClick={() => onRemove(slide._id)} className='text-red-600 text-sm'>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel





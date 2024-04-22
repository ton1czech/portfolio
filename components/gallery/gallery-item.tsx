'use client'

import { useState } from 'react'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  item: any
}

export const GalleryItem = ({ item }: Props) => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Link
        onMouseEnter={() => {
          setIsHovering()
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsNotHovering()
          setIsHovered(false)
        }}
        href={item.href}
        className='flex flex-col flex-nowrap group relative'
      >
        <img
          src={item.images[0]}
          className='transition duration-300 rounded-xl'
          style={{ filter: isHovered ? 'brightness(100%)' : 'brightness(85%)' }}
        />
        <p className='text-sm text-zinc-200 absolute bottom-2 left-2 bg-black/20 p-1 rounded-md'>
          {language === 'en' && item.labelEn}
          {language === 'cs' && item.labelCs}
        </p>
      </Link>
    </motion.div>
  )
}

'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { ServiceCard } from './service-card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <h3 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 xl:mb-10 uppercase'>
        Services
      </h3>

      <div className='grid lg:grid-cols-3 gap-8 mb-10'>
        <ServiceCard
          title='Eshop Creation'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tempore neque soluta quidem, delectus corrupti impedit sint quos iusto commodi? Iusto ullam natus officiis quos necessitatibus quae rem earum corporis modi mollitia consectetur nihil error, dolor fugit. Omnis excepturi architecto, ex, odit illum perspiciatis illo doloremque maxime obcaecati laboriosam accusantium nostrum tempora? Harum voluptate nulla, consequuntur architecto amet cum natus illum officiis adipisci temporibus beatae nam corrupti magni expedita velit, similique a iusto libero, dolor nobis optio. Iste qui voluptas asperiores ratione modi quae magnam illum! Tempora repellendus expedita sint ad incidunt, consectetur hic unde, in sit vel, est impedit.'
        />
        <ServiceCard
          title='Web Development'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tempore neque soluta quidem, delectus corrupti impedit sint quos iusto commodi? Iusto ullam natus officiis quos necessitatibus quae rem earum corporis modi mollitia consectetur nihil error, dolor fugit. Omnis excepturi architecto, ex, odit illum perspiciatis illo doloremque maxime obcaecati laboriosam accusantium nostrum tempora? Harum voluptate nulla, consequuntur architecto amet cum natus illum officiis adipisci temporibus beatae nam corrupti magni expedita velit, similique a iusto libero, dolor nobis optio. Iste qui voluptas asperiores ratione modi quae magnam illum! Tempora repellendus expedita sint ad incidunt, consectetur hic unde, in sit vel, est impedit.'
          highlight
        />
        <ServiceCard
          title='Management'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tempore neque soluta quidem, delectus corrupti impedit sint quos iusto commodi? Iusto ullam natus officiis quos necessitatibus quae rem earum corporis modi mollitia consectetur nihil error, dolor fugit. Omnis excepturi architecto, ex, odit illum perspiciatis illo doloremque maxime obcaecati laboriosam accusantium nostrum tempora? Harum voluptate nulla, consequuntur architecto amet cum natus illum officiis adipisci temporibus beatae nam corrupti magni expedita velit, similique a iusto libero, dolor nobis optio. Iste qui voluptas asperiores ratione modi quae magnam illum! Tempora repellendus expedita sint ad incidunt, consectetur hic unde, in sit vel, est impedit.'
        />
      </div>

      <Link
        href='/services'
        className='flex items-center gap-2 justify-center hover:text-purple-500 hover:underline'
      >
        Learn More <ArrowRight className='h-4 w-4' />
      </Link>
    </Container>
  )
}
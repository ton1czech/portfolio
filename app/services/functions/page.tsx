'use client'

import { Contact } from '@/components/contact'
import { Intro } from '@/components/services/functions/intro'
import { Options } from '@/components/services/functions/options'
import { Supported } from '@/components/services/functions/supported'

export default function Page() {
  return (
    <div className='mt-28 lg:mt-32 mb-20 lg:mb-32'>
      <Intro />
      <Options />
      <Supported />
      <Contact />
    </div>
  )
}

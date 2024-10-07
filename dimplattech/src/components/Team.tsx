import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface teamProps {
    image: StaticImageData
}

export default function Team({image}: teamProps) {
  return (
    <div>
        <Image src={image} style={{aspectRatio: "3/4"}} className=' w-full block rounded-xl' alt="team member" />
    </div>
  )
}

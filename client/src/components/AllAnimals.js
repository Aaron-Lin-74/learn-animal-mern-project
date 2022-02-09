import React, { useEffect } from 'react'
import AnimalTypeSection from './AnimalTypeSection'
import { useGlobalContext } from '../contexts/AppContext'

const AllAnimals = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <div>
      <AnimalTypeSection
        type='mammals'
        description='Mammals include humans and all other animals that are warm-blooded vertebrates with hair.'
      />
      <AnimalTypeSection
        type='birds'
        description='Birds are vertebrate animals adapted for flight. Many can also run, jump, swim, and dive.'
      />
      <AnimalTypeSection
        type='reptiles'
        description='Reptiles are a group of cold-blooded animals which have scaly skins and lay eggs.'
      />
      <AnimalTypeSection
        type='fish'
        description='Fish are scaly skinned vertebrate animals that swim in water and breath using gills.'
      />
      <AnimalTypeSection
        type='amphibians'
        description='Amphibians are best known for their ability to live both on land and in water.'
      />
      <AnimalTypeSection
        type='invertebrates'
        description='An invertebrate is a cold-blooded animal with no backbone.'
      />
    </div>
  )
}

export default AllAnimals

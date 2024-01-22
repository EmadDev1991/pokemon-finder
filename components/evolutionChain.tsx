import { getEvolutionChain } from '@/actions/pokemon'
import React, { Suspense } from 'react'
import PokemonCard from './pokemonCard'
import CardSkeleton from './shared/cardSkeleton'

interface EvolutionChainProps{
    id: number 
}

const EvolutionChain =  async ({id}:EvolutionChainProps) => {
    const evolutionChain = await getEvolutionChain(id.toString())
  return (
    <div className="grid grid-cols-12 gap-4 ">
        {evolutionChain.map((name)=>(
            <Suspense fallback={<CardSkeleton/>}>
             <PokemonCard name={name}/>   
            </Suspense>
            
        ))}
    </div>
  )
}

export default EvolutionChain
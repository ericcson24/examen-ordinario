"use client"


import CharacterDetailCard from "@/components/CharacterDetailCard"
import { getCharacterbyId } from "@/lib/api"
import { Character, CharacterDetail } from "@/lib/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"



export default function CharacterCardDetailPage () {
    const params= useParams<{id:string}>()
    const id=params?.id
    
    const [character, setCharacter]=useState<CharacterDetail|null>(null)
    const [loading,setloading]=useState<boolean>(true)
    const [error,seterror]=useState<string>("")

    useEffect (()=>{
        const fetchCharacter= async()=>{
            setloading(true)
            try{
                const data= await getCharacterbyId(id)
                setCharacter(data)
            }catch{
                seterror("error al cargar el personaje")
            }finally{
                setloading(false)
            }
        }
        fetchCharacter()
    },[])

    return(
        <div>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && character && (<ul>
                <CharacterDetailCard key={character.id} character={character}/>
            </ul>)}
        </div>
    )
}
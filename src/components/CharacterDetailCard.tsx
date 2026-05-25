"use client"


import { Character, CharacterDetail, Episode } from "@/lib/types"
import { useEffect, useState } from "react"


type ChaeacterDetailStruct ={
    character:CharacterDetail
}

export default function CharacterDetailCard({character}: ChaeacterDetailStruct){
    
 

    return(
        <div>
            <div>
                <h1>{character.name}</h1>
                <img src={character.image}></img>
            </div>
            <div>
                <p>Genero:{character.gender}</p>
                <p>Estado:{character.status}</p>
                <p>Especie:{character.species}</p>
                <p>Id:{character.id}</p>
                <p>Origen:{character.origin.name}</p>
                <p>Location:{character.location.name}</p>
            </div>
            
            

        </div>
    )

}
/*
Nombre
• Género
• Estado
• Especie
• ID
• Origen
• Location
*/
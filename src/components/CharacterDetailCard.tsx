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
            

        </div>
    )

}
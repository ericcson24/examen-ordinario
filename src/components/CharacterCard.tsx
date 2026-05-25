"use client"

import { Character } from "@/lib/types"
import "./CharacterCard.css"
import Link from "next/link"

type Characterprops= {
    character:Character
}

export default function CharacterCard({character}:Characterprops){

    return(
        <div className="character-card">
            <Link href={`/character/${character.id}`}>
            <div>
                <img className="imagen" src={character.image} alt={character.name} aria-placeholder="Imagen"></img>
            </div>
            <div>
                <h2>{character.name}</h2>
            </div>
            </Link>

            
        </div>
    )
}

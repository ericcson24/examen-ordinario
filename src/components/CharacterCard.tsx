"use client"

import styles from "./paginator.module.css";

import { Character } from "@/lib/types"

import Link from "next/link"

type Characterprops= {
    character:Character
}

export default function CharacterCard({character}:Characterprops){

    return(
        <div className={styles.card}>
            <Link href={`/character/${character.id}`}>
            <div>
                <img className={styles.image} src={character.image} alt={character.name} aria-placeholder="Imagen"></img>
            </div>
            <div>
                <h2>{character.name}</h2>
            </div>
            <div>
                <p>{character.status}</p>
            </div>
            <div>
                <p>{character.gender}</p>
            </div>
            </Link>

            
        </div>
    )
}

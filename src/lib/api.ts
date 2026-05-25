//https://rickandmortyapi.com/api

import axios from "axios";
import { Character, CharacterDetail, CharacterResponse, Episode } from "./types";

const api= axios.create({
    baseURL:"https://rickandmortyapi.com/api",
    timeout: 10000
})

export async function GetAllCharacters(page:number){
    try{
        const response = await api.get <CharacterResponse>(`/character?page=${page}`)
        return response.data
    }catch(error){
        console.error("Error en la llamada de api GetAllCharacters")
        throw error
    }
}

export async function SearchCharacter(name:string,page:number) {
    try{
        const response = await api.get <CharacterResponse>(`/character?page=${page}&name=${name}`)
        return response.data
    }catch(error){
        console.error("Error en la llamada de api SearchCharacter")
        throw error
    }
}

export async function getCharacterbyId(id:string) {
    try{
        const response = await api.get <CharacterDetail>(`/character/${id}`)
        return response.data
    }catch(error){
        console.error("Error en la llamada de api SearchCharacter")
        throw error
    }
}
export async function SearchCharacterFilterStatus(status:string,page:number) {
    try{
        const response = await api.get <CharacterResponse>(`/character?page=${page}&status=${status}`)
        return response.data
    }catch(error){
        console.error("Error en la llamada de api SearchCharacter")
        throw error
    }
}

export async function SearchCharacterFilterGender(status:string,page:number) {
    try{
        const response = await api.get <CharacterResponse>(`/character?page=${page}&gender=${status}`)
        return response.data
    }catch(error){
        console.error("Error en la llamada de api SearchCharacter")
        throw error
    }
}
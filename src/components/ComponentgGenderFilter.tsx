"use client"

import { SearchCharacterFilterGender, SearchCharacterFilterStatus } from "@/lib/api"
import { Character, CharacterDetail, Episode } from "@/lib/types"
import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard"
import Paginator from "./Paginator"


type StatusImport = {
    SetStatus:(status:boolean)=>void
}

export default function ComponentFilterStatus({SetStatus}:StatusImport){
    
    const[busqueda,setbusqueda]=useState<number>(1)
    const [characters,setCharacters]=useState<Character[]|null>(null)
    const [loading,setloading]=useState<boolean>(true)
    const [error,seterror]=useState<string>("")
    const [quesebusca,setquesebusca]=useState<string>("dead")
    const [page, setpaginator]=useState<number>(1)
    const [totalPages,setTotalPages]=useState<number>(0)

    useEffect(()=>{
        const fetchStatusFilter=async()=>{
            setloading(true)
            
            SetStatus(true)
            try{
                if(busqueda==1){
                    const data= await SearchCharacterFilterGender("Female",1)
                    setCharacters(data.results)
                    setquesebusca("Alive")
                    setTotalPages(data.info.pages)
                }
                if(busqueda==2){
                    const data= await SearchCharacterFilterGender("Male",1)
                    setCharacters(data.results)
                    setquesebusca("unknown")
                    setTotalPages(data.info.pages)
                }
                if(busqueda==3){
                    const data= await SearchCharacterFilterGender("Genderless",1)
                    setCharacters(data.results)
                    setquesebusca("dead")
                    setTotalPages(data.info.pages)
                }
                if(busqueda==4){
                    const data= await SearchCharacterFilterGender("unknown",1)
                    setCharacters(data.results)
                    setquesebusca("dead")
                    setTotalPages(data.info.pages)
                    setbusqueda(0)
                }
            }catch{
                seterror("Error al aplicar el filtro")
            }finally{
                setloading(false)
                
            }
        }
        fetchStatusFilter()
    },[busqueda,page])
 

    return(
        <div>

            { characters && !loading && !error &&(<ul>
                <div>
                    <button onClick={()=>(setbusqueda(busqueda+1))}>{quesebusca}</button>
                </div>
                {characters.map((e)=><CharacterCard key={e.id} character={e}/>)}

                <Paginator
                    CurrentPage={page}
                    TotalPages={totalPages}
                    setPage={setpaginator}
                />
            </ul>)}

        </div>
    )

}
"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Character } from "@/lib/types";
import { GetAllCharacters, SearchCharacter } from "@/lib/api";

import Paginator from "@/components/Paginator";
import CharacterCard from "@/components/CharacterCard";
import ComponentFilterStatus from "@/components/ComponentStatusFilter";

export default function Home() {

  
  const [characters, setCharacters]=useState<Character[]|null>(null)
  const [loading,setloading]=useState<boolean>(true)
  const [error,seterror]=useState<string>("")
  const [page, setpaginator]=useState<number>(1)
  const [totalPages,setTotalPages]=useState<number>(0)
  const [busqueda, setbusqueda]=useState<string>("")
  const [filtroStatusClicked,setFiltroStatusClicked]=useState<boolean>(false)

  useEffect(()=>{
    
      const fetchCharacters= async ()=>{
        setloading(true)
        try{
          const query=busqueda.trim()
          const data =  query ?  await SearchCharacter(query, page) : await GetAllCharacters(page)
          setCharacters(data.results)
          setTotalPages(data.info.pages)
          seterror("")
        }catch{
          seterror("Error al mostrar personajes")
        }finally{
          setloading(false)
        }
      }
    fetchCharacters()

  },[page,busqueda])

  return (
    <div className={styles.page}>
        <div><h1>Api Rick y Morti: </h1></div>
        <div>
          <p>Buscador:</p>
          <input placeholder="Busca personaje" onKeyDown={e => { if (e.key === "Enter")(setbusqueda(busqueda))}}  onChange={(e)=>(setbusqueda(e.target.value),setFiltroStatusClicked(false))}></input>
        </div>
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {filtroStatusClicked &&(<ul>
          
          <ComponentFilterStatus SetStatus={setFiltroStatusClicked}></ComponentFilterStatus>
        </ul>)}
        {!filtroStatusClicked&&!loading && !error && characters && (
        <ul className={styles.grid}>
          <button onClick={()=>setFiltroStatusClicked(true)}>Filtro estado</button>

        {characters.map((character)=>(<CharacterCard key={character.id} character={character}/>))}
          <Paginator
            CurrentPage={page}
            TotalPages={totalPages}
            setPage={setpaginator}
          />
        </ul>)}
        


    </div>
  );
}

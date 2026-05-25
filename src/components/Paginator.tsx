"use client"

import styles from "./paginator.module.css";


type PaginatorStruct = {
    CurrentPage:number,
    TotalPages:number,
    setPage: (Page:number) => void
}

export default function Paginator ({CurrentPage,TotalPages,setPage}:PaginatorStruct){
    const hasNext = CurrentPage < TotalPages
    const hasPrev = CurrentPage > 1

    const has2Page = TotalPages>=2
    const has3Page = TotalPages>=3

    const hasLast1Page = TotalPages>=5
    const hasLast2Page = TotalPages>=6
    const hasLast3Page = TotalPages>=7




    return(
        <div className="Paginator">
            <div className="boton-sig-ant">
                {hasPrev && <button onClick={()=>(setPage(CurrentPage-1))}> Anterior</button>}
                {hasNext && <button onClick={()=>(setPage(CurrentPage+1))}> Siguiente</button>}

            </div>
            <div className={styles.page}>
                <p>Ir a la pagina:</p>
                <button onClick={()=>setPage(1)}>1</button>
                {has2Page && (<ul><button className={styles.button} onClick={()=>setPage(2)}>2</button></ul>)}
                {has3Page && (<ul><button className={styles.button} onClick={()=>setPage(3)}>3</button></ul>)}
                {CurrentPage>3&&(<ul> <button onClick={()=>setPage(CurrentPage)}>{CurrentPage}</button></ul>)}
                {hasLast3Page && CurrentPage<TotalPages-2&&(<ul><button className={styles.button} onClick={()=>setPage(TotalPages-2)}>{TotalPages-2}</button></ul>)}
                {hasLast2Page && CurrentPage<TotalPages-1&&(<ul><button className={styles.button} onClick={()=>setPage(TotalPages-1)}>{TotalPages-1}</button></ul>)}
                {hasLast1Page && CurrentPage<TotalPages&& (<ul><button className={styles.button} onClick={()=>setPage(TotalPages)}>{TotalPages}</button></ul>)}


            </div>
            
        </div>
    )
}
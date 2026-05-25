"use client"

type PaginatorStruct = {
    CurrentPage:number,
    TotalPages:number,
    setPage: (Page:number) => void
}

export default function Paginator ({CurrentPage,TotalPages,setPage}:PaginatorStruct){
    const hasNext = CurrentPage < TotalPages
    const hasPrev = CurrentPage > 1

    return(
        <div className="Paginator">

            {hasPrev && <button onClick={()=>(setPage(CurrentPage-1))}> Anterior</button>}
            {hasNext && <button onClick={()=>(setPage(CurrentPage+1))}> Siguiente</button>}

        </div>
    )
}
export type Character = {
    id: string,
    name: string,
    image: string,
    status: string,
    gender: string
}

export type CharacterDetail = {
    id: string,
    name: string,
    image: string,
    episode:string[]
    status: string,
    gender: string
    species:string,
    origin: {
        name:string
    }
    location:{
        name:string
    }
}

export type Response <T> = {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null,
    },
    results: T[]
}

export type Episode= {
    id:string
    name:string
}


export type CharacterResponse =Response<Character>

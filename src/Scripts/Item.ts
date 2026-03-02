export interface Jersey{
    id:number
    Name: string
    Description:string
    price:number
    Stock:number
}
export const jerseyNull: Jersey={
    id:0,
    Name: "",
    Description:"",
    price:0,
    Stock:0
}
export const jersey: Jersey={
    id:1,
    Name: "Bresil maison",
    Description:"CDM 2002 retro kit",
    price:220,
    Stock:80
}
export const jersey1: Jersey={
    id:2,
    Name: "Italie visite",
    Description:"CDM 2006 retro kit",
    price:150,
    Stock:46
}
export const jersey2: Jersey={
    id:3,
    Name: "Colombie maison",
    Description:"CDM 2014 retro kit",
    price:140,
    Stock:15
}

export const jersey3: Jersey={
    id:4,
    Name: "France maison",
    Description:"CDM 2026 nouveau",
    price:110,
    Stock:200
}
export const jerseyList :Jersey[] =[jersey,jersey1,jersey2,jersey3]
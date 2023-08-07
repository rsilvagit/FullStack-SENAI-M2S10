import { useEffect } from "react"

export default function Noticias (){
    useEffect(()=>{
        console.log('UseEffect renderizado.');
    })

    return(
        <>
            <h1>Noticias</h1>
        </>
    )

}
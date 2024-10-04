"use client"

import { useState, useEffect } from "react";


interface Props {
    title: string;
    image: string;
    
}


export default function Page({params}: {params:{id:string}}){
    const {id} = params;
    

    const [product, setProducts] = useState<Props | null>(null)
    useEffect(()=>{
        (async ()=>{
            try {
                const products= await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!products.ok)
                    {
                    throw new Error('Network response was not ok');
                    }
                    const data : Props = await products.json();
                    setProducts(data)
                } catch (error) {
                    console.error("Error al obtener los productos:", error)
                }
            })
            ();
        },[id])
    
        return (
            <div className="flex items-center justify-center text-xl p-6">
                {product ? (
                    <div className="flex flex-col items-center gap-20">
                        <h1>{product.title}</h1>
                        <img src={product.image} alt={product.title}  height={450} width={450}/>
                        
                    </div>
                ) : (
                    <p className="flex items-center justify-center">Cargando...</p>
                )}
            </div>
        );
    }
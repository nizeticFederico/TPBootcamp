"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSharedState } from "@/context";

export interface Props {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export default function ProductList() {
    const [products, setProducts] = useState<Props[]>([])
    const {cartQuantity , setCartQuantity} = useSharedState()!;

    useEffect(()=>{
        (async ()=>{
            try {
                const products= await fetch('https://fakestoreapi.com/products')
                if (!products.ok) {
                    throw new Error('Network response was not ok');
                }
                const data : Props[] = await products.json();
                setProducts(data)
            } catch (error) {
                console.error("Error al obtener los productos:", error)
            }
        })
        ();
    },[])
    
 const router = useRouter() 
return(
<div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {products.map((product)=>( 
        <div key={product.id} onClick={()=>router.push(`/products/${product.id}`)} className="bg-black border border-white shadow-md rounded-lg gap-4 overflow-hidden flex flex-col justify-between items-center cursor-pointer">
            <img src={product.image} alt={product.title} width={150} height={150}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="flex items-center gap-4 ">
                <button className="bg-black text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 py-2 px-4 rounded">Comprar</button>
                <button onClick={(e) => {
                                e.stopPropagation(); 
                                setCartQuantity(cartQuantity + 1);
                            }} className="bg-black text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 py-2 px-4 rounded">Agregar al carrito</button>
            </div>
        </div>
    ))}
</div>)
}
"use client"

import Link from "next/link";
import { useSharedState } from "@/context";

const navItems = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'Carrito', route: '/cart' }
];

function NavBar(){
    const { cartQuantity } = useSharedState()!;

    return (
        <nav className="flex text-center justify-center bg-black text-white gap-10 text-xl">
            {navItems.map((item, index) => (
                <Link key={index} href={item.route}>
                    {item.label}
                </Link>
            ))}
            <div>Cart Quantity: {cartQuantity}</div>
        </nav>
    );
};

export default NavBar;
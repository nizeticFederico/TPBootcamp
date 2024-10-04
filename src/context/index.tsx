"use client"

import { useContext, createContext, useState } from "react";
import { ReactNode } from "react";

interface SharedState {
    cartQuantity: number;
    setCartQuantity: (quantity: number) => void;
}

export const SharedStateContext = createContext<SharedState | null>(null);

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
    const [cartQuantity, setCartQuantity] = useState(0);

    return (
        <SharedStateContext.Provider value={{ cartQuantity, setCartQuantity }}>
            {children}
        </SharedStateContext.Provider>
    );
};

 export function useSharedState() {
    return useContext(SharedStateContext);
}


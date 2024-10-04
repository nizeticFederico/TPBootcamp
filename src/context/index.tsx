"use client";

import { useContext, createContext, useState } from "react";
import { ReactNode } from "react";

export const SharedStateContext = createContext<any>(null);

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
    const [cartQuantity, setCartQuantity] = useState(0);

    return (
        <SharedStateContext.Provider value={{ cartQuantity, setCartQuantity }}>
            {children}
        </SharedStateContext.Provider>
    );
};

export default function useSharedState() {
    const context = useContext(SharedStateContext);
    if (context === undefined) {
        throw new Error("useSharedState debe estar dentro de un SharedStateProvider");
    }
    return context;
}
import { useContext } from "react"
import { CartContest } from "./CartContext"

export const useCartContext = () => {
    return useContext(CartContest);
};
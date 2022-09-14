import { useCallback, useState } from "react";
import { Titulo } from "../../sdk/@types/Titulo";
import TituloService from "../../sdk/services/Titulo.service";

export default function useTitulos() {

    const [titulos, setTitulos] = useState<Titulo.Output[]>([])

    const fetchTitulos = useCallback(() => {
        TituloService.getAllTitulo().then(setTitulos)
    }, [])

    return {
        fetchTitulos,
        titulos
    }
}
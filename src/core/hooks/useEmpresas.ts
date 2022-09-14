import { useCallback, useState } from "react"
import { Empresa } from "../../sdk/@types/Empresa"
import EmpresaService from "../../sdk/services/Empresa.service"

export default function useEmpresas() {

    const [empresas, setEmpresas] = useState<Empresa.Output[]>([])

    const fetchEmpresas = useCallback(() => {
        EmpresaService.getAllEmpresas().then(setEmpresas)
    }, [])

    return {
        fetchEmpresas, empresas
    }
}
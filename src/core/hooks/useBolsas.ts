import { useCallback, useState } from "react";
import { BolsaOutput } from "../../sdk/@types/BolsaOutput";
import BolsaService from "../../sdk/services/Bolsa.service";

export default function useBolsas() {

    const [bolsas, setBolsas] = useState<BolsaOutput[]>([])

    const fetchBolsas = useCallback(() => {
        BolsaService.getAllBolsas().then(setBolsas);
    }, [])
    return {
        fetchBolsas, bolsas
    }
}
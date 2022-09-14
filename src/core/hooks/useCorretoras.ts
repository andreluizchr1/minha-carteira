import { useCallback, useState } from "react";
import { CorretoraOutput } from "../../sdk/@types/CorretoraOutput";
import CorretoraService from "../../sdk/services/Corretora.service";

export default function useCorretoras() {

    const [corretoras, setCorretoras] = useState<CorretoraOutput[]>([]);

    const fetchCorretoras = useCallback(() => {
        CorretoraService.getAllCorretoras().then(setCorretoras);
    }, []);

    return {
        fetchCorretoras, corretoras
    }
}
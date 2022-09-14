import { CorretoraInput } from "../@types/CorretoraInput";
import { CorretoraOutput } from "../@types/CorretoraOutput";
import Service from "../Service";

class CorretoraService extends Service {

    static getAllCorretoras() {
        return this.Http.get<CorretoraOutput[]>('/corretoras').then(this.getData)
    }

    static getExistingCorretora(id: number) {
        return this.Http.get<CorretoraOutput>(`/corretoras/${id}`).then(this.getData)
    }

    static insertNewCorretora(corretora: CorretoraInput) {
        return this.Http.post('/corretoras', corretora).then(this.getData)
    }

}

export default CorretoraService
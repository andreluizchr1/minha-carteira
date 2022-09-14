import { Titulo } from "../@types/Titulo";
import Service from "../Service";

class TituloService extends Service {
    static getAllTitulo() {
        return this.Http.get<Titulo.Output[]>('/titulos').then(this.getData)
    }

    static insertNewTitutlo(titulo: Titulo.Input) {
        return this.Http.post('/titulos', titulo).then(this.getData)
    }
}

export default TituloService
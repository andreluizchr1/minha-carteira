import { BolsaInput } from "../@types/BolsaInput";
import { BolsaOutput } from "../@types/BolsaOutput";
import Service from "../Service";

class BolsaService extends Service {
    static getAllBolsas() {
        return this.Http.get<BolsaOutput[]>('/bolsas').then(this.getData)
    }

    static insertNewBolsa(bolsa: BolsaInput) {
        return this.Http.post('/bolsas', bolsa).then(this.getData)
    }
}

export default BolsaService
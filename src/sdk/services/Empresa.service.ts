import { Empresa } from "../@types/Empresa";
import Service from "../Service";

class EmpresaService extends Service {
    static getAllEmpresas() {
        return this.Http.get<Empresa.Output[]>('/empresas').then(this.getData)
    }

    static insertNewEmpresa(empresa: Empresa.Input) {
        return this.Http.post('/empresas', empresa).then(this.getData)
    }
}

export default EmpresaService
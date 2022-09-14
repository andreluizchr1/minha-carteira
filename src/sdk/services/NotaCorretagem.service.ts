import { NotaCorretagem } from "../@types/NotaCorretagem";
import Service from "../Service";

class NotaCorretagemService extends Service {
    static insertNewNotaCorretagem(notaCorretagem: NotaCorretagem.Input) {
        return this.Http.post('/notas', notaCorretagem).then(this.getData)
    }
}

export default NotaCorretagemService
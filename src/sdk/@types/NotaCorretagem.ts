import { type } from "os";
import { MinhaCarteira } from "./MinhaCarteira";

export namespace NotaCorretagem {
    export type Input = MinhaCarteira.components['schemas']['NotaCorretagemInput']
    export type Output = MinhaCarteira.components['schemas']['NotaCorretagemOutput']
}
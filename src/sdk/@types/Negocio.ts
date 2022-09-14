import { MinhaCarteira } from "./MinhaCarteira";

export namespace Negocio {
    export type Input = MinhaCarteira.components['schemas']['NegocioInput']
    export type Output = MinhaCarteira.components['schemas']['NegocioOutput']
}
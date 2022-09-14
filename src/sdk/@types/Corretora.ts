import { MinhaCarteira } from "./MinhaCarteira";

export namespace Corretora {
    export type Input = MinhaCarteira.components['schemas']['CorretoraInput']
    export type Output = MinhaCarteira.components['schemas']['CorretoraOutput']
}
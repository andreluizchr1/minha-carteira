import { MinhaCarteira } from "./MinhaCarteira";

export namespace Empresa {
    export type Input = MinhaCarteira.components['schemas']['EmpresaInput']
    export type Output = MinhaCarteira.components['schemas']['EmpresaOutput']
}
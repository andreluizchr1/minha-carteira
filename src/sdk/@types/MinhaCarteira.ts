export namespace MinhaCarteira {
    export interface paths {
        "/corretoras/{id}": {
            get: operations["findCorretora"];
            put: operations["fullUpdateCorretora"];
            patch: operations["incremetalUpdateCorretora"];
        };
        "/titulos": {
            get: operations["listTitulos"];
            /** Cria um titulo de valor negociável */
            post: operations["createTitulo"];
        };
        "/notas": {
            get: operations["listNotaCorretagem"];
            /** Cria uma nota de corretagem */
            post: operations["createNotaCorretagem"];
        };
        "/negocios": {
            get: operations["listNegocios"];
            /** Cria uma negociação de um titulo */
            post: operations["createNegocio"];
        };
        "/empresas": {
            get: operations["listEmpresas"];
            post: operations["createEmpresa"];
        };
        "/corretoras": {
            /** Lista todas as corretoras */
            get: operations["listCorretoras"];
            post: operations["createCorretora"];
        };
        "/bolsas": {
            /** Lista todas as bolsas */
            get: operations["listBolsas"];
            post: operations["createBolsa"];
        };
        "/corretoras/situacao": {
            get: operations["listCorretorasByStatus"];
        };
    }

    export interface components {
        schemas: {
            /** @description Classe que representa uma corretora de valores */
            Corretora: {
                /** Format: int64 */
                id?: number;
                nome: string;
                /** Format: date-time */
                dataCadastro: string;
                /** Format: date-time */
                dataFinalizacao?: string;
                cnpj: string;
                status: boolean;
            };
            CorretoraOutput: {
                /** Format: int64 */
                id?: number;
                nome?: string;
                /** Format: date-time */
                dataCadastro?: string;
                /** Format: date-time */
                dataFinalizacao?: string;
                cnpj?: string;
                status?: boolean;
            };
            TituloInput: {
                /** Format: int64 */
                idBolsa: number;
                ativo: boolean;
                /** Format: int64 */
                idEmpresa: number;
                codigo: string;
                /** Format: date-time */
                dataInicialNegociacao: string;
                /** Format: date-time */
                dataFinalNegociacao?: string;
                strike?: number;
                acao: boolean;
                opcao: boolean;
            };
            BolsaOutput: {
                /** Format: int64 */
                id?: number;
                nome?: string;
                sigla?: string;
                ativo?: boolean;
                /** Format: date-time */
                dataCriacao?: string;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
            EmpresaOutput: {
                /** Format: int64 */
                id?: number;
                nome?: string;
                cnpj?: string;
                ativo?: boolean;
                /** Format: date-time */
                dataCriacao?: string;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
            TituloOutput: {
                /** Format: int64 */
                id?: number;
                bolsa?: components["schemas"]["BolsaOutput"];
                ativo?: boolean;
                empresa?: components["schemas"]["EmpresaOutput"];
                codigo?: string;
                /** Format: date-time */
                dataInicialNegociacao?: string;
                /** Format: date-time */
                dataFinalNegociacao?: string;
                strike?: number;
                acao?: boolean;
                opcao?: boolean;
            };
            NegocioInput: {
                /** Format: int64 */
                idTitulo: number;
                /** Format: int32 */
                quantidade?: number;
                preco?: number;
                /** @enum {string} */
                tipoNegocio: "COMPRA" | "VENDA";
                /** @enum {string} */
                tipoMercado:
                | "VISTA"
                | "OPCAO_DE_COMPRA"
                | "OPCAO_DE_VENDA"
                | "EXERCICIO_OPCAO_DE_COMPRA"
                | "EXERCICIO_OPCAO_DE_VENDA";
            };
            NotaCorretagemInput: {
                /** Format: int64 */
                idCorretora: number;
                taxasImpostos?: number;
                irrf?: number;
                negocios: components["schemas"]["NegocioInput"][];
            };
            /** @description Classe que representa a bolsa onde está sendo negociado */
            Bolsa: {
                /** Format: int64 */
                id?: number;
                nome: string;
                sigla: string;
                ativo: boolean;
                /** Format: date-time */
                dataCriacao: string;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
            /** @description Classe que representa uma empresa listada em bolsa */
            Empresa: {
                /** Format: int64 */
                id?: number;
                nome: string;
                cnpj: string;
                ativo: boolean;
                /** Format: date-time */
                dataCriacao: string;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
            /** @description Classe que representa uma negociação em uma nota de corretagem */
            Negocio: {
                /** Format: int64 */
                id?: number;
                titulo?: components["schemas"]["Titulo"];
                /** Format: int32 */
                quantidade?: number;
                preco?: number;
                /** @enum {string} */
                tipoNegocio: "COMPRA" | "VENDA";
                /** @enum {string} */
                tipoMercado:
                | "VISTA"
                | "OPCAO_DE_COMPRA"
                | "OPCAO_DE_VENDA"
                | "EXERCICIO_OPCAO_DE_COMPRA"
                | "EXERCICIO_OPCAO_DE_VENDA";
                valorNegociado?: number;
            };
            NotaCorretagemOutput: {
                /** Format: int64 */
                id?: number;
                corretora?: components["schemas"]["Corretora"];
                taxasImpostos?: number;
                irrf?: number;
                negocios?: components["schemas"]["Negocio"][];
            };
            /** @description Classe que representa um titulo de valor negociavel */
            Titulo: {
                /** Format: int64 */
                id?: number;
                bolsa?: components["schemas"]["Bolsa"];
                empresa?: components["schemas"]["Empresa"];
                codigo: string;
                /** Format: date-time */
                dataInicialNegociacao?: string;
                /** Format: date-time */
                dataFinalNegociacao?: string;
                strike?: number;
                ativo?: boolean;
                acao?: boolean;
                opcao?: boolean;
            };
            NegocioOutput: {
                /** Format: int64 */
                id?: number;
                titulo?: components["schemas"]["Titulo"];
                /** Format: int32 */
                quantidade?: number;
                preco?: number;
                valorNegociado?: number;
                /** @enum {string} */
                tipoNegocio?: "COMPRA" | "VENDA";
                /** @enum {string} */
                tipoMercado?:
                | "VISTA"
                | "OPCAO_DE_COMPRA"
                | "OPCAO_DE_VENDA"
                | "EXERCICIO_OPCAO_DE_COMPRA"
                | "EXERCICIO_OPCAO_DE_VENDA";
            };
            EmpresaInput: {
                nome: string;
                cnpj: string;
                /** Format: date-time */
                dataCriacao?: string;
                ativo: boolean;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
            CorretoraInput: {
                nome: string;
                cnpj: string;
                ativo: boolean;
                /** Format: date-time */
                dataCadastro?: string;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
            BolsaInput: {
                nome: string;
                sigla: string;
                ativo: boolean;
                /** Format: date-time */
                dataCriacao?: string;
                /** Format: date-time */
                dataFinalizacao?: string;
            };
        };
    }

    export interface operations {
        findCorretora: {
            parameters: {
                path: {
                    id: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["CorretoraOutput"];
                    };
                };
            };
        };
        fullUpdateCorretora: {
            parameters: {
                path: {
                    id: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["CorretoraOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["Corretora"];
                };
            };
        };
        incremetalUpdateCorretora: {
            parameters: {
                path: {
                    id: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["CorretoraOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["Corretora"];
                };
            };
        };
        listTitulos: {
            parameters: {
                query: {
                    page?: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["TituloOutput"][];
                    };
                };
            };
        };
        /** Cria um titulo de valor negociável */
        createTitulo: {
            responses: {
                /** Caso o cadastro do título tenha sucesso */
                200: {
                    content: {
                        "application/json": components["schemas"]["TituloOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["TituloInput"];
                };
            };
        };
        listNotaCorretagem: {
            parameters: {
                query: {
                    page?: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["NotaCorretagemOutput"][];
                    };
                };
            };
        };
        /** Cria uma nota de corretagem */
        createNotaCorretagem: {
            responses: {
                /** Caso a nota de corretagem seja cadastrada com sucesso */
                200: {
                    content: {
                        "application/json": components["schemas"]["NotaCorretagemOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["NotaCorretagemInput"];
                };
            };
        };
        listNegocios: {
            parameters: {
                query: {
                    page?: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["NegocioOutput"][];
                    };
                };
            };
        };
        /** Cria uma negociação de um titulo */
        createNegocio: {
            responses: {
                /** Caso o cadastro do negócio tenha sucesso */
                200: {
                    content: {
                        "application/json": components["schemas"]["NegocioOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["NegocioInput"];
                };
            };
        };
        listEmpresas: {
            parameters: {
                query: {
                    page?: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["EmpresaOutput"][];
                    };
                };
            };
        };
        createEmpresa: {
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["EmpresaOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["EmpresaInput"];
                };
            };
        };
        /** Lista todas as corretoras */
        listCorretoras: {
            parameters: {
                query: {
                    page?: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["CorretoraOutput"][];
                    };
                };
            };
        };
        createCorretora: {
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["CorretoraOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["CorretoraInput"];
                };
            };
        };
        /** Lista todas as bolsas */
        listBolsas: {
            parameters: {
                query: {
                    page?: number;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["BolsaOutput"][];
                    };
                };
            };
        };
        createBolsa: {
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["BolsaOutput"];
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["BolsaInput"];
                };
            };
        };
        listCorretorasByStatus: {
            parameters: {
                query: {
                    status: boolean;
                };
            };
            responses: {
                /** OK */
                200: {
                    content: {
                        "application/json": components["schemas"]["CorretoraOutput"][];
                    };
                };
            };
        };
    }

    export interface external { }

}
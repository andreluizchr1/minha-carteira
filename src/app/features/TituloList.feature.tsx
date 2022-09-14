import { Skeleton, Table, Tag } from "antd"
import { useEffect } from "react"
import useTitulos from "../../core/hooks/useTitulos"
import { Titulo } from "../../sdk/@types/Titulo"
import { format } from 'date-fns'
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons"

export default function TituloListFeature() {

    const { fetchTitulos, titulos } = useTitulos()

    useEffect(() => {
        fetchTitulos()
    }, [fetchTitulos])

    if (!titulos.length) {
        return <div>
            <Skeleton active={true} title={false} />
        </div>
    }

    return <>
        <Table<Titulo.Output>
            dataSource={titulos}
            columns={
                [
                    {
                        title: 'Código',
                        dataIndex: 'codigo',
                        key: 'codigo',
                        render: codigo => <Tag color="#102878"><strong>{codigo}</strong></Tag>

                    },
                    {
                        title: 'Empresa',
                        dataIndex: 'empresa',
                        key: 'empresa',
                        render: empresa => empresa.nome
                    },
                    {
                        title: 'Negociado em',
                        dataIndex: 'bolsa',
                        key: 'bolsa',
                        render: bolsa => bolsa.sigla

                    },
                    {
                        title: 'Ação',
                        dataIndex: 'acao',
                        key: 'acao',
                        render(acao: boolean) {
                            return acao ? <Tag icon={<CheckOutlined />}
                                color="#147006">Sim</Tag> : <Tag icon={<CloseCircleOutlined />} color="#cf0202">Não</Tag>
                        }

                    },
                    {
                        title: 'Opção',
                        dataIndex: 'opcao',
                        key: 'opcao',
                        render(opcao: boolean) {
                            return opcao ? <Tag icon={<CheckOutlined />} color="#147006">Sim</Tag> : <Tag icon={<CloseCircleOutlined />} color="#cf0202">Não</Tag>
                        }
                    },
                    {
                        title: 'Strike',
                        dataIndex: 'strike',
                        key: 'strike',
                        render(strike: number, row) {
                            return row.opcao ? strike : "Não Aplicável"
                        }
                    },
                    {
                        title: 'Estado do Título',
                        dataIndex: 'ativo',
                        key: 'ativo',
                        render(ativo: boolean) {
                            return ativo ? <Tag icon={<CheckOutlined />}
                                color="#147006">Negociável</Tag> : <Tag icon={<CloseCircleOutlined />} color="#cf0202">Incomerciável</Tag>
                        }
                    },
                    {
                        title: 'Data Criação',
                        dataIndex: 'dataInicialNegociacao',
                        key: 'dataInicialNegociacao',
                        render(dataInicialNegociacao: string) {
                            return format(new Date(dataInicialNegociacao), 'dd/MM/yyyy')
                        }
                    }
                ]
            }
        />
    </>
}
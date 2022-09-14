import { CheckOutlined, CloseCircleOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import { Button, Skeleton, Table, Tag } from "antd"
import { useEffect } from "react"
import { Empresa } from "../../sdk/@types/Empresa"
import useEmpresas from "../../core/hooks/useEmpresas"

export default function EmpresaListFeature() {

    const { fetchEmpresas, empresas } = useEmpresas()

    useEffect(() => {
        fetchEmpresas()
    }, [fetchEmpresas])

    if (!empresas.length) {
        console.log(empresas)
        return <div>
            <Skeleton active={true} title={false} />
        </div>
    }
    return <>
        <Table<Empresa.Output>
            dataSource={empresas}
            columns={
                [
                    {
                        title: 'Nome da Empresa',
                        dataIndex: 'nome',
                        key: 'nome'
                    }, {
                        title: 'CNPJ',
                        dataIndex: 'cnpj',
                        align: 'center',
                        key: 'cnpj'
                    }, {
                        title: 'Data de Cadastro',
                        dataIndex: 'dataCriacao',
                        align: 'center',
                        key: 'dataCriacao'
                    }, {
                        title: 'Data de Final de Uso',
                        dataIndex: 'dataFinalizacao',
                        align: 'center',
                        key: 'dataFinalizacao'
                    }, {
                        title: 'Status',
                        dataIndex: 'ativo',
                        align: 'center',
                        render(ativo: boolean) {
                            return ativo ? <Tag icon={<CheckOutlined />
                            } color="#147006">Ativo</Tag> : <Tag icon={<CloseCircleOutlined />} color="#cf0202">Inativo</Tag>
                        }
                    }, {
                        title: 'Ações',
                        dataIndex: 'id',
                        key: 'id',
                        render() {
                            return (
                                <>
                                    <Button icon={<EyeOutlined />} size='small' />

                                    <Button icon={<EditOutlined />} size='small' />
                                </>
                            )
                        }
                    }
                ]
            }
        />
    </>
}
import { Button, Skeleton, Table, Tag } from "antd";
import { useEffect } from "react";
import { BolsaOutput } from "../../sdk/@types/BolsaOutput";
import useBolsas from "../../core/hooks/useBolsas";
import { format } from 'date-fns';
import { CheckOutlined, CloseCircleOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

export default function BolsaListFeature() {

    const { fetchBolsas, bolsas } = useBolsas();

    useEffect(() => {
        fetchBolsas()
    }, [fetchBolsas])

    if (!bolsas.length) {
        return <div>
            <Skeleton active={true} title={false} />
        </div>
    }

    return (
        <>
            <Table<BolsaOutput>
                dataSource={bolsas}
                title={() => 'Titulo'}
                columns={
                    [
                        {
                            dataIndex: 'nome',
                            title: 'Nome da Corretora'
                        },
                        {
                            dataIndex: 'sigla',
                            title: 'Nome Fantasia',
                            align: 'center'
                        },
                        {
                            dataIndex: 'dataCriacao',
                            title: 'Data Criação no Sistema',
                            align: 'center',
                            render(dataCriacao: string) {
                                return format(new Date(dataCriacao), 'dd/MM/yyyy')
                            }
                        },
                        {

                            dataIndex: 'dataFinalizacao',
                            title: 'Data de Final de Uso',
                            align: "center",
                            render(dataFinalizacao: string) {
                                return dataFinalizacao === null ? 'Não há dados' : format(new Date(dataFinalizacao), 'dd/MM/yyyy')
                            }
                        },
                        {
                            dataIndex: 'ativo',
                            title: 'Status',
                            align: 'center',
                            render(ativo: boolean) {
                                return ativo ? <Tag icon={<CheckOutlined />
                                } color="#147006">Ativo</Tag> : <Tag icon={<CloseCircleOutlined />} color="#cf0202">Inativo</Tag>
                            }
                        },
                        {
                            dataIndex: 'id',
                            title: 'Ações',
                            align: 'center',
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
    )
}
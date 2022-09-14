import { Button, Skeleton, Table, Tag } from "antd";
import { useEffect } from "react";
import { CorretoraOutput } from "../../sdk/@types/CorretoraOutput";
import useCorretoras from "../../core/hooks/useCorretoras";
import { format } from 'date-fns'
import { CheckOutlined, CloseCircleOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

export default function CorretoraListFeature() {

    const { fetchCorretoras, corretoras } = useCorretoras();

    //Usar useEffect para fazer requisições e renderizar as informações
    useEffect(() => {
        fetchCorretoras()
    }, [fetchCorretoras]);

    if (!corretoras.length) {
        return <div>
            <Skeleton active={true} title={false} />
        </div>
    }

    return (
        <>
            <Table<CorretoraOutput>
                dataSource={corretoras}
                columns={[
                    {
                        dataIndex: 'nome',
                        title: 'Nome da Corretora'

                    },
                    {
                        dataIndex: 'cnpj',
                        title: 'CNPJ',
                        align: 'center'
                    },
                    {
                        dataIndex: 'dataCadastro',
                        title: 'Data de Cadastro',
                        align: 'center',
                        render(dataCadastro: string) {
                            return format(new Date(dataCadastro), 'dd/MM/yyyy')
                        }
                    }, {
                        dataIndex: 'dataFinalizacao',
                        title: 'Data de Final de Uso',
                        align: "center",
                        render(dataFinalizacao: string) {
                            return dataFinalizacao === null ? 'Não há dados' : format(new Date(dataFinalizacao), 'dd/MM/yyyy')
                        }
                    },
                    {
                        dataIndex: 'status',
                        title: 'Status',
                        align: 'center',
                        render(status: boolean) {
                            return status ? <Tag icon={<CheckOutlined />
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
                ]} />
        </>
    );
}
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Form, Input, message, Select, Space } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import useCorretoras from "../../../core/hooks/useCorretoras";
import useTitulos from "../../../core/hooks/useTitulos";
import NotaCorretagemService from "../../../sdk/services/NotaCorretagem.service";

export default function FormNotaView() {

    const { fetchTitulos, titulos } = useTitulos()
    const { fetchCorretoras, corretoras } = useCorretoras()
    const [idCorretora, setIdCorretora] = useState(0)
    const [taxasImpostos, setTaxasImpostos] = useState(0)
    const [irrf, setIrrf] = useState(0)
    const [form] = Form.useForm()


    const optionsTitulos = titulos.map(t => <Option key={t.id}>{t.codigo}</Option>)
    const optionCorretoras = corretoras.map(c => <Option key={c.id}>{c.nome}</Option>)
    const optionTipoNegocio: React.ReactNode[] = [
        <Option key='COMPRA' > COMPRA</Option >,
        <Option key='VENDA'>VENDA</Option>
    ];
    const optionTipoMercado: React.ReactNode[] = [
        <Option key='VISTA'>VISTA</Option>,
        <Option key='OPCAO_DE_COMPRA'>OPCAO_DE_COMPRA</Option>,
        <Option key='OPCAO_DE_VENDA'>OPCAO_DE_VENDA</Option>,
        <Option key='EXERCICIO_OPCAO_DE_COMPRA'>EXERCICIO_OPCAO_DE_COMPRA</Option>,
        <Option key='EXERCICIO_OPCAO_DE_VENDA'>EXERCICIO_OPCAO_DE_VENDA</Option>
    ];

    const onReset = () => {
        form.resetFields()
    }

    useEffect(() => {
        fetchCorretoras()
        fetchTitulos()
    }, [fetchCorretoras, fetchTitulos])

    async function onFinish(values: any) {
        const notaCorretagem = values
        console.log(notaCorretagem)
        await NotaCorretagemService.insertNewNotaCorretagem(notaCorretagem);
        message.success('Nota de Corretagem cadastrada com sucesso!')
        onReset()
    }

    return (


        <Form form={form} name="formNotaCorretagem" autoComplete="off" onFinish={onFinish} layout='vertical'
            labelCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
        >

            <Divider orientation="left">Nota de Corretagem</Divider>

            <Form.Item
                name="idCorretora"
                label="Corretora"
                rules={
                    [
                        {
                            required: true,
                            message: "Selecione a corretora para a nota de corretagem"
                        }
                    ]
                }
            >
                <Select onChange={e => setIdCorretora(e)} autoFocus allowClear>
                    {optionCorretoras}
                </Select>
            </Form.Item>


            <Divider orientation="center">Negócios</Divider>

            <Form.List name="negocios">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (

                            <Space key={key} style={{ display: 'flex', marginBottom: 16, justifyContent: 'space-around' }} align="center">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'idTitulo']}
                                    rules={[{
                                        required: true, message: 'Missing titulo name'
                                    }]}

                                >
                                    <Select placeholder="Selecione o titulo"
                                        showSearch
                                        allowClear
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option!.children as unknown as string).includes(input.toUpperCase())}
                                        filterSort={(optionA, optionB) =>
                                            (optionA!.children as unknown as string)
                                                .toLocaleUpperCase()
                                                .localeCompare((optionB!.children as unknown as string).toLowerCase())
                                        }
                                        style={{ width: 200 }}
                                    >
                                        {optionsTitulos}
                                    </Select>
                                </Form.Item>

                                <Divider type="vertical"></Divider>

                                <Form.Item
                                    {...restField}
                                    name={[name, 'quantidade']}
                                >
                                    <Input placeholder="Quantidade" type="number" />
                                </Form.Item>

                                <Divider type="vertical"></Divider>

                                <Form.Item
                                    {...restField}
                                    name={[name, 'preco']}
                                >
                                    <Input placeholder="Preço/Ajuste" type="number" addonBefore="R$" />
                                </Form.Item>

                                <Divider type="vertical"></Divider>

                                <Form.Item
                                    {...restField}
                                    name={[name, 'tipoNegocio']}
                                >
                                    <Select placeholder="Tipo de Negócio">
                                        {optionTipoNegocio}
                                    </Select>
                                </Form.Item>

                                <Divider type="vertical"></Divider>

                                <Form.Item
                                    {...restField}
                                    name={[name, 'tipoMercado']}
                                >
                                    <Select placeholder="Tipo de Mercado">
                                        {optionTipoMercado}
                                    </Select>
                                </Form.Item>

                                <Divider type="vertical"></Divider>

                                <MinusCircleOutlined onClick={() => remove(name)} />

                            </Space>

                        ))}

                        <Form.Item>
                            <Button type="primary" onClick={() => add()} block>
                                Adicionar Negociação de Título
                            </Button>
                        </Form.Item>
                    </>
                )

                }
            </Form.List>

            <Divider orientation="left">Custos</Divider>

            <Space direction="vertical" style={{ display: "flex" }}>
                <Form.Item
                    name="taxasImpostos"
                    label="Taxas"
                >
                    <Input placeholder="Informe o custos associado a essa nota"
                        addonBefore="R$"
                        type="number"
                    //onChange={t => setTaxasImpostos(Number(t.currentTarget.value))}
                    />
                </Form.Item>

                <Form.Item
                    name="irrf"
                    label="I.R.R.F"
                >
                    <Input placeholder="Informe o imposto retido associado a essa nota"
                        addonBefore="R$"
                        type="number"
                    //onChange={i => setIrrf(Number(i.currentTarget.value))}
                    />
                </Form.Item>

                <Divider />

                <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
                    <Button htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>

            </Space>

        </Form>
    );
}
import { ClearOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Form, Input, message, Space, Switch } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import BolsaService from "../../sdk/services/Bolsa.service";
import stringUtils from "../../sdk/utils/stringUtils";

export default function BolsaFormFeature() {
    const [form] = useForm();
    const [nome, setNome] = useState('')
    const [sigla, setSigla] = useState('')
    const [ativo, setAtivo] = useState(false)

    const onReset = () => {
        form.resetFields()
    }

    async function handleFormSubmit(e: React.MouseEvent) {
        e.preventDefault()
        const novaBolsa = {
            nome, sigla, ativo
        }
        console.log(novaBolsa)
        await BolsaService.insertNewBolsa(novaBolsa);
        message.success(`Bolsa ${nome} cadastrada com sucesso!`)
        onReset()
    }

    return (
        <Form
            name="formBolsa"
            labelCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            form={form}
            layout="vertical"
        >

            <Divider orientation="left" >Nova Bolsa de Valores</Divider>
            <Form.Item
                label="Nome"
                name="nomeBolsa"
                rules={
                    [
                        {
                            required: true,
                            message: 'O nome da bolsa de valores é obrigatório'
                        }
                    ]
                }
            >
                <Input
                    placeholder="Ex.: Brasil, Bolsa, Balcão"
                    value={nome}
                    onChange={e => setNome(stringUtils(e.currentTarget.value))}
                    onInput={(e) => e.currentTarget.value = stringUtils(e.currentTarget.value)}
                />
            </Form.Item>

            <Form.Item
                label="Nome Fantasia"
                name="siglaBolsa"
                rules={
                    [
                        {
                            required: true,
                            message: 'Uma sigla/nome fantasia é obrigatorio'
                        }
                    ]
                }
            >
                <Input
                    placeholder="Ex.: BOVESPA"
                    value={sigla}
                    onChange={e => setSigla(stringUtils(e.currentTarget.value))}
                    onInput={(e) => e.currentTarget.value = stringUtils(e.currentTarget.value)}
                />
            </Form.Item>

            <Form.Item
                label="Status"
                name="status"
                valuePropName="checked"
                rules={
                    [
                        {
                            required: true,
                            message: "Informe o status da bolsa no sistema"
                        }
                    ]
                }
            >
                <Switch
                    checkedChildren="Ativo"
                    unCheckedChildren="Inativo"
                    onChange={e => setAtivo(e)}
                />
            </Form.Item>

            <Divider />

            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} onClick={handleFormSubmit}>
                        Enviar
                    </Button>

                    <Button type="primary" htmlType="button" onClick={onReset} icon={<ClearOutlined />}>
                        Limpar
                    </Button>
                </Space>

            </Form.Item>

        </Form>
    );
}
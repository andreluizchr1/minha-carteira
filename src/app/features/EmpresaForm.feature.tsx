import { ClearOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Card, Divider, Form, Input, message, Space, Switch } from "antd"
import { useForm } from "antd/lib/form/Form"
import { useState } from "react"
import EmpresaService from "../../sdk/services/Empresa.service"
import stringUtils from "../../sdk/utils/stringUtils"

export default function EmpresaFormFeature() {
    const [form] = useForm()
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [ativo, setAtivo] = useState(false)

    const onReset = () => {
        form.resetFields()
    }

    async function handleFormSubmit(e: React.MouseEvent) {

        e.preventDefault();
        const novaEmpresa = {
            nome,
            cnpj,
            ativo
        }
        console.log(ativo)
        await EmpresaService.insertNewEmpresa(novaEmpresa)
        message.success(`${novaEmpresa.nome} cadastrada com sucesso!`)
        onReset();
    }

    return (
        <Form
            name="formEmpresa"
            form={form}
            layout='vertical'
            labelCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
        >
            <Divider orientation="left">Nova Empresa</Divider>

            <Form.Item
                label="Nome"
                name="nomeEmpresa"
                rules={
                    [
                        {
                            required: true,
                            message: 'O nome da empresa é obrigatório'
                        }
                    ]
                }
            >
                <Input placeholder="Entre com o nome da Empresa"
                    value={nome}
                    type="text"
                    onChange={e => setNome(stringUtils(e.currentTarget.value))}
                    onInput={(e) => e.currentTarget.value = stringUtils(e.currentTarget.value)}
                />
            </Form.Item>
            <Form.Item
                label="CNPJ"
                name="cnpj"
                rules={
                    [
                        {
                            required: true,
                            message: 'O cnpj da empresa é Obrigatório'
                        }
                    ]
                }
            >
                <Input placeholder="Entre com o cnpj da empresa"
                    value={cnpj}
                    onChange={e => setCnpj(stringUtils(e.currentTarget.value))}
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
                            message: "Informe o status da empresa no sistema"
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

            <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
                <Space>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} onClick={handleFormSubmit}>
                        Enviar
                    </Button>

                    <Button type="primary" htmlType="button" onClick={onReset} icon={<ClearOutlined />}>
                        Limpar
                    </Button>
                </Space>
            </Form.Item>
        </Form >
    );
}
import { ClearOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message, Space, Switch } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import CorretoraService from "../../sdk/services/Corretora.service";
import stringUtils from "../../sdk/utils/stringUtils";

export default function CorretoraFormFeature() {
    const [form] = useForm();

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [ativo, setAtivo] = useState(false)

    const onReset = () => {
        form.resetFields()
    }

    async function handleFormSubmit(e: React.MouseEvent) {

        e.preventDefault();
        const novaCorretora = {
            nome,
            cnpj,
            ativo
        }
        console.log(ativo)
        await CorretoraService.insertNewCorretora(novaCorretora);
        message.success(`${novaCorretora.nome} cadastrada com sucesso!`)
        onReset();
    }

    return (
        <Form
            name="formCorretora"
            labelCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            form={form}
            layout='vertical'
        >


            <Divider orientation="left">Nova Corretora</Divider>

            <Form.Item
                label="Nome"
                name="nomeCorretora"
                rules={
                    [
                        {
                            required: true,
                            message: 'O nome da corretora é obrigatório'
                        }
                    ]
                }
            >
                <Input placeholder="Entre com o nome da Corretora"
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
                            message: 'O cnpj da corretora é Obrigatório'
                        }
                    ]
                }
            >
                <Input placeholder="Entre com o cnpj da Corretora"
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
                            message: "Informe o status da corretora no sistema"
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
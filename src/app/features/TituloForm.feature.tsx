import { ClearOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Card, DatePicker, Divider, Form, Input, InputNumber, message, Select, Space, Switch } from "antd"
import { useForm } from "antd/lib/form/Form"
import { Option } from "antd/lib/mentions"
import { useEffect, useState } from "react"
import useBolsas from "../../core/hooks/useBolsas"
import useEmpresas from "../../core/hooks/useEmpresas"
import TituloService from "../../sdk/services/Titulo.service"
import stringUtils from "../../sdk/utils/stringUtils"

export default function TituloFormFeature() {

    const [form] = useForm()

    const { fetchBolsas, bolsas } = useBolsas()
    const { fetchEmpresas, empresas } = useEmpresas()
    const dateFormat = 'DD-MM-YYYY'

    const onReset = () => {
        form.resetFields()
    }

    async function handleFormSubmit(e: React.MouseEvent) {
        e.preventDefault()
        const novaTitulo = {
            idBolsa
            , ativo
            , idEmpresa
            , codigo
            , dataInicialNegociacao
            , dataFinalNegociacao
            , strike
            , acao
            , opcao
        }
        console.log(novaTitulo)
        await TituloService.insertNewTitutlo(novaTitulo);
        message.success(`Título ${codigo} cadastrado com sucesso!`)
        onReset()
    }

    const [idBolsa, setIdBolsa] = useState(0)
    const [idEmpresa, setIdEmpresa] = useState(0)
    const [ativo, setAtivo] = useState(false)
    const [codigo, setCodigo] = useState('')
    const [dataInicialNegociacao, setDataInicialNegociacao] = useState('')
    const [dataFinalNegociacao, setDataFinalNegociacao] = useState('')
    const [acao, setAcao] = useState(true)
    const [opcao, setOpcao] = useState(false)
    const [strike, setStrike] = useState(0)

    useEffect(() => {
        fetchBolsas()
        fetchEmpresas()
    }, [fetchBolsas, fetchEmpresas])

    const optionsBolsas = bolsas.map(b => <Select.Option key={b.id}>{b.nome} ( {b.sigla} )</Select.Option>)
    const optionEmpresas = empresas.map(e => <Select.Option key={e.id}>{e.nome}</Select.Option>)
    const onChangeAcao = (checked: boolean) => {
        setAcao(checked)
        setOpcao(!checked)
    }
    const onChangeOpcao = (checked: boolean) => {
        setAcao(!checked)
        setOpcao(checked)
    }


    return (
        <Form
            name="formTitulo"
            labelCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { offset: 1, span: 22 }, md: { offset: 2, span: 20 } }}
            layout='vertical'
            form={form}
        >
            <Divider orientation="left">Novo Título de Valor</Divider>

            <Form.Item
                label="Código do Título"
                name="codigo"
                rules={
                    [
                        {
                            required: true,
                            message: 'O código para o título é obrigatório'
                        }
                    ]
                }
            >
                <Input placeholder="Entre com um codigo ex.: PETR4"
                    value={codigo}
                    type="text"
                    onChange={c => setCodigo(stringUtils(c.currentTarget.value))}
                    onInput={(e) => e.currentTarget.value = stringUtils(e.currentTarget.value)}
                    allowClear
                />
            </Form.Item>

            <Form.Item
                label="Negociado em"
                name="bolsa"
                rules={
                    [
                        {
                            required: true,
                            message: 'É obrigatório informar em qual mercado será negociado'
                        }
                    ]
                }
            >
                <Select placeholder="Selecione o mercado de negociação" autoFocus allowClear onChange={e => setIdBolsa(e)}>
                    {optionsBolsas}
                </Select>
            </Form.Item>


            <Form.Item
                label="Empresa"
                name="empresa"
                rules={
                    [
                        {
                            required: true,
                            message: 'É obrigatório informar a qual empresa o título estará atrelado'
                        }
                    ]
                }
            >
                <Select placeholder="Selecione uma empresa para o título" allowClear onChange={e => setIdEmpresa(e)}>
                    {optionEmpresas}
                </Select>
            </Form.Item>

            <Form.Item
                label="Ação"
                name="tipoTituloAcao"
                rules={
                    [
                        {
                            required: true,
                            message: 'É obrigatório informar se o título é uma ação'
                        }
                    ]
                }
            >
                <Switch defaultChecked={acao} checked={acao} checkedChildren="Sim" unCheckedChildren="Não" onChange={onChangeAcao} />
            </Form.Item>

            <Form.Item
                label="Opção"
                name="tipoTituloOpcao"
                rules={
                    [
                        {
                            required: true,
                            message: 'É obrigatório informar se o título é uma opção'
                        }
                    ]
                }
            >
                <Switch defaultChecked={opcao} checked={opcao} checkedChildren="Sim" unCheckedChildren="Não" onChange={onChangeOpcao} />
            </Form.Item>

            {
                opcao &&
                <Form.Item
                    label="Strike"
                    name="strike"
                >
                    <InputNumber
                        prefix="R$"
                        decimalSeparator=","
                        onChange={e => setStrike(e)} value={strike} style={{ width: 150 }} />
                </Form.Item>
            }

            <Form.Item
                label="Data Inicial"
                name="dataInicialNegociacao"
                tooltip="Data a partir da qual serão permitidos negócios com o título"
                rules={
                    [
                        {
                            required: true,
                            message: 'É obrigatório informar a data inicial de negócios desse título'
                        }
                    ]
                }
            >
                <DatePicker placeholder="Selecione uma data" format={dateFormat} onChange={(date, dateString) => setDataInicialNegociacao(dateString)} />
            </Form.Item>

            <Form.Item
                label="Data Final"
                name="dataFinalNegociacao"
                tooltip="Data em que não serão mais permitidos negócios com esse título"
            >
                <DatePicker placeholder="Selecione uma data" format={dateFormat} onChange={(date, dateString) => setDataFinalNegociacao(dateString)} />
            </Form.Item>

            <Form.Item
                label="Status"
                name="status"
                valuePropName="checked"
                rules={[
                    {
                        required: true,
                        message: 'Informe o status do título'
                    }
                ]}
            >
                <Switch
                    checkedChildren="Ativo"
                    unCheckedChildren="Inativo"
                    onChange={e => setAtivo(e)} />
            </Form.Item>

            <Divider />

            <Form.Item
            >
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
    )
}
import {
    HomeOutlined,
    TableOutlined,
    PlusCircleOutlined,
    FileOutlined,
    FieldTimeOutlined,
    IssuesCloseOutlined,
    SlidersOutlined,
    BankOutlined,
    DollarCircleOutlined,
    ExceptionOutlined,
    SettingOutlined,
    PercentageOutlined,

} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { GiLion } from 'react-icons/gi';
import { IoIosBusiness, IoMdWallet } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineAttachMoney } from 'react-icons/md';

const { Sider } = Layout

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '/',
        icon: <HomeOutlined />
    },
    {
        label: 'Notas',
        key: 'notas',
        icon: < FileOutlined />,
        children: [
            {
                label: 'Consulta',
                key: '/notas',
                icon: <TableOutlined />
            },
            {
                label: 'Cadastro',
                key: '/notas/formNota',
                icon: <PlusCircleOutlined />
            }
        ]
    },
    {
        label: 'Operações',
        key: 'sub3',
        icon: <SlidersOutlined />,
        children: [
            {
                label: 'Abertas',
                key: '5',
                icon: <FieldTimeOutlined />
            },
            {
                label: 'Fechadas',
                key: '6',
                icon: <IssuesCloseOutlined />
            }
        ]
    },
    {
        label: 'Imposto de Renda',
        key: '7',
        icon: <GiLion />,
        children: [{
            label: 'D.A.R.F',
            key: '8',
            icon: <DollarCircleOutlined />
        },
        {
            label: 'Declaração Anual',
            key: '9',
            icon: <ExceptionOutlined />
        }]
    },
    {
        label: 'Configurações',
        key: 'sub4',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Corretoras',
                key: 'corretoras',
                icon: <BankOutlined />,
                children: [
                    {
                        label: 'Consulta',
                        key: '/corretoras',
                        icon: <TableOutlined />

                    },
                    {
                        label: 'Cadastro',
                        key: '/corretoras/formCorretora',
                        icon: <PlusCircleOutlined />
                    }
                ]
            }, {
                label: 'Bolsa',
                key: 'bolsas',
                icon: <IoMdWallet />,
                children: [
                    {
                        label: 'Consulta',
                        key: '/bolsas',
                        icon: <TableOutlined />
                    },
                    {
                        label: 'Cadastro',
                        key: '/bolsas/formBolsa',
                        icon: <PlusCircleOutlined />
                    }
                ]
            },
            {
                label: 'Empresas',
                key: 'empresas',
                icon: <IoIosBusiness />,
                children: [
                    {
                        label: 'Consulta',
                        key: '/empresas',
                        icon: <TableOutlined />
                    },
                    {
                        label: 'Cadastro',
                        key: '/empresas/formEmpresa',
                        icon: <PlusCircleOutlined />
                    }
                ]
            },
            {
                label: 'Titulos',
                key: 'titulos',
                icon: <MdOutlineAttachMoney />,
                children: [
                    {
                        label: 'Consulta',
                        key: '/titulos',
                        icon: <TableOutlined />
                    },
                    {
                        label: 'Cadastro',
                        key: '/titulos/formTitulo',
                        icon: <PlusCircleOutlined />
                    }
                ]
            },
            {
                label: 'Taxa de Isenção',
                key: '10',
                icon: <PercentageOutlined />,
                children: [
                    {
                        label: 'Normal',
                        key: '11',
                        children: [
                            {
                                label: 'Consultar',
                                key: '12',
                                icon: <TableOutlined />
                            },
                            {
                                label: 'Cadastrar',
                                key: '13',
                                icon: <PlusCircleOutlined />
                            }
                        ]
                    },
                    {
                        label: 'Day-Trade',
                        key: '14',
                        children: [
                            {
                                label: 'Consultar',
                                key: '15',
                                icon: <TableOutlined />
                            },
                            {
                                label: 'Cadastrar',
                                key: '16',
                                icon: <PlusCircleOutlined />
                            }
                        ]
                    },
                    {
                        label: 'Opções',
                        key: '17',
                        children: [
                            {
                                label: 'Consultar',
                                key: '18',
                                icon: <TableOutlined />
                            },
                            {
                                label: 'Cadastrar',
                                key: '19',
                                icon: <PlusCircleOutlined />
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export default function DefaultLayoutSidebar() {

    const navigate = useNavigate()
    const location = useLocation()

    const onClick: MenuProps['onClick'] = e => {
        navigate(e.key)
    }

    return (
        <Sider width={250} className="site-layout-background" breakpoint="lg"
            collapsedWidth="0">
            <Menu onClick={onClick} mode='inline' defaultSelectedKeys={[location.pathname]} defaultOpenKeys={[location.pathname.split('/')[1]]} style={{ height: '100%', borderRight: 0 }} items={items} />
        </Sider>
    );
}
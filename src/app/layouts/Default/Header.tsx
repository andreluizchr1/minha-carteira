import { Avatar, Layout, MenuProps, Row } from "antd";
import {
    HomeOutlined,
    PlusOutlined

} from '@ant-design/icons';
import { GiPayMoney } from 'react-icons/gi';
import logo from '../../../assets/logo.svg'

const { Header } = Layout;

const menuSuperior: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: 'Corretora',
        key: 'corretora',
        icon: <GiPayMoney />,
        children: [
            {
                label: 'Cadastrar',
                key: 'formCorretora',
                icon: <PlusOutlined />,

            }
        ]
    }
]

export default function DefaultLayoutHeader() {
    return (
        <Header className="header">
            <Row justify="space-between" style={{ height: '100%' }} align='middle'>
                <img src={logo} alt="Logo" />
                <Avatar />
            </Row>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menuSuperior} /> */}
        </Header>
    );
}
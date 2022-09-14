import { Layout } from 'antd';
import DefaultLayoutBreadcrumb from './Breadcrumb';
import DefaultLayoutContent from './Content';
import DefaultLayoutFooter from './Footer';
import DefaultLayoutHeader from './Header';
import DefaultLayoutSidebar from './Sidebar';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
    return (
        <Layout>
            <DefaultLayoutHeader />
            <Layout id={'PageLayout'}>
                <DefaultLayoutSidebar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <DefaultLayoutBreadcrumb />
                    <DefaultLayoutContent>
                        {props.children}
                    </DefaultLayoutContent>
                </Layout>
            </Layout>
            <DefaultLayoutFooter />
        </Layout>
    );
}
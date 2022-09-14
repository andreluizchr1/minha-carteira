import { Col, Row } from "antd";
import EmpresaListFeature from "../../features/EmpresaList.feature";

export default function ListEmpresasView() {
    return (
        <Row>
            <Col xs={24}>
                <EmpresaListFeature />
            </Col>
        </Row>
    )
}
import { Col, Row } from "antd";
import BolsaListFeature from "../../features/BolsaList.feature";

export default function ListBolsaView() {
    return (
        <Row>
            <Col xs={24}>
                <BolsaListFeature />
            </Col>
        </Row>
    )
}
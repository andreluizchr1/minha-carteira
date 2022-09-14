import { Col, Row } from "antd"
import CorretoraList from "../../features/CorretoraList.feature"

export default function ListCorretorasView() {

    return (
        <Row>
            <Col xs={24}>
                <CorretoraList />
            </Col>
        </Row>
    )
}


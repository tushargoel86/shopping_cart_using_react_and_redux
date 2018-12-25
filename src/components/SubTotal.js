import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class SubTotal extends Component {

    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>SubTotal: </Col>
                    <Col md={6}>${this.props.price}</Col>
                </Row>
            </div>
        );
    }
}
    export default SubTotal;
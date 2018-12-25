import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

var style = {
    estimatedTotal : {
        fontWeight: 'bold',
        fontSize: 30
    }
};
class EstimatedTotal extends Component {

    render() {
        return (
            <Row className="show-grid">
                <Col md={6} style={style.estimatedTotal}>
                    Est. Total 
                </Col>
                <Col md={6} style={style.estimatedTotal}>
                    {`$${this.props.estimatedTotal}`}
                </Col>
            </Row>
        );
    }
}

export default EstimatedTotal;

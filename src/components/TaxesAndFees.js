import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class TaxesAndFees extends Component {

    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                        <div>Est. taxes & Fees</div>
                        <div>(5% GST)</div>
                    </Col>
                    <Col md={6}>
                        <div>
                            {`$${this.props.taxesAndFees}`}
                        </div>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default TaxesAndFees;
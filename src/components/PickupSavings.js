import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var style = {
    PickupSavings: {
        textDecoration: 'underline'
    },

    totalSavings : {
        color : 'red',
        fontWeight: 800
    }

}
class PickupSavings extends Component {

    render() {
        const tooltip = (
        <Tooltip id="tooltip">
            <p>
                Picking up your order in the store helps cut costs and we pass the savings to you.
            </p>
        </Tooltip>    
        );
        return (
            <Row className="show-grid">
                <Col md ={6}>
                    { <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={style.PickupSavings}>PickupSavings</div>
                    </OverlayTrigger> }
                </Col>

                <Col style={style.totalSavings} md={6}>
                        {`$${this.props.totalSavings}`}
                </Col>
            </Row>
        );
    }
}


export default PickupSavings;
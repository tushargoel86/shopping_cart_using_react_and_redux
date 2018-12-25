import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyPromocode } from '../actions/promoCodeActions';

import {
    Row, Col, Collapse, Well, Button,
    FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';

class Promocode extends Component {

    constructor() {
        super();

        this.state = {
            open: false
        };
    }

    updateState() {
        this.setState({ open: !this.state.open })
    }

    handleChange(e) {
        //this.setState({ promocode: e.target.value });
        //this.props.updatePromocode(e.target.value);
        //for redux
        this.props.applyPromocode(e);

    }

    render() {
        return (
            <div>
                <button className="add-button"
                    onClick={this.updateState.bind(this)}>
                    {this.state.open ? `Hide` : `See`} Promocode
                    {this.state.open ? ` -` : ` +`}
                </button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Row>
                                <Col md={12}>
                                    <form>
                                        <FormGroup controllerId="promocodeDiscount">
                                            <ControlLabel>
                                                Promo Code:
                                        </ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter promo code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <br />
                                            <Button
                                                block
                                                bsStyle="success"
                                                className="btn-round"
                                                disabled={this.props.isDisabled}
                                                onClick={this.props.giveDiscount}
                                            >
                                                Apply
                                        </Button>
                                        </FormGroup>
                                    </form>

                                    {/* uncontrolled component handler
                                 <form onSubmit={this.onSubmit.bind(this)}>
                                    <strong>Promo Code:</strong>
                                    <br />
                                    <input name = "promocode" type="text" placeholder="Enter Promo Code"></input>
                                    <br />
                                    <button type="submit">Apply</button>
                                </form> */}
                                </Col>
                            </Row>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

const mapStateToProp = state => ({
    promoCode : state.promoCode.value
});

export default connect(mapStateToProp, { applyPromocode })(Promocode);
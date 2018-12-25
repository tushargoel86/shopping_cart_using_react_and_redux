import React, { Component } from 'react';

import { Collapse, Media, Well, Row, Col} from 'react-bootstrap';

class ItemDetails extends Component {

    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <button className="add-button" 
                        bsStyle="link"
                        onClick = {() => this.setState({ open : !this.state.open})}>
                    {this.state.open ? `Hide` : `See`} Item Details
                    {this.state.open ? ` -` : ` +`}  
                </button>
                <Collapse in = {this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img 
                                      width = {100}
                                      height = {100}
                                      alt = "thumbnail"
                                      src = "https://images-na.ssl-images-amazon.com/images/I/71e0NCvYrCL._SL1500_.jpg"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p>
                                         Apple iPhone 7 (Black, 2GB RAM, 32GB Storage)
                                    </p>
                                    <Row className = "show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.estimatedTotal}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            <strong>Qty:</strong>1
                                        </Col>
                                        <br />
                                        
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetails;
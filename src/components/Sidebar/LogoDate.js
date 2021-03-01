import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

class LogoDate extends Component { 
    state = { date: ""}

    render() { 
        return (
            <>
                <Row className="margin-none">
                    <Col xs={12} className="flex_jccenter margin-bottom--20px">
                        <div className="flex_jccenter">
                            <img
                                src="https://static-cdn-assets.icarrteamdomain.co.uk/images/input-tables/AMQ-LOGO-2.png"
                                className="d-inline-block align-top amqlogo_sidebar"
                                alt="alexander mcqueen logo"
                            />
                        </div>
                    </Col>
                    <Col xs={6} className="fs-verylarge flex_jccenter text_bold">
                        <span>{moment(new Date()).format("YYYY-MM-DD")}</span>
                    </Col>
                    <Col xs={6} className="fs-15 flex_jccenter text_bold">
                        <span>{moment(new Date()).format("HH:mm") + " (GMT)"}</span>
                    </Col>
                </Row>
            </>
        ) 
    }
}

export default LogoDate; 
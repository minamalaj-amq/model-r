import React  from 'react'
import { Row, Col } from 'react-bootstrap'

// Need to change the defition of different KPIs depending on what is given 

const NavKPI = props => { 
    return (
        <Col xs={3}
            className={"padding-left--35px padding-right--35px "}
            style={{ maxWidth: "100%", fontSize: "14px" }}>
            <div className="">
                <Row>
                    <Col xs={4} className="flex padding-right-none">
                        <div style={{textAlign:"center"}}>
                            <span className="text_bold">Descriptor 1</span>
                            <br/>
                            {/* <span className="text_bold">{props.catalogueLength} </span> */}
                        </div>
                    </Col>
                    <Col xs={4} className="flex padding-right-none">
                        <div style={{textAlign:"center"}}>
                            <span className="text_bold">Descriptor 2</span>
                            <br/>
                            {/* <span className="text_bold">{props.goProds().length} </span> */}
                        </div>
                    </Col>
                    <Col xs={4} className="flex padding-right-none">
                    <div style={{textAlign:"center"}}>
                            <span className="text_bold">Descriptor 3</span>
                            <br/>
                            {/* <span className="text_bold">{props.noGoProds().length}</span> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default NavKPI 
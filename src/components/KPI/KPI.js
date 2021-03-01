import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class KPI extends Component {
  render() {
    return (
      <Col xs={3}>
        {/* <div className="box-shadow padding-all--medium border-radius-small white_background"> */}
        <div className="kpi-bar">
          {/* {this.props.children} */}
          <Row>
            <Col xs={5} className="flex align_items_center padding-right-none">
              <div>
                <span className="kpi-bold">{`${this.props.title}     `}</span>
            </div>
            <div class="kpi-number">
                {`${
                  this.props.kpinumber === "nm" ? "" : this.props.kpinumber
                } 
                
                ${this.props.kpifollowtest}`}{" "}
              </div>
            </Col>
            <Col xs={7} className="flex align_items_center">
            <div className={(this.props.positive ? "kpi-arrow-up" : "kpi-arrow-down")}></div>
              <div className="text_mediumgrey">
                <span
                  className={
                    "myClass " +
                    (this.props.positive ? "text_green" : "text_red")
                  }
                >                  {this.props.varvalue}
                </span>
                <span className="fs-medium">{" " + this.props.vartext}</span>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}

export default KPI 

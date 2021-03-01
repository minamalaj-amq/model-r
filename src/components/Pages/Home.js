import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import KPI from '../KPI/KPI'

class Home extends Component { 
    render() { 
        return (
            <>
            Home
            <div className="overflow_hidden height_100vh">
                <Row className="margin-bottom--50px margin-left-none margin-right-none">
                    <KPI
                        title={"KPI 1"}
                        vartext={"vs Reco."}
                        kpinumber={12}
                        kpifollowtest={" Skus"}
                        positive={true}
                        varvalue={34}
                    /> 
                    <KPI 
                        title={"KPI 2"}
                        vartext={"vs Reco."}
                        kpinumber={32}
                        kpifollowtest={" Skus"}
                        positive={false}
                        varvalue={45}
                    /> 
                    <KPI 
                        title={"KPI 3"}
                        vartext={"vs Reco."}
                        kpinumber={9}
                        kpifollowtest={" Skus"}
                        positive={true}
                        varvalue={78}
                    />
                    <KPI 
                        title={"KPI 4"}
                        vartext={"vs Reco."}
                        kpinumber={92}
                        kpifollowtest={" Skus"}
                        positive={false}
                        varvalue={14}
                    /> 
                </Row>
                <Row className="kpi-inline margin-bottom--50px margin-left-none margin-right-none">
                    <div className="new-kpi-bar margin-left-none margin-right-none">
                    <Row>
                    <Col xs={5} className="kpi-col flex align_items_center padding-right-none">
                    <div>
                        {/* <span className="kpi-bold">{`${this.props.title}     `}</span> */}
                        <span className="kpi-bold-title">KPI title</span>
                    </div>
                    <div class="kpi-number">
                        X Skus
                    </div>
                    </Col>
                    <Col xs={7} className="flex align_items_center">
                    <div className={(this.props.positive ? "kpi-arrow-up" : "kpi-arrow-down")}></div>
                    <div className="text_mediumgrey">
                        <span class="text_red"> Val
                        </span>
                        <span className="fs-medium">.vs Reco</span>
                    </div>
                    </Col>
                    </Row>
                    {/* <Row>
                    <Col xs={5} className="flex align_items_center padding-right-none">
                    <div>
                        {/* <span className="kpi-bold">{`${this.props.title}     `}</span> */}
                        {/* <span className="kpi-bold">KPI title</span>
                    </div>
                    <div class="kpi-number">
                        X Skus
                    </div>
                    </Col>
                    <Col xs={7} className="flex align_items_center">
                    <div className={(this.props.positive ? "kpi-arrow-up" : "kpi-arrow-down")}></div>
                    <div className="text_mediumgrey">
                        <span class="text_red"> Val
                        </span>
                        <span className="fs-medium">.vs Reco</span>
                    </div>
                    </Col>
                    </Row> */} 
                    </div> 
                </Row>
            </div>
            </>
        )
    }
}

export default Home 
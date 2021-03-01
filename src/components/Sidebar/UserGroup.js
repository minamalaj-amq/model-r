import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Avatar from 'react-avatar'
import moment from 'moment'

class UserGroup extends Component { 
    state = { date: new Date() }

    tick = () => { 
        this.setState({ date: new Date() })
    }

    componentDidMount() { 
        this.timerID = setInterval(() => this.tick(), 10000);
    }

    render() { 
        return (
            <Row className="padding-left--20px padding-right--20px margin-none">
                <Col xs={3} className="flex_jccenter">
                    <Avatar
                        // name={`${this.props.initials.charAt(0)} ${this.props.initials.charAt(1)}`}
                        size="70"
                        color="#e0e0e0"
                        fgColor="black"
                        round={true}
                    />
                </Col>
                <Col
                    xs={9}
                    className="fs-15 flex align_items_center text_normal padding-left--0px justify-content-flex-end"
                >
                    <div>
                        <div className="text_white text_align_right fs-verylarge">
                            {moment(this.state.date).format("H:mm")}
                        </div>
                        <div className="text_white text_align_right">
                            {moment(this.state.date).format("dddd, MMMM DD")}
                        </div>
                    </div>
                </Col>{" "}
            </Row>
        )
    }
}

export default UserGroup
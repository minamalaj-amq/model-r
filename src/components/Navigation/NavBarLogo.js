import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';


class NavBarLogo extends Component { 

    redirectAMQ = () => { 
        window.localStorage.setItem("model_part", "ModelR")
        window.top.location = "https://www.alexandermcqueen.io"
    }

    render() { 
        // const { username } = this.props
        return (
            <Navbar className="display_flex navbarmaster" fixed="top">
                <Navbar.Brand className="display_flex">
                    <a onClick={this.redirectAMQ} className="display_flex cursor_pointer">
                        <img
                            src="https://static-cdn-assets.icarrteamdomain.co.uk/images/input-tables/AMQ-LOGO-2.png"
                            className="d-inline-block align-top invert_img amqlogo"
                            alt="alexander mcqueen logo"
                        />
                    </a>
                </Navbar.Brand>
                <div className="justify-content-end username pull-right" 
                     style={{color: "white"}} >
                   {/* Hi {username.split(".")[0]} */}
                </div>
            </Navbar>
        )
    }
}

export default withRouter(NavBarLogo)
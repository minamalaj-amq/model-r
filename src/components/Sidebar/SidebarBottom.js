import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SidebarBottom extends Component { 

    redirectAMQ = () => { 
        window.localStorage.setItem("model_part", "ModelR")
        window.top.location = "https://www.alexandermcqueen.io"
    }

    render() { 
        return (
            <div className="laptop_hide bottom_position padding-top--medium padding-bottom--medium width_100perc">
                <div className="flex_jccenter">
                    <Link to="/" className="inputcontainer">
                        <img
                            src="https://static-cdn-assets.icarrteamdomain.co.uk/images/input-tables/AMQ-LOGO-2.png"
                            className="d-inline-block align-top amqlogo_sidebar invert_img cursor_pointer"
                            alt="alexander mcqueen logo"
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default SidebarBottom
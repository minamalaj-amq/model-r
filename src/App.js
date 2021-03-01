import React, { Component } from 'react'; 

// Import SCSS
import './App.scss'

// Import Routing 
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

// Import Dependencies 
import _ from 'lodash'

// Import Routes 
import Routes from './components/Routes/Routes'

// Import Components 
import NavMaster from './components/Navigation/NavMaster'
import ScrollToTop from './components/Scroller/ScrollToTop';

class App extends Component { 


    initialState = async () => {
        // return API.getFunctions().then((data) =>
        //   data.json().then((result) => {
        //     let array = [...result, { Function: "ALL FUNCTIONS" }];
        //     return this.setState({ functions: array });
        //   })
        // );
      };
    
      getUser = () => {
        const username = localStorage.getItem("username")
        const firstname = username.split(".")[0]
        const lastname = username.split(".")[1]
        const initials = firstname[0] + lastname[0]
        this.setState({ firstname, initials })
      };
    
      componentDidMount() {
        // this.getUser()
        this.initialState()
      }

    render() { 
        return ( 
            <div className="App">
                <Router>
                    {/* <ScrollToTop /> */}
                    <Routes />
                    <NavMaster />
                </Router>

            </div>
        )
    }
}

export default withRouter(App); 
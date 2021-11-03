import React, {
    useState
} from 'react';
import axios from 'axios';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            testvalue: ""
        };
    }

    componentDidMount() {
        axios.post("/message", {}).then((res) => {
            this.setState({
                testvalue: res.data
            })
        });
    }

    render() {
        return ( 
        <div>
        <p> Test rendering text from app.js </p> 
        <p> {this.state.testvalue} </p> 
        </div>
        );
    }
}

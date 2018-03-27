import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class Home extends React.Component {
    render(){
        return(
            <h1>This is the Home Page!!!</h1>
        );
    }
};

ReactDom.render(<Home />, document.getElementById("root"))
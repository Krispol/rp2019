import React from "react";
import "./form.css";

export class SignupPage extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render(){
        return (
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address"/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
            </div>
        );
    }
}

export default SignupPage;
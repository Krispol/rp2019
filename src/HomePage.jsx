import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import {inkpens, pencils} from "./mydatabase.js";
import ItemPage from "./ItemPage.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
        items: inkpens,
        }
    }

    handleChange (event){
        console.log(event.target.value);
        switch (event.target.value) {
        case "inkpens":{
            this.setState( {
            items: inkpens,
            });
            break;
        }
        case "pencils":{
            this.setState( {
            items: pencils,
            });
            break;
        }
        }
        console.log("App state", this.state);
    };

    render(){
        return (
        <>
            <Header/>
            <select onChange={this.handleChange.bind(this)}>
            <option value="inkpens">Inkpens</option>
            <option value="pencils">Pencils</option>
            </select>
            <ItemList items={this.state.items}/>
        </>
        )
    }
}

export default HomePage;
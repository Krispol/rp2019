import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import {inkpens, pencils} from "./mydatabase.js";
import HomePage from "./HomePage.jsx";

class ItemPage extends React.PureComponent{
    render(){
        const item = inkpens[0];
        return (
        <>
            <Header/>
            <div className={"itemContainer"}>
                <img src={item.imgSrc} />
                <div className={'item_title'}>{item.title}</div>
                <div className={'item_price'}>{item.price}</div>
                {item.title}
            </div>
        </>
        )
    }
}

export default ItemPage;
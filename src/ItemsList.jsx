import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./itemsList.css";

const ItemsList = (props) => {
    return (
        <div className={"content"}>
            {
                props.items.map(item => {
                    return <Item
                        key = {item.id}
                        id = {item.id}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        price={item.price}
                    />;
                })
            }
        </div>
    );
};

const Item = (props) => {
    return (
        <Link to={"/items/"+props.id}>
            <div className={"item"}>
                <img src={props.imgSrc} />
                <div className={"item__name"}>{props.title}</div>
                <div className={"item__price"}>€{props.price}</div>
                {/* <div className={"reviews"}>{`(${getRandomIntInclusive(0, 100)} reviews)`}</div> */}
            </div>
        </Link>
    );
};

ItemsList.propTypes = {
    items: propTypes.array
};

Item.propTypes = {
    id: propTypes.string,
    imgSrc: propTypes.string,
    title: propTypes.string,
    price: propTypes.string,
};

export default ItemsList;
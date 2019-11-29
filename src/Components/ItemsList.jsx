import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./itemsList.css";

const ItemsList = (props) => {
    console.log("Items list", props);
    return (
        <div className={"content"}>
            {
                props.items.map(item => {
                    return <Item
                        key = {item._id}
                        id = {item._id}
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
    id: propTypes.string.isRequired,
    imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
};

export default ItemsList;
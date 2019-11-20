import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

const Checkbox = ({name, onChange, checked}) => (
<div className="toggler">
    <div className="togglerName">
    {name}
    </div>
    <label className="switch">
    <input type="checkbox" id={name} name={name} className="off" onChange={onChange} checked={checked} />
    <span className="slider round"></span>
    </label>
</div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;
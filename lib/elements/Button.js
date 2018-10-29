import React from "react";

const Button = (props) => {
    let { title, style, className, onClick, value } = props;
    return <button className={className} style={style} onClick={e => onClick && onClick(value)}>
        {title} -1
    </button>
};

export default Button;
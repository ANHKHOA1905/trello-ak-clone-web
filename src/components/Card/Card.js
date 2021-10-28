import React from "react";

const Card = (props) => {
	return <div className="columns__content__item">{props.children}</div>;
};

export default Card;

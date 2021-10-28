import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

const Column = (props) => {
	return (
		<div className="columns">
			<div className="columns__title ">
				<h2 className="column-drag-handle">{props.title}</h2>
			</div>
			<div className="columns__content">{props.children}</div>
			<div className="columns__footer">{props.footer}</div>
		</div>
	);
};

Column.propTypes = {
	title: PropTypes.string.isRequired,
	footer: PropTypes.string,
};

export default Column;

import { useState, useEffect } from "react";
import Column from "../Column/Column";
import Card from "../Card/Card";
import { initialData } from "../../actions/initialData";
import { isEmpty } from "lodash";
import { Container, Draggable } from "react-smooth-dnd";

const BoardContent = () => {
	const [board, setBoard] = useState({});
	const [column, setColumn] = useState([]);
	// drag and drop function
	function onColumnDrop(data) {
		console.log(data);
	}
	function onCardDrop(data) {
		console.log(data);
	}

	useEffect(() => {
		const boardFromDB = initialData.boards.find(
			(board) => board.id === "board-1"
		);
		if (boardFromDB) {
			setBoard(boardFromDB);
		}
	}, []);

	if (isEmpty(board)) {
		return (
			<div className="notfound">
				<h1>khong tim thay bang</h1>
			</div>
		);
	}

	return (
		<div className="boardcontent">
			<Container
				orientation="horizontal"
				onDrop={onColumnDrop}
				dragHandleSelector=".column-drag-handle"
				dropPlaceholder={{
					animationDuration: 150,
					showOnTop: true,
					className: "cards-drop-preview",
				}}
			>
				{renderColumn(board)}
			</Container>
		</div>
	);

	function renderColumn(data) {
		let xhtml = null;
		xhtml = data.columns.map((item, index) => (
			<Draggable key={index}>
				<Column title={item.title}>
					<Container
						// onDragStart={(e) => console.log("drag started", e)}
						// onDragEnd={(e) => console.log("drag end", e)}
						// onDragEnter={() => {
						// 	console.log("drag enter:", column.id);
						// }}
						// onDragLeave={() => {
						// 	console.log("drag leave:", column.id);
						// }}
						// onDropReady={(p) => console.log("Drop ready: ", p)}
						groupName="col"
						onDrop={onCardDrop}
						getChildPayload={(index) => item.cards[index]}
						dragClass="card-ghost"
						dropClass="card-ghost-drop"
						dropPlaceholder={{
							animationDuration: 150,
							showOnTop: true,
							className: "card-drop-preview",
						}}
						dropPlaceholderAnimationDuration={200}
					>
						{item.cards.map((item, index) => (
							<Draggable key={index}>
								<Card>{item.title}</Card>
							</Draggable>
						))}
					</Container>
				</Column>
			</Draggable>
		));

		return xhtml;
	}
};

export default BoardContent;

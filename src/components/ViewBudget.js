import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Despesas: R${props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Editar
			</button>
		</>
	);
};

export default ViewBudget;

import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({
				html: "Please enter a the first and last name"
			});
		} else {
			console.log(firstName, lastName);
			setFirstName("");
			setLastName("");
		}
	};

	return (
  )
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

export default AddTechModal;

import React, { useState, useEffect } from "react";

const TechListModal = () => {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(false);

  useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	
	return (
		
	);
};

export default Logs;

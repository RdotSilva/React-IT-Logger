import React, { useState, useEffect } from "react";

const TechListModal = () => {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(false);

  useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

  const getTechs = async () => {
		setLoading(true);
		const res = await fetch("/techs");
		const data = await res.json();

		setTechs(data);
		setLoading(false);
	};

	
  if (loading) {
		return <h4>Loading...</h4>;
	}
	
	return (
		
	);
};

export default Logs;

import React, { useState, useEffect } from "react";



const LoginContext = React.createContext([false, () => {}]);

const LoginProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	// Get mock data
	useEffect(() => {
		fetch('https://my.api.mockaroo.com/login.json?key=71f47770')
		.then(response => response.json())
		.then(d => {
			setLoggedIn(d['valid']);
		});
	}, [])

	return (
		<LoginContext.Provider value={[loggedIn, setLoggedIn]}>
			{props.children}
		</LoginContext.Provider>
	);
}

export { LoginContext, LoginProvider };





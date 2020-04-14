import React, { useState, useEffect } from "react";



const UserContext = React.createContext([false, () => {}]);

const UserProvider = (props) => {
	const [state, setState] = useState({});

	// Get mock data
	useEffect(() => {
		fetch('https://my.api.mockaroo.com/login.json?key=71f47770')
		.then(response => response.json())
		.then(d => {
			const newState = {
				'logged-in': d['valid'],
			}
			setState(newState);
		});
	}, [])

	return (
		<UserContext.Provider value={[state, setState]}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider };





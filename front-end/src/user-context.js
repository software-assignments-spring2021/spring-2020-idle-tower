import React, { useState, useEffect } from "react";
import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';


const UserContext = React.createContext([false, () => {}]);

const UserProvider = (props) => {
	const [state, setState] = useState({'logged-in': false});

	// Get mock data
	useEffect(() => {
		postData(BACKEND_URL + '/auth/test', {})
			.then((res) => {
				const newState = state
				
				if (res.error === false) {
					newState['logged-in'] = true
				} else {
					newState['logged-in'] = false
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





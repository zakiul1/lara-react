import { createContext, useContext, useState } from 'react';
import axiosInstance from './api';

const AuthContent = createContext({
	user: null,
	setUser: () => { },
	csrfToken: () => { },
});


export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [sideBarisOpen, setsideBarisOpen] = useState(false);
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	// set user to local storage
	const setUser = (user) => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
		_setUser(user);
	};

	// csrf token generation for guest methods
	const csrfToken = async () => {
		await axiosInstance.get('http://localhost:8000/sanctum/csrf-cookie');
		return true;
	};
	// logout user
	const handleLogout = async () => {


		try {
			const authToken = localStorage.getItem('authToken');
			setLoading(true);

			const resp = await axiosInstance.post('/logout', {}, {
				headers: {
					'Authorization': `Bearer ${authToken}`
				}
			});

			if (resp.status === 200) {
				localStorage.removeItem('user');
				setLoading(false); // Set loading to false before redirect
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};


	// Side Bar Open Hide Mobiel Device


	const toggleSidebar = () => {
		setsideBarisOpen(!sideBarisOpen);
	};
	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken, handleLogout, loading, toggleSidebar, setsideBarisOpen, sideBarisOpen }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};
import { createContext, useContext, useState } from 'react';
import axiosInstance from './api';

const AuthContent = createContext({
	user: null,
	setUser: () => {},
	csrfToken: () => {},
});


export const AuthProvider = ({ children }) => {
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
			const resp = await axiosInstance.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken,handleLogout }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};
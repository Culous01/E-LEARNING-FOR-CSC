import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(false);
}, []);

const login = async (userData, setIsLoading) => {
    setIsLoading(true);
        try {
            const response = await fetch('https://final-year-project-elearing-backend.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(userData),
                credentials: 'include',
        });
    
            const data = await response.json();
                setUser(data.user)

            if (response.ok) {
                    toast.success('Login successful!');
                    console.log('Login response data:', data.user);
                } else {
                    toast.error(data.message || 'Login failed. Please try again.');
                    console.error('Login error:', data);
                }
            } catch (error) {
                toast.error("An error occurred. Please try again.");
                console.error('Login exception:', error);
            }  finally {
                setIsLoading(false);
            }
        }

const signUp = async (userData, setIsLoading) => {
    setIsLoading(true);
        try {
            const response = await fetch('https://final-year-project-elearing-backend.onrender.com/api/v1/auth/signUp', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
                credentials: 'include',
            });

            const data = await response.json();
            
            if(response.ok) {
                setUser(data.user)
                toast.success('Signup successful! Please log in.');
                console.log('Signup response data:', data);
            } else {
                toast.error(data.message || 'Signup failed. Please try again.');
                console.error('Signup error:', data);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error('Signup exception:', error);
        } finally {
            setIsLoading(false);
        }
    }    

    
const logout = async () => {
    try {
        const response = await fetch('https://final-year-project-elearing-backend.onrender.com/api/v1/auth/logout', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            setUser(null);            
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Logout API error:', error);
    }
};


const userProfile = async () => {
    try {
        const response = await fetch('https://final-year-project-elearing-backend.onrender.com/api/v1/auth/profile', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log('User profile data:', data);
        
        if (response.ok && data) {
            setUser(data);
        } else {
            setUser(null);
        }
    } catch (error) {
        console.error('User profile fetch error:', error);
        setUser(null);
    } finally {
        setLoading(false);
    }
}

    useEffect(() => {
        userProfile();
    }, []);

return (
        <AuthContext.Provider value={{user, login, signUp, logout, userProfile}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

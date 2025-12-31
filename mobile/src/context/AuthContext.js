import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockAuthService } from '../services/mockAuth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Check for persisted user on mount (optional, skipping for now to keep it simple)

    const loginWithOTP = async (emailOrPhone) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await mockAuthService.sendOTP(emailOrPhone);
            setIsLoading(false);
            return result;
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
            return { success: false, message: err.message };
        }
    };

    const verifyOTP = async (emailOrPhone, otp) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await mockAuthService.verifyOTP(emailOrPhone, otp);
            if (result.success) {
                setUser(result.user);
            } else {
                setError(result.message);
            }
            setIsLoading(false);
            return result;
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
            return { success: false, message: err.message };
        }
    };

    const loginWithGoogle = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await mockAuthService.loginWithGoogle();
            if (result.success) {
                setUser(result.user);
            }
            setIsLoading(false);
            return result;
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
            return { success: false, message: err.message };
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, error, loginWithOTP, verifyOTP, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

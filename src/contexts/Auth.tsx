import React, { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import { AuthService } from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthData {
    token: string;
    email: string;
    nameUser: string;
}

interface AuthContextData {
    AuthData?: AuthData;
    signIn: (nameUser: string, password: string, email: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
    
);

export const AuthProvider: React.FunctionComponent = ({children}) => {
    const [AuthData, setAuthData] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFromStorage();
    }, []);

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData');

        if(auth){
            setAuthData(JSON.parse(auth) as AuthData);
        }
        setLoading(false);
    }

    async function signIn(nameUser: string, password: string, email: string) {
        try {

            const auth = await AuthService.signIn(nameUser, password, email);

            setAuthData(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth));

            return auth;

        } catch (error) {
            alert(error.message)
        }
    }

    async function signOut(): Promise<void>{
        setAuthData(undefined);
        AsyncStorage.removeItem('@AuthData');

        ToastAndroid.showWithGravity(
            "Logout efetuado",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );

        return;
    }

    return(
        <AuthContext.Provider value={{AuthData, loading, signIn, signOut}}>{children}</AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
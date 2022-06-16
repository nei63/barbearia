import * as React from 'react';
import { AuthData } from '../contexts/Auth';
import { ToastAndroid } from 'react-native'

async function signIn(nameUser: string, password: string, email: string):Promise<AuthData> {


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(password !== null && email !== null){
                ToastAndroid.showWithGravity(
                    'Login feito com sucesso!',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
                resolve({
                    token: 'fake-token',
                    email,
                    nameUser: 'Nathan',
                });
            }
            else {
                reject(new Error('credenciais inválidas'))
            }

        }, 2250);

    })
}

export const AuthService = {signIn};
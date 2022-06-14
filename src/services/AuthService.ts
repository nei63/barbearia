import * as React from 'react';
import { AuthData } from '../contexts/Auth';

async function signIn(nameUser: string, password: string, email: string):Promise<AuthData> {


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(password === '123456'){
                resolve({
                    token: 'fake-token',
                    email,
                    nameUser: 'Nathan',
                });
            }
            else {
                reject(new Error('credenciais inválidas'))
            }

        }, 500);

    })
}

export const AuthService = {signIn};
import * as React from 'react';
import { AuthData } from '../contexts/Auth';
import { ToastAndroid } from 'react-native'

import Cadastro from './sqlite/Cadastro';
import db from "./sqlite/SQLiteDatabase";

async function signIn(email: string, password: string):Promise<AuthData> {


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            db.transaction((tx) =>{
                tx.executeSql(
                  "SELECT * FROM cadastros WHERE email=? AND password=?",
                  [email, password],
                  (tx, results) => {
                    var len = results.rows.length;
                    if(len > 0) {
                      ToastAndroid.showWithGravity(
                        "Login feito com sucesso!",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                      )
                      resolve({
                        token: 'fake-token',
                        email,
                        password,
                       });
                    }
                    else{
                        reject(new Error('Login não encontrado, tente novamente!'))
                    }
                  }
                );
          
            });

        }, 2250);

    })
}

export const AuthService = {signIn};
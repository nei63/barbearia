import * as React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';

function verificarLogin(){
    if(user === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Usuário!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(senha === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Senha!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(user === "" && senha === ""){
        ToastAndroid.showWithGravity(
            "Complete todos os campos!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    else{
        ToastAndroid.showWithGravity(
            "Login feito com sucesso!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return true;
    }
}

function verificarCadastro(){
    if(user === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Usuário!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(email === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Email!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }

    if(telefone === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Telefone!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(senha === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Senha!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(repetirSenha === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Repetir Senha!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(repetirSenha !== senha){
        ToastAndroid.showWithGravity(
            "As senhas não batem!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }

    if(user === "" && email === "" && telefone === "" && senha === "" && repetirSenha === ""){
        ToastAndroid.showWithGravity(
            "Complete todos os campos!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    else{
        ToastAndroid.showWithGravity(
            "Cadastro feito com sucesso!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return true;
    }
}

function verificarNovoAgendamento(){
    if(nome === ""){
        ToastAndroid.showWithGravity(
            "Complete o campo Nome!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(servico === "Selecione um Serviço"){
        ToastAndroid.showWithGravity(
            "Selecione um Serviço!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(horario === "Selecione um Horário"){
        ToastAndroid.showWithGravity(
            "Selecione um Horário!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(data === "Selecione uma Data"){
        ToastAndroid.showWithGravity(
            "Selecione uma Data!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    if(nome === "" && servico === "Selecione um Serviço" && horario === "Selecione um Horário" && data === "Selecione uma Data"){
        ToastAndroid.showWithGravity(
            "Complete todos os campos!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return false;
    }
    else {
        ToastAndroid.showWithGravity(
            "Agendamento feito com sucesso!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        return true;
    }
}
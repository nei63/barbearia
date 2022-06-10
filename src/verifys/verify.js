import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import swal from 'sweetalert';

function verificarLogin(){
    if(user === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Usuário!",
            icon: "error",
        });
        return false;
    }
    if(senha === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Senha!",
            icon: "error",
        });
        return false;
    }
    if(user === "" && senha === ""){
        swal({
            title: "Erro",
            text: "Complete todos os campos!",
            icon: "error",
        });
        return false;
    }
    else{
        swal({
            title: "Good job!",
            text: "Login feito com sucesso!",
            icon: "success",
        });
        return true;
    }
}

function verificarCadastro(){
    if(user === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Usuário",
            icon: "error",
        });
        return false;
    }
    if(email === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Email",
            icon: "error",
        });
        return false;
    }

    if(telefone === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Telefone!",
            icon: "error",
        });
        return false;
    }
    if(senha === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Senha!",
            icon: "error",
        });
        return false;
    }
    if(repetirSenha === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Repita a Senha!",
            icon: "error",
        });
        return false;
    }
    if(repetirSenha !== senha){
        swal({
            title: "Good job!",
            text: "O campo Repita a Senha deve ser igual ao campo Senha!",
            icon: "error",
        });
        return false;
    }

    if(user === "" && email === "" && telefone === "" && senha === "" && repetirSenha === ""){
        swal({
            title: "Erro",
            text: "Complete todos os campos!",
            icon: "error",
        });
        return false;
    }
    else{
        swal({
            title: "Good job!",
            text: "Cadastro feito com sucesso!",
            icon: "success",
        });
        return true;
    }
}

function verificarNovoAgendamento(){
    if(nome === ""){
        swal({
            title: "Erro",
            text: "Complete o campo Nome!",
            icon: "error",
        });
        return false;
    }
    if(servico === "Selecione um Serviço"){
        swal({
            title: "Erro",
            text: "Selecione um Serviço!",
            icon: "error",
        });
        return false;
    }
    if(horario === "Selecione um Horário"){
        swal({
            title: "Erro",
            text: "Selecione um Horário!",
            icon: "error",
        });
        return false;
    }
    if(data === "Selecione uma Data"){
        swal({
            title: "Erro",
            text: "Selecione uma Data!",
            icon: "error",
        });
        return false;
    }
    if(nome === "" && servico === "Selecione um Serviço" && horario === "Selecione um Horário" && data === "Selecione uma Data"){
        swal({
            title: "Erro",
            text: "Complete todos os campos!",
            icon: "error",
        });
        return false;
    }
    else {
        swal({
            title: "Good Job!",
            text: "Agendamento feito com sucesso!",
            icon: "success",
        });
        return true;
    }
}
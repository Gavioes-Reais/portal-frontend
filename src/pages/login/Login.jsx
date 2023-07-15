import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom';

import styles from './Login.module.css'

import logo from '../../assets/img/logo.png'

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  function validandoLgin(cpf, senha){
    let retornaErro = false;

    if (cpf === null || cpf.length === 0) {
      toast.error('CPF é obrigatório!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }
      );
      retornaErro = true;
    }
    if (senha === null || senha.length === 0) {
      toast.error('Senha é obrigatória!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }
      );
      retornaErro = true;
    }
    if (senha.length && senha.length <= 5) {
      toast.error('A senha precisa ter pelo menos 8 caracteres!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }
      );
      retornaErro = true;
    }
    return !retornaErro;
  }

  function handleCpfChange(e) {
    let cpfDigitado = e.target.value;
    cpfDigitado = cpfDigitado.replace(/\D/g, '');
    cpfDigitado = cpfDigitado.substring(0, 11);
    cpfDigitado = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCpf(cpfDigitado);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let podeAutenticar = validandoLgin(cpf, password)
    console.log(podeAutenticar)
    if (!podeAutenticar) {
      return;
    }
    // Aqui sera adicionado a autenticação
    toast.success("formulario enviado com sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      }
    )
    
    console.log('CPF:', cpf);
    console.log('Password:', password);
    // aqui será adicionaldo a logica apóes o login ser realizado
  };

  return (
    
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <TextField 
                id="cpf" 
                type="text" 
                label="CPF" 
                variant="outlined"
                color="warning"
                className={styles.input} 
                value={cpf}
                onChange={handleCpfChange}
            />
          </div>
          <div className={styles.row}>
            <TextField 
                id="password" 
                type="password" 
                label="Senha" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={password}
                onChange={handlePasswordChange}
            />
          </div>
          <Button type="submit" variant="contained" className={styles.button} color="warning">Entrar</Button>
          <div className={styles.forgotPasswordRegister}>
            <span>Esqueceu a senha? 
              <Link className={styles.bold} to="/"> clique aqui</Link>
            </span>
            <span>ou</span>
            <span>
              <Link className={styles.bold} to="/sign-up">Cadastre-se</Link>
            </span>
          </div>
        </form>
      </Card>
      <ToastContainer />
    </div>
  )
}

export default Login
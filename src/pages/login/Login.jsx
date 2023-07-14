import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.css'
import logo from '../../assets/img/logo.png'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  function handleCpfChange(e) {
    let cpfDigitado = e.target.value;

    // Remove qualquer caractere não numérico do CPF
    cpfDigitado = cpfDigitado.replace(/\D/g, '');

    // Mantém apenas os primeiros 11 dígitos
    cpfDigitado = cpfDigitado.substring(0, 11);

    // Aplica a formatação
    cpfDigitado = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    setCpf(cpfDigitado);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui sera adicionado a autenticação
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
    </div>
  )
}

export default Login
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.css'
import logo from '../../assets/img/logo.png'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui sera adicionado a autenticação
    console.log('Email:', email);
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
                id="email" 
                type="email" 
                label="Email" 
                variant="outlined"
                color="warning"
                className={styles.input} 
                value={email}
                onChange={handleEmailChange}
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
            <span>Esqueceu a senha ?
              <Link to="/">clique aqui</Link>
            </span>
            <span>ou</span>
            <span>
              <Link to="/">Cadastre-se</Link>
            </span>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Login
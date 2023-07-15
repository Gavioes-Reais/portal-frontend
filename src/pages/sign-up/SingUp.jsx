import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import styles from './SingUp.module.css'

import logo from '../../assets/img/logo.png'

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const roles = [
  {
    name: 'Estudante',
    value: 1,
  },
  {
    name: 'Professor(a)',
    value: 2,
  },
];

function SingUp() {
  const [etapaAtual, setEtapaAtual] = useState(1);

  const avancarEtapa = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    setEtapaAtual(etapaAtual - 1);
  };
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [datebirth, setDatebirth] = useState('');
  const [cpf, setCPF] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [cep, setCEP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  function handleCpfChange(e) {
    let cpfDigitado = e.target.value;
    cpfDigitado = cpfDigitado.replace(/\D/g, '');
    cpfDigitado = cpfDigitado.substring(0, 11);
    cpfDigitado = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCPF(cpfDigitado);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateBirthChange = (e) => {
    setDatebirth(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCEPChange = (e) => {
    setCEP(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleNeighborhoodChange = (e) => {
    setNeighborhood(e.target.value);
  };

  const handleComplementChange = (e) => {
    setComplement(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = {
      name: name,
      email: email,
      cpf: cpf,
      birthDate: datebirth,
      role: role,
      password: password
    }
    console.log(person)
  }
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.img}>
          <img src={logo} alt="logo"/>
          <Link to="/"><Button variant="contained" color="warning" className={styles.linkButton} >Login</Button></Link>
        </div>
        {etapaAtual === 1 && (
          <form className={styles.form} onSubmit={avancarEtapa}>
            <div className={styles.row}>
              <TextField 
                id="name" 
                type="text" 
                label="Nome completo" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={name}
                onChange={handleNameChange}
              />
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
              <div className={styles.dataNascimento}>
                <label>Data de Nascimento</label>
                <TextField 
                id="datebirth" 
                type="date" 
                variant="outlined" 
                color="warning"
                className={styles.input}
                value={datebirth}
                onChange={handleDateBirthChange}
                /> 
              </div> 
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
              <div className={styles.role}>
                <label>Cadastrar-se como</label>
                <TextField
                  id="role"
                  select
                  color="warning"
                  placeholder='Cadastrar-se como'
                  className={styles.input}
                  value={role}
                  onChange={handleRoleChange}
                >
                  {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField> 
              </div>
              
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
              <TextField 
                id="confirm_password" 
                type="password" 
                label="Confirme sua senha" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className={styles.buttons}>
              <Button type="submit" variant="contained" color="warning">Endereço</Button>
            </div>
          </form>
        )}
        { etapaAtual === 2 &&(
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <TextField 
                id="cep" 
                type="text" 
                label="CEP" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={cep}
                onChange={handleCEPChange}
              />
              <TextField 
                id="logradouro" 
                type="text" 
                label="Logradouro" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={street}
                onChange={handleStreetChange}
              />
            </div>
            <div className={styles.row}>
              <TextField 
                id="numero" 
                type="text" 
                label="Numero" 
                variant="outlined" 
                color="warning"
                value={number}
                onChange={handleNumberChange}
              />
              <TextField 
                id="complemento" 
                type="text" 
                label="Complemento" 
                variant="outlined" 
                color="warning"
                value={complement}
                onChange={handleComplementChange}
              />
              <TextField 
                id="bairro" 
                type="text" 
                label="Bairro" 
                variant="outlined" 
                color="warning"
                value={neighborhood}
                onChange={handleNeighborhoodChange}
              />
            </div>
            <div className={styles.row}>
              <TextField 
                id="cidade" 
                type="text" 
                label="Cidade" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={city}
                onChange={handleCityChange}
              />
              <TextField 
                id="estado" 
                type="text" 
                label="Estado" 
                variant="outlined" 
                color="warning"
                className={styles.input} 
                value={state}
                onChange={handleStateChange}
              />
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttons_endereco}>
                <Button type="button" color="warning" onClick={voltarEtapa}>Voltar</Button>
                <Button type="submit" variant="contained" color="warning">Cadastrar-se</Button>
              </div>
            </div>
          </form>
        )}
      </Card>
    </div>
  )
}

export default SingUp
import React from 'react'
import { useState} from 'react'
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

  const handleInputBlur = async () => {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      if (!response.ok) {
        toast.error('Erro ao realizar requisição', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          }
        );
      }
      const jsonData = await response.json();
      const { state, city } = jsonData;
      setState(state);
      setCity(city);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const avancarEtapa = (e) => {
    e.preventDefault();
    let podeAutenticar = validandoInfoPessoais(name, email, cpf, datebirth, role, password, confirmPassword)
    console.log(podeAutenticar)
    if (!podeAutenticar) {
      return;
    }
    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    setEtapaAtual(etapaAtual - 1);
  };

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
    let cepDigitado = (e.target.value);
    cepDigitado = cepDigitado.replace(/\D/g, '');
    cepDigitado = cepDigitado.substring(0, 8);
    cepDigitado = cepDigitado.slice(0, 5) + '-' + cepDigitado.slice(5);
    setCEP(cepDigitado)
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
  
  function handleCpfChange(e) {
    let cpfDigitado = e.target.value;
    cpfDigitado = cpfDigitado.replace(/\D/g, '');
    cpfDigitado = cpfDigitado.substring(0, 11);
    cpfDigitado = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCPF(cpfDigitado);
  }

  function validandoInfoPessoais(name, email, cpf, datebirth, role, password, confirmPassword){
    let retornaErro = false;

    if (name === null || name.length === 0) {
      toast.error('O nome é obrigatório!', {
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
    if (email === null || email.length === 0) {
      toast.error('email é obrigatório!', {
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
    if (datebirth === null || datebirth.length === 0) {
      toast.error('Data de nascimento é obrigatória!', {
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
    if (role === null || role.length === 0) {
      toast.error('Data de nascimento é obrigatória!', {
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
    if (password === null || password.length === 0) {
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
    if (password.length && password.length <= 5) {
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
    if(password !== confirmPassword){
      toast.error('As senhas presicam ser iguais', {
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

  function validandoEndereco(cep, cidade, estado, rua, numero, bairro, complemento){
    let retornaErro = false;

    if (cep === null || cep.length === 0) {
      toast.error('cep é obrigatório!', {
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
    if (cidade === null || cidade.length === 0) {
      toast.error('cidade é obrigatório!', {
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
    if (estado === null || estado.length === 0) {
      toast.error('estado é obrigatório!', {
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
    if (rua === null || rua.length === 0) {
      toast.error('a rua é obrigatório!', {
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
    if (numero === null || numero.length === 0) {
      toast.error('numero é obrigatório!', {
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
    if (bairro === null || bairro.length === 0) {
      toast.error('bairro é obrigatório!', {
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
    if (complemento === null || complemento.length === 0) {
      toast.error('complemento é obrigatório!', {
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
    let podeAutenticar = validandoEndereco(cep, city, state, street, number, neighborhood, complement)
    console.log(podeAutenticar)
    if (!podeAutenticar) {
      return;
    }
    
    const address = {
      cep: cep,
      city: city,
      state: state,
      neighborhood: neighborhood,
      street: street,
      number: number,
      complement: complement,
    }
    console.log(address)
  }
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.img}>
          <Link to="/"><img src={logo} alt="logo"/></Link>
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
            <div className={styles.row_one_input}>
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
                onBlur={handleInputBlur}
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
            <div className={styles.row_triple}>
              <TextField 
                id="numero" 
                type="text" 
                label="Numero" 
                variant="outlined" 
                color="warning"
                className={styles.input_triple}
                value={number}
                onChange={handleNumberChange}
              />
              <TextField 
                id="complemento" 
                type="text" 
                label="Complemento" 
                variant="outlined" 
                color="warning"
                className={styles.input_triple}
                value={complement}
                onChange={handleComplementChange}
              />
              <TextField 
                id="bairro" 
                type="text" 
                label="Bairro" 
                variant="outlined" 
                color="warning"
                className={styles.input_triple}
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
                <Button type="button" color="warning" variant="outlined" onClick={voltarEtapa}>Voltar</Button>
                <Button type="submit" variant="contained" color="warning">Cadastrar-se</Button>
              </div>
            </div>
          </form>
        )}
      </Card>
      <ToastContainer />
    </div>
  )
}

export default SingUp
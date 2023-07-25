import axios from "axios";

const AuthService = {
  login: async (cpf, password) => {
    try {
      // Substitua a URL abaixo pela sua API de autenticação real
      const response = await axios.post(`sua_api_de_login`, { cpf, password });
      const { token, user } = response.data;

      // Armazenar o token e informações do usuário no localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    } catch (error) {
      throw new Error("Erro ao fazer login");
    }
  },

  logout: () => {
    // Limpar o token e as informações do usuário do localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getUser: () => {
    // Obter informações do usuário armazenadas no localStorage
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  getToken: () => {
    // Obter o token de autenticação armazenado no localStorage
    return localStorage.getItem("token");
  },

  isAuthenticated: () => {
    // Verificar se o usuário está autenticado com base no token
    const token = localStorage.getItem("token");
    return !!token;
  },
};

export default AuthService;

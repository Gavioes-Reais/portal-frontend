const api = 'http://localhost:8090';

const AuthService = {
  login: async (userData) => {
    try {
      const response = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error("Erro na resposta");
      }
  
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

  create: async (person) => {
    try {
      const response = await fetch(`${api}/registro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar usuário');
      }

      const createdMatterDto = await response.json();
      return createdMatterDto;
    } catch (error) {
      throw new Error('Erro ao criar matéria');
    }
  },
};

export default AuthService;

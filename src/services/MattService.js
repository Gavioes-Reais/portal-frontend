const api = 'http://localhost:8090';

const MatterService = {
    create: async (matterDto) => {
      try {
        const response = await fetch(`${api}/matter/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(matterDto),
        });
  
        if (!response.ok) {
          throw new Error('Erro ao criar matéria');
        }
  
        const createdMatterDto = await response.json();
        return createdMatterDto;
      } catch (error) {
        throw new Error('Erro ao criar matéria');
      }
    },
  
    getById: async (id) => {
      try {
        const response = await fetch(`/matter/${id}`);
  
        if (!response.ok) {
          throw new Error('Matéria não encontrada');
        }
  
        const matterDto = await response.json();
        return matterDto;
      } catch (error) {
        throw new Error('Matéria não encontrada');
      }
    },
  
    getAll: async () => {
      try {
        const response = await fetch(`${api}/matter/`);
  
        if (!response.ok) {
          throw new Error('Erro ao obter as matérias');
        }
  
        const matterList = await response.json();
        return matterList;
      } catch (error) {
        throw new Error('Erro ao obter as matérias');
      }
    },
  
    update: async (matterDto) => {
      try {
        const response = await fetch(`${api}/matter/update`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(matterDto),
        });
  
        if (!response.ok) {
          throw new Error('Erro ao atualizar a matéria');
        }
  
        const updatedMatterDto = await response.json();
        return updatedMatterDto;
      } catch (error) {
        throw new Error('Erro ao atualizar a matéria');
      }
    },
  
    delete: async (id) => {
      try {
        const response = await fetch(`/matter/delete/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Erro ao excluir a matéria');
        }
      } catch (error) {
        throw new Error('Erro ao excluir a matéria');
      }
    },
  };
  
  export default MatterService;
  
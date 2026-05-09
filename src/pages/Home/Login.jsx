import './Login.css'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  const inputNome = useRef()

  //! Buscar ( Modificado e aprova de erros )
  async function getUsers() {
    try {

      const usersApi = await api.get('/usuarios');

      setUsers(usersApi.data);

      console.log(usersApi.data);


    } catch (error) {

      console.error(error);

    }
  }

  //! Cadastrar
  async function createUsers() {
    await api.post('/usuarios', {
      name: inputNome.current.value
    })
    inputNome.current.value = ''
    getUsers()
  }

  //! Deletar
  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div className='container'>

      <form>
        <h1>Cadastro de usuarios</h1>
        <input type="text" name="nome" placeholder='Nome' ref={inputNome} />
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user =>
      (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
          </div>
          <div><button type="button" onClick={() => deleteUsers(user.id)} >❌</button></div>
        </div>
      )
      )}

    </div>
  )
}

export default App
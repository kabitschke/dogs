import React from 'react';
import { Link } from 'react-router-dom';



const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({username, password}),
  }).then((response) => {
    console.log(response);
    return response.json();
  }).then((json) => {
    console.log(json);
  });
  

}

    return (
        <section >
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

              <input
               type="text"
               onChange={(e) => setUsername(e.target.value)}
               value={username}
               />

               <input 
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               
               />

               <button>Cadastro</button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
}

export default LoginForm;
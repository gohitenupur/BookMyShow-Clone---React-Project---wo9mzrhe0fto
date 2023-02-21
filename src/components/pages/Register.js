import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const user = { name, email,age,password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    // Redirect the user to the login page
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br/>
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register
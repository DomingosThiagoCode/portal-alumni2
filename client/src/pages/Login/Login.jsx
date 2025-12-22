import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login para a Sprint 1
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2>{isRegister ? 'Criar Conta' : 'Acessar Portal'}</h2>
        <p>Apenas membros cadastrados podem adicionar novos ex-alunos.</p>

        <input type="email" placeholder="E-mail do IME" required />
        <input type="password" placeholder="Senha" required />

        {isRegister && <input type="password" placeholder="Confirme a senha" required />}

        <button type="submit" className={styles.loginBtn}>
          {isRegister ? 'Cadastrar' : 'Entrar'}
        </button>

        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Já tenho conta' : 'Não tenho conta'}
        </button>
      </form>
    </div>
  );
};

export default Login;

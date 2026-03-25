import { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../services/api'; 
import styles from './VerifyEmail.module.css';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); // Pegamos o token antes do estado
  const navigate = useNavigate();
  
  // MÁGICA: Se já não tem token, a tela já nasce no estado de 'error'!
  // Isso evita o erro de "cascading renders" do React.
  const [status, setStatus] = useState(token ? 'loading' : 'error');
  
  const hasFetched = useRef(false);

  useEffect(() => {
    // Se não tiver token ou se já tiver feito a requisição, não faz nada
    if (!token || hasFetched.current) return;

    hasFetched.current = true; 

    api.post('/auth/verify-email', { token })
      .then(() => setStatus('success'))
      .catch((err) => {
        if (err.response?.status === 409) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      });
  }, [token]);

  return (
    <div className={styles.container}>
      {status === 'loading' && <h2>Verificando seu e-mail...</h2>}
      {status === 'success' && (
        <div className={styles.card}>
          <h2>E-mail Confirmado!</h2>
          <p>Sua conta está ativa. Agora você pode acessar o portal.</p>
          <button onClick={() => navigate('/login')}>Ir para Login</button>
        </div>
      )}
      {status === 'error' && (
        <div className={styles.card}>
          <h2 style={{ color: '#ff4d4d' }}>Falha na Verificação ❌</h2>
          <p>O link pode ter expirado, é inválido ou já foi usado. Tente se cadastrar novamente.</p>
          <button onClick={() => navigate('/login')}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
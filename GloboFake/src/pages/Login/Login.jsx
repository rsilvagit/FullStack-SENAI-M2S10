import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/web";
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";

function Login() {

  const {login} = useContext(AuthContext);
  const inputRefs = useRef({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorForm, setErrorForm] = useState(false);
  const navigate = useNavigate();


  //Seta o error forma para false à cada alteração no input de password ou de email.
  useEffect(() => {
    setErrorForm(false);
    inputRefs.current.email.style.borderColor = "black";
    inputRefs.current.password.style.borderColor = "black";
  }, [password, email]);


  //Atualiza a variável de email à cada alteração no input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  ////Atualiza a variável de password à cada alteração no input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //Impede que a página seja recarregada ao clicar no submit, faz uma chamada á API para ver se encontra os dados recebidos nos inputs de 
  // e de password, se retornar nulo seta o error como true, caso contrario chama a função de contexto "login" e passa o response como 
  //parâmetro, também direciona o usuário para a página inicial (home).
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginAPI(email, password);
    if (!response) {
      setErrorForm(true);
      inputRefs.current.email.style.borderColor = "red";
      inputRefs.current.password.style.borderColor = "red";
      return;
    }
    login(response)
    navigate ('/');
  };


  return (
    <>
    <h1>Login de usuário:</h1>
      <form style={{ maxWidth: "320px" }} onSubmit={handleSubmit}>
        <input
          required
          type="email"
          value={email}
          ref={(el) => (inputRefs.current.email = el)}
          placeholder="Digite seu e-mail"
          onChange={handleEmailChange}
        />

        <input
          required
          type="password"
          minLength="4"
          ref={(el) => (inputRefs.current.password = el)}
          value={password}
          placeholder="Digite sua senha"
          onChange={handlePasswordChange}
        />

        {errorForm && <span>E-mail e/ou senha inválidos</span>}

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;

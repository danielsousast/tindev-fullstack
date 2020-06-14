import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";
import logo from "../../assets/logo.svg";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    const response = await api.post("devs", { username });

    const { _id:id } = response.data;
    history.push(`/home/${id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Digite seu usuário do GitHub"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

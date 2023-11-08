import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/auth";

import { Container, Form } from "./styles";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";




export function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(){
    signIn({email, password})
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <Form>
        <div className="form">

          <div className="signin">
            <h1 className="singinTitle">Entre na sua conta</h1>
            <div className="notRegistered">
              <p>Ainda não tem uma conta? </p>
              <Link to="/register">Cadastre-se</Link>
            </div>
          </div>
          
          <div className="input">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Seu melhor e-mail"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.currentTarget.value);
              }}
              icon={{
                icon: (
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                ),
              }}
              value={email}
              required
            />
          </div>
          
          <div className="input">
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.currentTarget.value);
              }}
              icon={{
                icon: <span className="material-symbols-outlined">password</span>,
              }}
              value={password}
              required
            />
          </div>
          <Button className="button" title="Entre" onClick={() => handleSignIn()} />
        </div>
      </Form>
    </Container>
  );
}

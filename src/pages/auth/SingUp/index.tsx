import { ChangeEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { api } from "../../../services/api";

import { Container, Form } from "./styles";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);

    const navigate = useNavigate();

    async function handleSignUp() {
        
        if (!name || !email || !password ) {
            return alert("preencha todos os campos");
        } else if (invalidEmail) {
            return alert("Digite um email válido");
        }

        await api
        .post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch((error) => {
            if (error.response) {
            alert(error.response.data.message);
            } else {
            alert("Não foi possível cadastrar");
            }
        });
    }

    return (
        <Container>
            <Header />
            <Form>
                <div className="form">

                    <div className='signup'>
                        <h1 className="singupTitle">Cadastre-se</h1>
                        <div className="alreadyRegistered"><p>Já tem uma conta? </p><Link to="/">Entrar</Link></div>
                    </div>
                    <div className="input">
                        <label htmlFor="name" >Seu nome</label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Nome Completo"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setName(e.currentTarget.value)
                            }
                            icon={{icon: <span className="material-symbols-outlined">person</span>}}
                            value={name}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email" >Email</label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Seu melhor e-mail"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                if(!e.currentTarget.value.includes("@") || !e.currentTarget.value.includes(".") || e.currentTarget.value.includes(" ") || e.currentTarget.value.includes(",")) {
                                    setInvalidEmail(true)
                                } else {
                                    setInvalidEmail(false)
                                }
                                setEmail(e.currentTarget.value)
                            }}
                            icon={{icon: <span className="material-symbols-outlined">alternate_email</span>}}
                            value={email}
                            required
                        />
                        {invalidEmail && <p className="alert">Digite um e-mail válido</p>}
                    </div>
                    <div className="input">
                        <label htmlFor="password" >Senha</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Senha"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                if(e.currentTarget.value.length < 6) {
                                    setCheckPassword(true)
                                } else {
                                    setCheckPassword(false)
                                }
                                setPassword(e.currentTarget.value)
                            }}
                            icon={{icon: <span className="material-symbols-outlined">password</span>}}
                            value={password}
                            required
                        />
                        {checkPassword &&
                            <p className="alert">Por favor, digite uma senha com no mínimo 6 caractéres</p>
                        }
                    </div>
                    <div className="input">
                        <label htmlFor="confirm" >Confirmar senha</label>
                        <Input
                            id="confirm"
                            type="password"
                            placeholder="Confirmar senha"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                if(e.currentTarget.value !== password) {
                                    setInvalidConfirmPassword(true)
                                } else {
                                    setInvalidConfirmPassword(false)
                                }
                                setConfirmPassword(e.currentTarget.value)
                            }}
                            icon={{icon: <span className="material-symbols-outlined">lock</span>}}
                            value={confirmPassword}
                            required
                        />
                        {invalidConfirmPassword && <p className="alert">As senhas devem ser as mesmas</p>}
                    </div>
                    
                    <Button title="Cadastre-se" className="button" onClick={() => handleSignUp()} />
                </div>
            </Form>
        </Container>
    );
}

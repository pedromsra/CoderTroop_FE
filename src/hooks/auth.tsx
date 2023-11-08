import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

type User = {
    user: {
        id: number;
        name: string;
        email: string;
    } | undefined;
    token: string | undefined;
}

type SignIn = {
    email: string;
    password: string;
}

type Update = {
    user: User['user'];
    avatarFile: File;
}

type AuthContextProviderProps = {
    children?: React.ReactNode | undefined;
}

type AuthContextType = {
    user: User['user'] | undefined;
    signIn: (props: SignIn) => void;
    signOut: () => void;
    updateProfile: (props: Update) => void;
}

class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }

    log() {
        console.log(`Http error ${this.statusCode}: ${this.message}`);
    }
}

export const AuthContext = createContext({} as AuthContextType);

function AuthProvider(props: AuthContextProviderProps) {

    const [data, setData] = useState<User>()

    async function signIn(props: SignIn){
        try {
            
            const response = await api.post("/sessions", {email: props.email, password: props.password})
            
            const { user, token } = response.data;

            const {id, name, email} = user

            localStorage.setItem("@tarefas:user", JSON.stringify({id, name, email}));
            localStorage.setItem("@tarefas:token", token);
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({user: {id, name, email}, token})
        } catch (err:any) {
            alert(err.response.data.message)
        }
    }

    function signOut() {
        localStorage.removeItem("@tarefas:user");
        localStorage.removeItem("@tarefas:token");

        api.defaults.headers.common['Authorization'] = null;

        setData({user: undefined, token: undefined});
    }

    async function updateProfile(props: Update){
        try {
            await api.put("/users", props.user);
            localStorage.setItem("@tarefas:user", JSON.stringify(props.user));
            setData({ user: props.user, token: data ? data.token : ''})
            alert("Perfil atualizado")
        } catch (error) {
            if(error instanceof HttpError) {
                alert(error.message)
            } else {
                alert("Não foi possível atualizar o perfil.");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@tarefas:token");
        const user = localStorage.getItem("@tarefas:user");

        if (token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;;

            setData({user: JSON.parse(user), token})
        }
    }, [])

    return (
        <AuthContext.Provider value={{signIn, signOut, updateProfile, user: data ? data.user : undefined}}>
            {props.children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
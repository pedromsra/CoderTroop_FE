import { Routes, Route } from "react-router-dom"

import { SignIn } from "../pages/auth/SingIn"
import { SignUp } from "../pages/auth/SingUp"

export function AuthRoutes () {
    return (
        <Routes>
            <Route path="/" element = { <SignIn /> } />
            <Route path="/register" element = { <SignUp /> } />
        </Routes>
    )
}
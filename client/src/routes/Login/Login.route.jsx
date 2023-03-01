import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.styles.scss";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const changeHandler = e => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const submitHandler = e => {
        e.preventDefault();
    };

    return (
        <section className="auth">
            <div className="auth">
                <h1>Login</h1>
                <form>
                    <input
                        required
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={changeHandler}
                    />
                    <input
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={changeHandler}
                    />
                    <button onClick={submitHandler}>Login</button>
                    {err && <p>{err}</p>}
                    <span>
                        Don't you have an account?{" "}
                        <Link to="/register" className="register">
                            Register
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    );
};

export default Login;

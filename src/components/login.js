import React from 'react'
import '../index.css'
import '../App'

const Login = () => {
    return (
        <body>
            <div id="contenedor">
                <div id="central">
                    <div id="login">
                        <div class="titulo">
                            Welcome
                        </div>
                        <form id="loginform">
                            <h3>Sign In</h3>

                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-grid">
                                <a href="/home">
                                    Sign-In
                                    </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Login
import React, { useState, useContext, useEffect } from 'react'
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { tokenContext } from "./WebPages";
import Footer from './Footer';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const [token, setToken] = useContext(tokenContext);
    const [check, setCheck] = useState(false);
    const [toggle, setToggle] = useState(true)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [email1, setEmail1] = useState("")
    const [password2, setPassword2] = useState("")
    const [signToggle, setSignToggle] = useState(false)
    const [loginToggle, setLoginToggle] = useState(false)
    const [eyeOpen, setEyeOpen] = useState(true)
    const [eyeOpen1, setEyeOpen1] = useState(true)
    const [eyeOpen3, setEyeOpen3] = useState(true)

    const notify1 = () => toast("User already existed with this Email");
    const notify2 = () => toast("Signed up Successfully ");
    const notify3 = () => toast("Logged In Successfully ");
    const notify4 = () => toast("You Have Entered Wrong Password And Email. ");
    const notify5 = () => toast("Confirm Password Not Matched ");
    //  login function 

    const loginFunc = async (e) => {
        e.preventDefault()
        setLoginToggle(true)
        try {
            const response = await axios.post("https://zomato-server-z2lm.onrender.com/login", { email, password })

            setToken(response.data.token)
            localStorage.setItem("token", JSON.stringify(response.data.token))

            setEmail("")
            setPassword("")
            notify3()
            setLoginToggle(false)
        } catch (error) {
            console.log(error)
            setLoginToggle(false)

            notify4()

        }
    }

    const userDetails = { email: email1, password: password1, confirmpassword: password2 }



    // signup function 

    const signupFunc = async (e) => {
        e.preventDefault();
        setSignToggle(true)

        try {
            await axios.post("https://zomato-server-z2lm.onrender.com/register", userDetails);

            setToggle(true);
            notify2();
            setSignToggle(false)
        }
        catch (error) {
            console.log(error);
            notify1();
            setSignToggle(false)

        }
    }

    const navigate = useNavigate();
    useEffect(() => {

        if (token) {
            setTimeout(() => {
                return navigate("/")
            }, 1500);

        }
    })


    const checkFunc = () => {

        if (password1 !== password2) {
            notify5();

        }
    };


    const eyeFunc = () => {
        setEyeOpen(!eyeOpen)
    }

    const eyeFunc1 = () => {
        setEyeOpen1(!eyeOpen1)
    }

    const eyeFunc3 = () => {
        setEyeOpen3(!eyeOpen3)
    }
    return (
        <>
            <ToastContainer />
            <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a href="">
                        <img
                            src="image/logo.png"
                            className="rounded logo-img"
                            alt="zomato"
                        />
                    </a>
                    <a className="navbar-brand  fs-3 fw-bold" href="">
                        Zomato
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mt-2 m-auto">
                            <h5 className="">
                                <Link
                                    to="/"
                                    className="nav-link active  home-text "
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </h5>

                        </div>
                    </div>
                </div>
            </nav>


            {/* login section  */}
            <div id='sign-login-card' className='pt-5 d-flex justify-content-center align-items-center'  >

                {toggle ? (<div className='logincard mt-2'>
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalToggleLabel">
                            Login
                        </h3>

                    </div>
                    <form onSubmit={loginFunc}>
                        <div className="pt-4 modal-body">
                            <div className="form-floating mb-4">
                                <input
                                    required
                                    type="email"

                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    minLength="6"
                                    maxLength="8"
                                    required
                                    type={eyeOpen3 ? "password" : "text"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    id="floatingInput1"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput1">Password</label>
                                <div className='eye-card'> {eyeOpen3 ? <span onClick={eyeFunc3} class="material-symbols-outlined">
                                    visibility
                                </span> : <span onClick={eyeFunc3} class="material-symbols-outlined">
                                    visibility_off
                                </span>}</div>
                            </div>

                            {loginToggle ? <button style={{ height: "45px" }} className="btn btn-danger w-100 fw-bold" type="button" disabled="">
                                <span style={{ marginRight: "0.4rem" }}
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Logging in...
                            </button>
                                : <button type='submit'
                                    style={{ height: "45px" }}
                                    className="btn btn-danger w-100 fw-bold"
                                >
                                    Login
                                </button>}



                            <div className="py-3 text-center ">
                                <h5 className="mb-3">or</h5>

                                <div
                                    style={{ height: "45px", cursor: "pointer" }}
                                    className="mt-3 border d-flex justify-content-center rounded-2  w-100 align-items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-google text-primary "
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                    </svg>
                                    <h6 className="mt-2" style={{ marginLeft: "10px" }}>
                                        Sign in with Google
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button
                            className="border-0 bg-white fs-6"

                        >
                            New to Zomato?
                            <span className="text-danger" onClick={() => setToggle(false)}> Sign up</span>
                        </button>
                    </div>

                </div>

                ) : (
                    // signup section
                    <div className='logincard '>
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalToggleLabel2">
                                Sign up
                            </h3>

                        </div>
                        <form onSubmit={signupFunc}>
                            <div className="modal-body">
                                <div className="form-floating mb-3 mt-2">
                                    <input
                                        required
value={email1}
                                        onChange={(e) => setEmail1(e.target.value)}
                                        type="email"
                                        className="form-control"
                                        id="floating-In"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floating-In">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                    value={password1}
                                        required
                                        minLength="6"
                                        maxLength="8"
                                        onChange={(e) => setPassword1(e.target.value)}
                                        type={eyeOpen ? "password" : "text"}
                                        className="form-control"
                                        id="floating"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floating">Password</label>
                                    <div className='eye-card'> {eyeOpen ? <span onClick={eyeFunc} class="material-symbols-outlined">
                                        visibility
                                    </span> : <span onClick={eyeFunc} class="material-symbols-outlined">
                                        visibility_off
                                    </span>}</div>


                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        required
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                        minLength="6"
                                        maxLength="8"
                                        type={eyeOpen1 ? "password" : "text"}
                                        className="form-control"
                                        id="float-Input"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="float-Input">Confirm Password</label>
                                    <div className='eye-card'> {eyeOpen1 ? <span onClick={eyeFunc1} class="material-symbols-outlined">
                                        visibility
                                    </span> : <span onClick={eyeFunc1} class="material-symbols-outlined">
                                        visibility_off
                                    </span>}</div>
                                </div>

                                <input
                                    required
                                    value={check}
                                    onClick={checkFunc}
                                    style={{ marginRight: "5px" }}
                                    type="checkbox"
                                    className="mb-3"
                                />
                                <span className="" style={{ lineHeight: "1" }}>
                                    I agree to Zomato's
                                    <span
                                        style={{ marginLeft: "5px", marginRight: "2px" }}
                                        className="text-danger"
                                    >
                                        Terms of service . Privacy policy
                                    </span>
                                    and
                                    <span
                                        style={{ marginLeft: "2px" }}
                                        className="text-danger "
                                    >
                                        Content Policies
                                    </span>
                                </span>
                                {signToggle ? <button style={{ height: "45px" }} className=" mt-3 btn btn-primary w-100 fw-bold" type="button" disabled="">
                                    <span style={{ marginRight: "0.4rem" }}
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Signing up...
                                </button>
                                    : <button
                                        type='submit'
                                        disabled={check !== true && password1 !== password2}
                                        style={{ height: "45px" }}
                                        className=" mt-3 btn btn-primary w-100 fw-bold"
                                    >
                                        Sign up
                                    </button>}




                            </div>
                        </form>
                        <div className="modal-footer">
                            <button
                                className="border-0 bg-white"

                            >
                                Already have an account?
                                <span onClick={() => setToggle(true)} className="text-danger"> Log in</span>
                            </button>
                        </div>
                    </div>)}



            </div>
            <Footer />
        </>
    )
}

export default Login
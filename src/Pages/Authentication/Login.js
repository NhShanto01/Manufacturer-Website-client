import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate(false);
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || loadingG || sending) {
        return <Loading></Loading>
    }

    if (user || userG) {
        navigate(from, { replace: true });
    }
    let createError;
    if (error || errorG) {
        createError = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast.warn('please enter your email address');
        }
    }

    return (
        <section id='login'>
            <div className='flex h-screen justify-center items-center'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='text-center text-2xl font-bold'>Please Login</h2>

                        <div className="divider text-accent"></div>

                        <p className='text-start'><small>If you haven't any account of <span className='text-accent font-bold'>Auto Parts</span> ? <Link to="/register" className='no-underline text-accent' onClick={navigateRegister}>Please Register</Link></small> </p>

                        <from onSubmit={handleLogin} className='text-start mt-3'>


                            <div className='form-control w-full max-w-xs'>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" className='input input-bordered w-full max-w-xs mb-4' ref={emailRef} placeholder="Enter email" required />
                            </div>

                            <div className='form-control w-full max-w-xs'>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" className='input input-bordered w-full max-w-xs mb-4' ref={passRef} placeholder="Enter password" required />
                            </div>

                            <input className='btn w-full max-w-xs text-black bg-primary hover:bg-accent' type="submit" value="Login" />
                        </from>
                        {createError}


                        <p className='text-start'><small>Forget Password? <button className=' no-underline text-accent' onClick={resetPass}>Reset Password</button></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline text-black bg-primary hover:bg-accent"
                        >Continue with Google</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
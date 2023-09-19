import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../app/features/user/userSlice';


import signupServer from "../../services/signup.server";


const LoginForm = () => {

  const loginUser = useSelector((state) => state.user.loginUser);
  const userToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch()

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', loginError:'' })
  

  const add = () => {
    if (email.length == 0) {
      setErrors({ ...errors, email: 'email is required' })
    } else if (password.length == 0) {
      setErrors({ ...errors, password: 'password is required' })
    } else {
      signupServer.login({ email, password })
        .then(response => {
          //Router.push("/vendor-dashboard/users")
          //setIsRegister(true);
          console.log(response.data);
          setTimeout(() => {
            Router.push("/dashboard/db-booking");
          }, 200);
          dispatch(setUser(response.data.user));
          dispatch(setToken(response.data.token));
        })
        .catch(e => {
          if (e && e.response.data && e.response.data.message) {
            setErrors({loginError: e.response.data.message});
            window.scrollTo({ top: 100, behavior: "smooth" });

          }
          console.log(e);
        });

    }

  }
  
  return (
    <form className="row y-gap-20" >
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/others-pages/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <span class="error col-12">{errors && errors.loginError}</span>

      <div className="col-12">
        <div className="form-input ">
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}
      <span class="error col-12">{errors && errors.email}</span>


      <div className="col-12">
        <div className="form-input ">
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}
      <span class="error col-12">{errors && errors.password}</span>


      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="button"
          onClick={add}
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;

import Link from "next/link";

const LoginForm = () => {

  const add = () => {
    if (firstName.length == 0) {
      setErrors({ ...errors, firstName: 'First Name can not be empty' });
    }if (lastName.length == 0) {
      setErrors({ ...errors, lastName: 'Last Name can not be empty' });
    } else if (email.length == 0) {
      setErrors({ ...errors, email: 'email is required' })
    } else if (password.length == 0) {
      setErrors({ ...errors, password: 'password is required' })
    } else if (phone.length < 10) {
      setErrors({ ...errors, phone: 'phone is required' })
    } else if (userRole.length == 0) {
      setErrors({ ...errors, userRole: 'userRole is required' })
    } else if (photos.length == 0) {
      setErrors({ ...errors, photos: 'Upload a photo can not be empty' });
    } else {
      signupServer.create({ firstName, lastName, email, password, phone: phone, role: userRole, photo })
        .then(response => {
          //Router.push("/vendor-dashboard/users")
          setIsRegister(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    }

  }
  
  return (
    <form className="row y-gap-20">
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

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
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

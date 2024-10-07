import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dialogRef = useRef(null); // Create a ref for the dialog

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Loggedin successfully');
        {closeModal} 
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },1000);
       
       
        // Redirect or update state here
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
        setTimeout(()=>{},2000);
      }
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the dialog
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className='text-sm text-red-500'>This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span>This field is required</span>
              )}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              <p>
                Not registered? <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

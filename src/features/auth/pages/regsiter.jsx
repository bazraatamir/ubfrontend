import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../redux/authSlice";
import {useState} from "react";
import {toast} from "react-toastify";
import {ToastContainer} from "react-toastify";
export default function RegisterForm() {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(userData));

    if (registerUser.fulfilled.match(result)) {
      // Redirect on success
      navigate("/home"); // Change to your desired route
    } else {
      // Show error notification if failed
      toast.error(`Registration failed: ${result.payload}`);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className='text-center mb-6'>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/96e23556c599a4c63754cbf31aac9d5fe15ff941a73db90cd8b27e09e692f152?placeholderIfAbsent=true'
          alt='UBZoog Logo'
          className='mx-auto mb-4 w-[250px]'
        />
        <h1 className='text-2xl font-bold'>UBZoog сайтад тавтай морил</h1>
        <p className='text-sm text-gray-400 mt-2'>
          Бүртгэл үүсгэхийн тулд доорх мэдээллийг бөглөнө үү
        </p>
      </div>

      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label className='block mb-1'>Нэр оруулах</label>
          <input
            type='text'
            placeholder='Нэр'
            name='username'
            value={userData.username}
            onChange={(e) => handleChange(e)}
            className='w-full px-4 py-2 rounded border border-gray-600 bg-transparent focus:outline-none'
          />
        </div>

        <div>
          <label className='block mb-1'>Имэйл оруулах</label>
          <input
            type='email'
            placeholder='Имэйл'
            name='email'
            value={userData.email}
            onChange={(e) => handleChange(e)}
            className='w-full px-4 py-2 rounded border border-gray-600 bg-transparent focus:outline-none'
          />
        </div>

        <div>
          <label className='block mb-1'>Нууц үг оруулах</label>
          <input
            type='password'
            placeholder='Нууц үг'
            name='password'
            value={userData.password}
            onChange={(e) => handleChange(e)}
            className='w-full px-4 py-2 rounded border border-gray-600 bg-transparent focus:outline-none'
          />
        </div>

        <div className='flex items-center text-sm mt-2'>
          <input type='checkbox' id='terms' className='mr-2 accent-lime-500' />
          <label htmlFor='terms' className='text-gray-300'>
            <span className='text-lime-400 font-semibold'>UBZoog</span>{" "}
            үйлчилгээний нөхцөлийг зөвшөөрч байна
          </label>
        </div>

        <button
          type='submit'
          className='w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 px-4 rounded mt-4 transition'>
          Бүртгүүлэх
        </button>

        <p className='text-center text-sm mt-4 text-gray-400'>
          Бүртгэлтэй хэрэглэгч үү?{" "}
          <Link
            to='/login'
            className='text-white font-semibold hover:underline'>
            Нэвтрэх
          </Link>
        </p>
      </form>
    </div>
  );
}

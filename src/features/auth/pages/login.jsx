import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/authSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");
    const result = await dispatch(loginUser(formData));
    if (loginUser.fulfilled.match(result)) {
      navigate("/owner/managerestaurant");
    } else {
      alert("Нэвтрэхэд алдаа гарлаа!");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0A171F] text-white'>
      <div className='w-full max-w-md px-6 py-8 bg-[#0A171F]'>
        <div className='text-center mb-8'>
          <h1 className='text-2xl font-bold mb-2'>
            UBZoog сайтанд тавтай морил
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm mb-1'>Имэйл оруулaх</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Имэйл'
              required
            />
          </div>
          <div>
            <label className='block text-sm mb-1'>Нууц үг оруулaх</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Нууц үг'
              required
            />
            <div className='text-right text-sm mt-1'>
              <a href='#' className='text-gray-300 hover:underline'>
                Нууц үг мартсан?
              </a>
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-lime-500 text-black py-2 rounded-md font-semibold hover:bg-lime-600 transition'>
            Нэвтрэх
          </button>
        </form>

        <div className='flex items-center my-6'>
          <hr className='flex-grow border-gray-700' />
          <span className='mx-2 text-gray-400 text-sm'>эсвэл</span>
          <hr className='flex-grow border-gray-700' />
        </div>

        <button className='w-full bg-black text-white border border-gray-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition'>
          <img
            src='https://www.svgrepo.com/show/475656/google-color.svg'
            alt='Google'
            className='w-5 h-5'
          />
          Google-ээр дамжуулан нэвтрэх
        </button>

        <p className='mt-6 text-center text-sm text-gray-400'>
          Бүртгэлгүй хэрэглэгч үү?{" "}
          <a
            href='/register'
            className='text-white hover:underline font-medium'>
            Бүртгүүлэх
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

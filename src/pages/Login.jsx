import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({});
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    // 取得屬性name和使用者輸入的值value
    const { name, value } = e.target;

    //帶入原始值和使用者輸入的值
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/v2/admin/signin', data);
      const { token, expired } = res.data;
      // 儲存token到cookie
      document.cookie = `hexToken=${token}; expires=${new Date(
        expired
      ).toUTCString()}; path=/`;
      console.log('Setting cookies:', document.cookie);
      console.log('Token stored in cookies:', token);

      if (res.data.success) {
        navigate('/admin/products');
      }
    } catch (error) {
      setLoginState(error.response.data);
    }
  };
  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2>登入帳號</h2>

          <div
            className={`alert alert-danger ${
              loginState.message ? 'd-block' : 'd-none'
            } `}
            role='alert'
          >
            {loginState.message}
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='form-label w-100'>
              Email
              <input
                id='email'
                className='form-control'
                name='username'
                type='email'
                placeholder='Email Address'
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='mb-2'>
            <label htmlFor='password' className='form-label w-100'>
              密碼
              <input
                type='password'
                className='form-control'
                name='password'
                id='password'
                placeholder='name@example.com'
                onChange={handleChange}
              />
            </label>
          </div>
          <button onClick={submit} type='button' className='btn btn-primary'>
            登入
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

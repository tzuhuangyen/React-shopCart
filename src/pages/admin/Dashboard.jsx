import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    document.cookie = 'hexToken=;';
    navigate('/login');
  };

  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    ?.split('=')[1];
  console.log('Token retrieved from cookies:', token);

  axios.defaults.headers.common['Authorization'] = token;

  useEffect(() => {
    if (!token) {
      //如果沒有token就導向登入頁面 下面的程式碼就不會執行
      return navigate('/login');
    }
    (async () => {
      try {
        //驗證token是否有效
        await axios.post('/v2/api/user/check');
      } catch (error) {
        console.log(error.response.data.message);
        if (error.response.data.success) {
          navigate('/login');
        }
      }
    })();
  }, [navigate, token]);

  return (
    <>
      {' '}
      <>
        <nav className='navbar navbar-expand-lg bg-dark'>
          <div className='container-fluid'>
            <p className='text-white mb-0'>HEX EATS 後台管理系統</p>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <button
                    onClick={logout}
                    type='button'
                    className='btn btn-sm btn-light'
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='d-flex' style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div className='bg-light' style={{ width: '200px' }}>
            <ul className='list-group list-group-flush'>
              <a
                className='list-group-item list-group-item-action py-3'
                to='/admin/products'
              >
                <i className='bi bi-cup-fill me-2' />
                產品列表
              </a>
              <a
                className='list-group-item list-group-item-action py-3'
                to='/admin/coupons'
              >
                <i className='bi bi-ticket-perforated-fill me-2' />
                優惠卷列表
              </a>
              <a
                className='list-group-item list-group-item-action py-3'
                to='/admin/orders'
              >
                <i className='bi bi-receipt me-2' />
                訂單列表
              </a>
            </ul>
          </div>
          <div className='w-100'>{token && <Outlet />}</div>
        </div>
      </>
    </>
  );
};

export default Dashboard;

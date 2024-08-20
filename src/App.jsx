import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './assets/styles/all.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/AdminProducts';
function App() {
  const [count, setCount] = useState(0);
  //測試是否可以連結到環境變數
  // useEffect(() => {
  //   console.log(
  //     import.meta.env.VITE_REACT_APP_API_URL,
  //     import.meta.env.VITE_REACT_APP_API_PATH
  //   );
  //   (async () => {
  //     const res = await axios.get(
  //       `/v2/api/${import.meta.env.VITE_REACT_APP_API_PATH}/products/all`
  //     );
  //     console.log(res);
  //   })();
  // }, []);
  return (
    <>
      <div>
        {' '}
        <h2>React Practice shop Cart</h2>
        <h3> with vite and bootstrap</h3>
        <div className='App'>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/admin' element={<Dashboard />}>
              <Route path='products' element={<AdminProducts />}></Route>
            </Route>
          </Routes>
        </div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Features
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Dropdown link
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <p className='d-inline-flex gap-1'>
          <a
            className='btn btn-primary'
            data-bs-toggle='collapse'
            href='#multiCollapseExample1'
            role='button'
            aria-expanded='false'
            aria-controls='multiCollapseExample1'
          >
            Toggle first element
          </a>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#multiCollapseExample2'
            aria-expanded='false'
            aria-controls='multiCollapseExample2'
          >
            Toggle second element
          </button>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='.multi-collapse'
            aria-expanded='false'
            aria-controls='multiCollapseExample1 multiCollapseExample2'
          >
            Toggle both elements
          </button>
        </p>
        <div className='row'>
          <div className='col'>
            <div className='collapse multi-collapse' id='multiCollapseExample1'>
              <div className='card card-body'>
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='collapse multi-collapse' id='multiCollapseExample2'>
              <div className='card card-body'>
                Some placeholder content for the second collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
    </>
  );
}

export default App;

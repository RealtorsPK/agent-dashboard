
import { useRouter } from 'next/router';

import Cookies from 'universal-cookie';

import { restrictedRoutesForNav } from '../restricted-routes';
import { setLoginDetails } from '../store/action-reducers/loginDetails';
import Navbar from '../components/global-components/navbar';
import Sidebar from '../components/global-components/sidebar';
import Footer from '../components/global-components/footer';

import Signin from './auth/sign-in';
import Signup from './auth/sign-up';
import { useEffect, useState } from 'react';
import { isValidToken } from '../services/user';
import { useDispatch } from 'react-redux';
import { setTokenHeader } from '../utilities/helper-function';
import Head from 'next/head';
import { Loader } from '../components/ui/loader';

const cookies = new Cookies();

const Layout = ({ children }) => {
  const routes = useRouter();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false)

  useEffect(() => {

    if (routes.asPath.includes('?token=') && routes.asPath.split('?token=').length > 1) {
      const token = routes.asPath.split('?token=')[routes.asPath.split('?token=').length - 1];
      cookies.remove('token',);

      isValidToken(token)
        .then((res) => {
          setTokenHeader(token)
          dispatch(setLoginDetails(res.data))
          cookies.set('token', token, { path: '/' });
          setAccess(true);
        })
        .catch(() => {
          cookies.remove('token',);
          window.open(process.env.NEXT_PUBLIC_COMMERCIAL_SITE + '?logout=true', '_self');
        })
    }

    if (cookies.get('token')) {
      isValidToken(cookies.get('token'))
        .then((res) => {
          setTokenHeader(cookies.get('token'));
          dispatch(setLoginDetails(res.data));
          setAccess(true);
        })
        .catch(() => {
          cookies.remove('token',);
          window.open(process.env.NEXT_PUBLIC_COMMERCIAL_SITE + '?logout=true', '_self');
        })
    } else if (!cookies.get('token') && !routes.asPath.includes('?token=')) {
      window.open(process.env.NEXT_PUBLIC_COMMERCIAL_SITE + '?logout=true', '_self');
    }
  }, [])

  return (
    <div>
      {!restrictedRoutesForNav.includes(routes.asPath) &&
        <div>
          <Head>
            <title>Agent Panel | Realtors PK</title>
          </Head>

          {/* navbar */}
          <div>
            <Navbar />
          </div>

          <div className='flex'>

            {/* Sidebar */}
            <div className='w-[200px]'>
              <Sidebar />
            </div>

            {/* Main Body */}
            <div className='w-[calc(100vw-200px)]'>
              <div className='bg-[#f5f5f5] min-h-[calc(100vh-60px)] p-[20px]'>
                <div className='rounded-[5px] overflow-hidden h-[calc(100vh-110px)] relative'>
                  {access ?
                    children :
                    <div className='text-center'>
                      <Loader />
                    </div>
                  }
                </div>

                <Footer />
              </div>
            </div>

          </div>

        </div>
      }

      {routes.asPath === '/auth/sign-in' && <Signin />}

      {routes.asPath === '/auth/sign-up' && <Signup />}

    </div>
  );
};

export default Layout;

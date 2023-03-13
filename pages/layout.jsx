// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable node/prefer-global/process */

import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import { setLoginDetails } from '../store/action-reducers/loginDetails';
import Navbar from '../components/global-components/navbar';
import Sidebar from '../components/global-components/sidebar';
import { isValidToken } from '../services/user';
import { setTokenHeader } from '../utilities/helper-function';
import { Loader } from '../components/ui/loader';

const cookies = new Cookies();

const Layout = ({ children }) => {
  const routes = useRouter();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (routes.asPath.includes('?token=') && routes.asPath.split('?token=').length > 1) {
      const token = routes.asPath.split('?token=')[routes.asPath.split('?token=').length - 1];

      cookies.remove('token');

      isValidToken(token)
        .then((res) => {
          setTokenHeader(token);
          dispatch(setLoginDetails(res.data));
          cookies.set('token', token, { path: '/' });
          setAccess(true);
          routes.push('/dashboard');
        })
        .catch(() => {
          cookies.remove('token');
          window.open(`${process.env.NEXT_PUBLIC_COMMERCIAL_SITE}?logout=true`, '_self');
        });
    }

    if (cookies.get('token')) {
      isValidToken(cookies.get('token'))
        .then((res) => {
          setTokenHeader(cookies.get('token'));
          dispatch(setLoginDetails(res.data));
          setAccess(true);
        })
        .catch(() => {
          cookies.remove('token');
          window.open(`${process.env.NEXT_PUBLIC_COMMERCIAL_SITE}?logout=true`, '_self');
        });
    } else if (!cookies.get('token') && !routes.asPath.includes('?token=')) {
      window.open(`${process.env.NEXT_PUBLIC_COMMERCIAL_SITE}?logout=true`, '_self');
    }
  }, [dispatch, routes]);

  return (
    <div>
      <Head>
        <title>{'Agent Panel | Realtors PK'}</title>
      </Head>

      {
        access ?
          <div className="flex">

            {/* Sidebar */}
            <Sidebar />

            <div className="w-[calc(100vw-230px)]">
              {/* navbar */}
              <Navbar />

              {/* Main Body */}
              <div className="bg-[#fff] min-h-[calc(100vh-64px)] p-[20px]">
                <div className="rounded-[5px] overflow-hidden relative">
                  {children}
                </div>
              </div>

            </div>
          </div>
          :
          <div className="text-center mt-[50px]">
            <Loader />
          </div>
      }
    </div>
  );
};

export default Layout;

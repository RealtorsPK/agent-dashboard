import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from '../store/store';
import '../styles/globals.css';

import Layout from './layout';

const MyApp = ({ Component, pageProps }) =>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar={false} />
    </Layout>
  </Provider>;

export default MyApp;

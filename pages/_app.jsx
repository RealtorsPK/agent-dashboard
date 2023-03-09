import { Provider } from 'react-redux';

import { store } from '../store/store';
import '../styles/globals.css';

import Layout from './layout';

const MyApp = ({ Component, pageProps }) =>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>;

export default MyApp;

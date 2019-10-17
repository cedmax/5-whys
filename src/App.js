import React from 'react';
import { Provider } from 'react-redux';
import Content from 'components/Content';
import Download from 'components/Download';
import Upload from 'components/Upload';
import Layout from 'components/UI/Layout';
import Title from 'components/UI/Title';
import Footer from 'components/Footer/Footer';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Title>5whys</Title>
      <Layout>
        <Content />
        <Upload />
        <Download />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default App;

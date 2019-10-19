import React from 'react';
import { Provider } from 'react-redux';
import Content from 'components/Content';
import Download from 'components/Download';
import Upload from 'components/Upload';
import Indent from 'components/UI/Indent';
import Layout from 'components/UI/Layout';
import Title from 'components/UI/Title';
import Subtitle from 'components/UI/Subtitle';
import Footer from 'components/Footer/Footer';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Indent>
          <Title>5whys</Title>
          <Subtitle>
            add a problem statement and start answering the questions;
            <br />
            click on existing blocks to open new threads.
          </Subtitle>
        </Indent>
        <Content />
        <Upload />
        <Download />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default App;

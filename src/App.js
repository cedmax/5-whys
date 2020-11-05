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
            <p>
              The 5-whys is a technique developed within Toyota as a critical
              <br />
              component of its problem-solving training.{' '}
              <a
                href="https://buffer.com/resources/5-whys-process/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More details
              </a>
              .
            </p>
            <p>
              Add a problem statement and start answering the why questions;
              <br />
              click on existing blocks to open new threads.
            </p>

            <br />
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

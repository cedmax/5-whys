import React from 'react';
import { Provider } from 'react-redux';
import Content from 'components/Content';
import Layout from 'components/UI/Layout';
import Title from 'components/UI/Title';
import store from 'store';

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <Title>5whys</Title>
        <Content level={0} />
      </Provider>
    </Layout>
  );
}

export default App;

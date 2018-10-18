import { Layout } from 'antd';
import * as React from 'react';
import './banner.css';

const { Header } = Layout;

class Banner extends React.Component {
  public render() {
    return (
      <Layout>
        <Header className="banner">Header</Header>
      </Layout>
    );
  }
}

export default Banner;

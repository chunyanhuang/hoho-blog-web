import * as React from 'react';
import { render } from 'react-dom';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const { Header, Content, Footer, Sider } = Layout;


export default function createApp(App: React.FC, selector = '#app-container'): void {
  const container = document.querySelector(selector);
  console.log('app', App)
  render(
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>
          <div className="logo">HOHO-BLOG</div>
        </Header>
      </Layout>
      <Content>
        <App />
      </Content>
    </ConfigProvider>,
    container
  )
}


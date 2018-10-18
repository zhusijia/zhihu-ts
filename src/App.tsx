import { Button } from 'antd';
import * as React from 'react';
import './App.css';
import Banner from './components/banner';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Banner />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;

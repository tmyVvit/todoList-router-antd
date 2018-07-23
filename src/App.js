import React, { Component } from 'react';
import {Layout, Spin} from 'antd'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import AddInput from './container/AddInputContainer';
import List from './container/ListContainer'
import Filter from './container/FilterGroupContainer'

const {Header, Footer, Content} = Layout;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
              <Header  >
              <Filter />

              </Header>
              <Content className="list">
              <h2>Jquery To Do List</h2>
                <p>
                    <em>Simple Todo List with adding and filter by diff status.</em>
                </p>
                <AddInput />
                <br />
                  <Route path="/:status" component={List}/>
              </Content>
              <Footer >
              
              </Footer>

        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

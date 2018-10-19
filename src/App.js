import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import routes from "./routes";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main_container">
            <Header/>
            <div className="middle_section_bg">
              {routes}
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

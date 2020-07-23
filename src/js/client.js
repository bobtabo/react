import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class UserList extends Component {

    constructor() {
        super();

        this.state = {
          datas: []
        };
    }

    componentDidMount() {
      axios
          .get('http://laravel5.local/api/users')
          .then(response => {
              this.setState({datas: response.data});
          })
          .catch(() => {
              console.log('通信に失敗しました');
          });
    }

    renderDatas() {
      return this.state.datas.map(data => {
          return (
              <li key={data.id}>
                {data.id} / {data.name} / {data.email} / {data.password}
              </li>
          );
      });
    }

    render() {
      return (
          <div className="container">
              <ul>
                  {this.renderDatas()}
              </ul>
          </div>
      );
  }
}

if (document.getElementById('content')) {
  ReactDOM.render(<UserList />, document.getElementById('content'));
}

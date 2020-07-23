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
          // .get('http://laravel5.local/api/users')
          // .then(response => {
          //     this.setState({datas: response.data});
          // })
          .get('http://laravel5.local/api/users')
          .then(response => {
            const data = response.data;
            console.log(data);
            this.setState({
              datas: [...data]
            });
          })
          .catch(() => {
              console.log('通信に失敗しました');
          });
    }

    renderDatas() {
      return this.state.datas.map(data => {
          return (
              // <li>
              //   {data.id} / {data.name} / {data.emai} / {data.password}
              // </li>
              <li key={data.id}>{data.name}</li>
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

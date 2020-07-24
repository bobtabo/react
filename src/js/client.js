import React, { Component } from 'react';
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

  render() {
    return this.state.datas.map(data => {
      return (
        <tr key={data.id}>
          <th scope="row">{data.id}</th>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
        </tr>
      );
    });
  }
}

if (document.getElementById('content')) {
  ReactDOM.render(<UserList />, document.getElementById('content'));
}

import React, { Component } from 'react';

class SearchBar extends Component {

  // 1. state 초기화
  state = { term: '' };

  // 2. jsx에서 콜백함수 호출
  onInputChange = event => {
  // 3. setState 호출해서 state를 업뎃
    this.setState({ term: event.target.value });
  };
  // 4. submit 이벤트 리스너도 콜백 함수로 
  onFormSubmit = event => {
    event.preventDefault();
    // TODO: make sure we call 
    // callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit}className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input onChange={this.onInputChange} type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    if (!this.props.book){
      return <div>pleas select a book</div>;
    }

    return (
      <div>
       <h3>Details for:</h3>
       <div>title: {this.props.book.title}</div>
       <div>pages: {this.props.book.page}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook, // activeBook is key in the reducers index.js
  };
}

export default connect(mapStateToProps)(BookDetail);

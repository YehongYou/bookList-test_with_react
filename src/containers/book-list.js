import React, {Component} from 'react';
import {connect} from 'react-redux';
       // only import single property connect from file, use {}
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; //=>make sure action produced by actioncreator flow throug all reducers

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
        key={book.title}
        onClick={()=>this.props.selectBook(book)}
        className="list-group-item">{book.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  };
};

function mapStateToProps(state){  //!!!!!!very important function must have
  // whatever is returned will show up as props inside of BookList-container
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch){ //anything is returned from this function will endup as props on the booklist container,pass the first argument
  // whenever the selectbook is called, the result should be pass to all reducers inside the appliaction
  return bindActionCreators({selectBook: selectBook}, dispatch); //valuse selectBook is imported at the top
}
// promote BookList from a component to a container -- it need to know
// about this new dispatch method, selectBook. make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //=> produce a container

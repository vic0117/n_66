import React from "react";

class Pagination extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 3,
        productsData: []
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount() {
       
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
    const {data} = this.props;
    // console.log(data); 
    
      const { todos, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentTodos);
      const renderTodos = currentTodos.map((todo, i) => {
        return <li key={i}>{todo.product_name}</li>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }

  export default Pagination
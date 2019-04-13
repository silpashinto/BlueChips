import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import image1 from "../images/bluechips.png"
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {
//   state = {
//     books: []
//   };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res => this.setState({ books: res.data }))
//       .catch(err => console.log(err));
//   };

  render() {
    return (
      <Container fluid>
      

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img src={image1} alt="Blue Chip Logo" />
              <h1> Welcome to Blue Chips Stock Tracker </h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
            <Col size="md-12">
            
                <h1>Welcome To Blue Chips Stock Tracker</h1>
            
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem> */}
                {/* ))} */}
              {/* </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
            </Col> 
        </Row>


        <Row>
            <Col size="md-12">

            <footer>

                <h3> Footer stuff here !</h3>

            </footer>


            </Col>
        </Row>

      </Container>
    );
  }
}

export default Home;

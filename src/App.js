import React from 'react'
import {Route} from 'react-router-dom'
//import BookShelvesList from './BookShelvesList'
import BookShelvesList from './Components/BookShelvesList'
import BookSearch from './Components/BookSearch'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    myBooks: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      //console.log(this)
      this.setState({myBooks})
    })
      // let myBooks = {...this.state.books}

      // myBooks.read = books.filter(book => book.shelf === "read")
      // myBooks.currentlyReading = books.filter(book => book.shelf === "currentlyReading")
      // myBooks.wantToRead = books.filter(book => book.shelf === "wantToRead")
      
      // this.setState({books: myBooks})
      // console.log(this.state.books.read)
      // console.log(this.state.books.currentlyReading)
      // console.log(this.state.books.wantToRead)
  }

  changeBookShelf(book, shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          myBooks: state.myBooks.filter(b => b.id !== book.id).concat([book])
        }))
      })
  }  


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelvesList 
              myBooks={this.state.myBooks}
              onShelfChange={(book, shelf) => (
                this.changeBookShelf(book, shelf)
              )}
            />  
        )}/>

        <Route path="/search" render={({history}) => (
          <BookSearch 
            myBooks={this.state.myBooks}
            onShelfChange={(book, shelf) => (
              this.changeBookShelf(book, shelf)
            )}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

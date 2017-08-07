import React from 'react'
import {Route} from 'react-router-dom'
import BookShelvesList from './Components/BookShelvesList'
import BookSearch from './Components/BookSearch'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        myBooks: [],
        searchedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((myBooks) => {
            this.setState({myBooks})
        });
    }

    changeBookShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            this.setState(state => ({
                myBooks: state.myBooks.filter(b => b.id !== book.id).concat([book])
            }));
        });
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
        );
    }
}

export default BooksApp;

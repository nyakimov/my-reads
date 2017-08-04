import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookShelvesList extends Component {
    static propTypes = {
        books: PropTypes.array,
        onShelfChange: PropTypes.func.isRequired
    }

    render () {
        const {books} = this.props
        let bookShelves = [
            {
                name: "Currently Reading",
                books: books.filter(book => book.shelf === "currentlyReading")
            },
            {
                name: "Want To Read",
                books: books.filter(book => book.shelf === "wantToRead")
            },
            {
                name: "Read",
                books: books.filter(book => book.shelf === "read")
            },
        ]
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookShelves.map((shelf, index) => (
                            <BookShelf 
                                key={index}
                                shelfName={shelf.name}
                                books={shelf.books}
                                onShelfChange={this.props.onShelfChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                    > Add a Book</Link>   
                </div>
            </div>
        )
    }
}

export default BookShelvesList
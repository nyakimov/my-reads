import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class BookSearch extends Component {
    static propTypes = {
        books: PropTypes.array,
        onShelfChange: PropTypes.func.isRequired
    }

    state = {
        query: '',
        foundBooks: []
    }

    searchBooks = (query) => {
        if (query !== "") {
            BooksAPI.search(query, 20).then((books) => {
                //Handle the error response
                if (!books.error) {
                    this.setState(state => ({
                        foundBooks: books
                    }))
                }
            })
        }
        //Empty the list of books if the search bar is an empty string
        else {
            this.setState(state => ({
                foundBooks: []
            }))
        }
            
    }

    updateQuery = (query) => {
        this.setState({query})
        this.searchBooks(query)
    }

    render() {
        return(
          <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="">Close</Link>
                        <div className="search-books-input-wrapper">
                            {/* 
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                            
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input 
                                type='text'
                                placeholder='Search by title or author'
                                value={this.state.query}
                                onChange={(e) => this.updateQuery(e.target.value)}
                            />
                            
                        </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.foundBooks.map(book => (
                            <Book 
                                key={book.id}
                                book={book}
                                onShelfChange={this.props.onShelfChange}
                            />
                        ))}
                    </ol>
                </div>
          </div>
        )
    }
}

export default BookSearch
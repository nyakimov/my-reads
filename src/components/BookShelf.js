import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        shelfName: PropTypes.string.isRequired,
        books: PropTypes.array,
        onShelfChange: PropTypes.func.isRequired
    }

    render () {
        const {shelfName, books} = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
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

export default BookShelf
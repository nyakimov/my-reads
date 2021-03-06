import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        let {book} = this.props
        const imageURL = book.imageLinks ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : ""
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ backgroundImage: `url("${imageURL}")` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={(e) => this.props.onShelfChange(book, e.target.value)} value={book.shelf || "none"}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                      {book.authors && book.authors.map((author, index) => (
                        <div key={index} className="book-authors">
                            {author}
                        </div>
                    ))}  
                </div>
            </li>
        );
    }
}

export default Book;
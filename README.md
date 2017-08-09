This is Niko Yakimov's React Fundamentals (Chapter 2) final project for Udacity's React Fundamentals nanodegree, developed by [React Training](https://reacttraining.com). The goal of this project is to display Niko's ability to create a react application that communicates with a Backend Server and allows the user to search through Book objects as well as add them to a specific personal shelf (Currently Reading, Want To Read and Read). Further it demonstrates the DRY pricinples and how to split a larger page/application into smaller individual self-containd components as well as properly maintaining and updating the global state by pushing any changes to the parent element and allowing it to perform the child requested modifications.

## Installation

This project is located on [GitHub](https://github.com/nyakimov/my-reads). Once you clone it down to your system you can run _npm install_ to install all required dependencies and then _npm start_ to start the project and view it in your browser.

## What You're Getting
```
+--public/    
 |-- index.html - Template inside of which the application runs, DO NOT MODIFY
 |-- favicon.ico - React Icon
+-- src/
 +-- Components/ - All of the individual components
  |-- Boook.js - The lowest component rendering a single book
  |-- BookSearch.js - The search page, containing the search bar and the list of found books
  |-- BookShelf.js - A titled container that takes an array of books and displays them
  |-- BookShelvesList.js - A container that holds shelves
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of your app. Contains static HTML right now.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App. 
 Testing is encouraged, but not required.
 +-- utils
  |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. 
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore 
|-- README.MD - This README file.
|-- package.json - npm package manager file.
```

## Backend Server

As mentioned above the project uses the udacity Books API to retrieve and upadate the books. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods that are used to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms (listed below). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

### Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

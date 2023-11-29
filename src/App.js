import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import './App.css';
import './AddBookForm.css';
import './BookList.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the mock API
    fetch('https://654da611cbc325355741bf29.mockapi.io/book-list')
      .then((response) => response.json())
      .then((data) => {
      console.log('Fetched data:', data); 
      setBooks(data); // Update state with fetched data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

  const addBook = (title) => {
    // Send a POST request to add a new book
    fetch('https://654da611cbc325355741bf29.mockapi.io/book-list', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setBooks([...books, data]));
  };


  const removeBook = (id) => {
    fetch(`https://654da611cbc325355741bf29.mockapi.io/book-list/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete book');
        }
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };
  

  return (
    <div className="container">
      <header className="header">
        <h1>My Book List</h1>
        <p className='sub-text'>Manage your book collection</p>
      </header>

      <div className="content">
        <BookList books={books} removeBook={removeBook} />
        <AddBookForm addBook={addBook} />
      </div>
    </div>
  );
}

export default App;

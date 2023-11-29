import React from 'react';

const BookList = ({ books, removeBook }) => {
  const heart = '💜';

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span role="img" aria-label="Heart Emoji" style={{ marginRight: '5px' }}>
            {heart}
          </span>
          <span className="book-title" onClick={() => removeBook(book.id)}>
            {book.title}
        </span>{' '}
        <span onClick={() => removeBook(book.id)} className="remove-button">
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BookList;

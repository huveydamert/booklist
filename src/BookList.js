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
            {book.title}{' '}
            <span onClick={() => removeBook(book.id)} style={{ cursor: 'pointer', color: '#ff007f'}}>
                X
            </span>
        </li>
      ))}
    </ul>
  );
};

export default BookList;

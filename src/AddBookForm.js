import React, { useState } from 'react';
import './AddBookForm.css';

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;

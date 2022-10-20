import React from 'react';

const Searchbar = () => (
  <div>
    <input type="text" name="title" />
    <ul>
      <li>All</li>
      <li>Private</li>
      <li>Public</li>
      <li>Completed</li>
    </ul>
  </div>
);

export default Searchbar;

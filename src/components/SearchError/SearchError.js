import React from 'react'

import './SearchError.css'

export default function SearchError({ errorText }) {
  return <p className='search__error'>
  {errorText}
  </p>
};


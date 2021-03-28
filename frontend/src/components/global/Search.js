import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Search = () => (
  // handleInputChange = (inputValue: any, actionMeta: any) => {
  //   console.group('Input Changed');
  //   console.log(inputValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // },

  <Select 
    className="search"
    options={options} 
  />
)

export default Search


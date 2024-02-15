import React from 'react'
import Search from './Search'
import AddNewWord from './AddNewWord'

const Header = () => {
  return (
    <div>
      <h1>Village Dictionary</h1>
      <div className='header'> 
        <Search />
        <AddNewWord />
      </div>
    </div>
  )
}

export default Header
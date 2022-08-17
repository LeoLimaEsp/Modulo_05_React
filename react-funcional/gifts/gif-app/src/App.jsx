
import { useState } from 'react'
import Grid from './components/Grid'
import AddCategory from './components/AddCategory'
import './index.css'
function App() {
  const [categories, setCategories] = useState(['Nascar', 'Dragon Ball', 'One Piece'])
  return (
    <>
      <h1>Gif App</h1>
      <div className='container'>
      {
        categories.map((category) => (<Grid category={category}/>))
      }
      </div>
      
      <AddCategory/>
    </>
  )
}

export default App

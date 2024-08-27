import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import Home from './pages/Home.jsx';
import ShowBook from './pages/ShowBook.jsx'
import EditBook from './pages/EditBook.jsx'
const App = () => {
  return (
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<CreateBook/>} path='/books/create'/>
      <Route element={<EditBook/>} path='/books/edit/:id'/>
      <Route element={<DeleteBook/>} path='/books/delete/:id'/>
      <Route element={<ShowBook/>} path='/books/details/:id'/>
      
    </Routes>
  )
}

export default App

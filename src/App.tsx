import './App.css'
import BooksList from './components/BooksList/BooksList'
import Home from './components/home/home'
import { Routes, Route } from 'react-router-dom'
import { books } from './repository/BooksRepository'
import BookDetailRoute from './components/BookDetail/BookDetailRoute'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/books" element={<BooksList books={books}/>}></Route>
      <Route path="/books/:id" element={<BookDetailRoute books={books} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  )
}

export default App

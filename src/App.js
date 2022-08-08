/*import { useState, useEffect } from "react"*/
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/home'
import Vote from './pages/vote'
import Poll from './pages/poll'
import Login from './components/login'
import Me from './components/about'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/vote/:id" element={<Vote />}></Route>
          <Route path="/poll/:id" element={<Poll />}></Route>
          <Route path="/about" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;

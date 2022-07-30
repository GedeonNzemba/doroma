import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { App } from './App'
import Home from './components/home/Home'
import Index from './shop/Index'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Index />} />
        </Route>
        <Route path="/shop" element={<Index />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

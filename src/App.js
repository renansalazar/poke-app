import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Detalle from "./pages/Detalle"
import Home from './pages/Home'
import Layout from "./pages/Layout"
import NoMatch from "./pages/NoMatch"
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/detalle/:name" element={<Detalle />} />
              <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App;

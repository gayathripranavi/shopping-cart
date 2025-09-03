import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import {store} from './store'
import CustomerAdd from './pages/customerAdd'
import CustomerView from './pages/customerView'
function App() {
  

  return (
    <>
      <Provider store={store}>
      <h2>REact Redux customer</h2>
      <CustomerAdd/>
      <CustomerView></CustomerView>
      </Provider>
    </>
  )
}

export default App

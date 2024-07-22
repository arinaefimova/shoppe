import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>,
)

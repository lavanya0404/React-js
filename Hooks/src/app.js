import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'

// not using any key (not acceptable) <<< index as key <<<<<<<<< unique (best practice)
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)

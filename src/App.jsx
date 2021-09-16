import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppNavbar from './components/AppNavbar'
import Search from './components/Search'
import Images from './components/Images'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <MuiThemeProvider>
      <Router>
        <div className="APP container">
          <AppNavbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <Search />
                <Images />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App

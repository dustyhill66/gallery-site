import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage} from './components/pages/HomePage'
import {GalleryPage} from './components/pages/GalleryPage'
import {TechnologyPage} from './components/pages/TechnologyPage'
import {AboutPage} from './components/pages/AboutPage'
import {ExpoPage} from './components/pages/ExpoPage'
import {ContactsPage} from './components/pages/ContactsPage'
import {Navbar} from './components/Navbar'
import {AppHeader} from './components/AppHeader'
import GalleryList from './components/gallery-list/GalleryList'
import GalleryItemPage from './components/pages/GalleryItemPage'

function App() {
  return (
      <div className="container">
      <AppHeader />
      <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/gallery' component={GalleryPage} />
          <Route path='/technology' component={TechnologyPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/expo' component={ExpoPage} />
          <Route path='/contacts' component={ContactsPage} />
          <Route path='/category-1' component={GalleryList} />
          <Route path='/category-2' component={GalleryList} />
          <Route path='/category-3' component={GalleryList} />
          <Route path='/category-4' component={GalleryList} />
          <Route path='/category-5' component={GalleryList} />
          <Route path='/category-6' component={GalleryList} />
          <Route path='/category-7' component={GalleryList} />
          <Route path='/category-8' component={GalleryList} />
          <Route path='/category-9' component={GalleryList} />
          
          <Route path='/:id' component={GalleryItemPage} />
        </Switch>
				
      </div>
  )
}

export default App
import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import dataAction from './actions/data'
import Header from './components/Header';
import HomePage from './components/HomePage';
import DedicatedPage from './components/DedicatedPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import pageNotFound from 'resource/pageNotFound.png'

const fetchData = async (props) => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      props.setUserData(json)
    })
  await fetch('https://pixabay.com/api/?key=17528862-978b87f9364e392e1389dcbcf&image_type=photo&pretty=true&per_page=10')
    .then(response => response.json())
    .then(json => {
      const { hits } = json
      const images = hits.map((hit) => {
        return hit.largeImageURL
      })
      props.setUserImage(images)
    })
}

const App = (props) => {
  const [loaded, setLoading] = useState(false)
  if (!loaded) {
    fetchData(props)
    setLoading(true)
  }
  return (
    <Router>
      <div className="App">
        <Header props={props} />
        <Switch>
          <Route path='/' exact component={() => <HomePage props={props} />} />
          <Route path="/detail/:id" component={(target) => <DedicatedPage props={{ ...props, target }} />} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );

}
const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <img src={pageNotFound} alt='page not found' className='notFoundImage' />
      <Link to='/' className='homeLink'>Home</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.data.users,
    images: state.data.images
  }
}

const mapStateToDispatch = dispatch => {
  return {
    setUserData: data => {
      dispatch(dataAction.setUserData(data))
    },
    setUserImage: data => {
      dispatch(dataAction.setUserImage(data))
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);

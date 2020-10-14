import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Properties from '../Properties/Properties.js'
import Property from '../Properties/Property.js'
import PropertyCreate from '../Properties/PropertyCreate'
import PropertyUpdate from '../Properties/PropertyUpdate'
import HomePage from '../HomePage/HomePage.js'
import { withCookies } from 'react-cookie'

class App extends Component {
  constructor (props) {
    super(props)
    const { cookies } = props
    console.log(cookies.get('user'))
    this.state = {
      alerts: [],
      user: cookies.get('user') || null
    }
  }

  setUser = user => {
    const { cookies } = this.props
    cookies.set('user', user)
    this.setState({ user })
  }

  clearUser = () => {
    const { cookies } = this.props
    cookies.remove('user')
    this.setState({ user: null })
  }

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <HomePage alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/properties' render={() => (
            <Properties alert={this.alert} user={user}/>
          )} />
          <AuthenticatedRoute user={user} path='/properties/:id' render={() => (
            <Property alert={this.alert} user={user}/>
          )} />
          <AuthenticatedRoute user={user} path='/create-property' render={() => (
            <PropertyCreate alert={this.alert} user={user}/>
          )} />
          <AuthenticatedRoute user={user} path='/properties/:id/edit' render={() => (
            <PropertyUpdate alert={this.alert} user={user}/>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default withCookies(App)

import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import PropertyForm from './PropertyForm'

const PropertyUpdate = props => {
  const [property, setProperty] = useState({ name: '',
    address: '',
    tanent_name: '',
    lease_start_date: '',
    lease_end_date: '',
    rent: '' })
  const [edited, setEdited] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/properties/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => setProperty(res.data.property))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setProperty(property => ({ ...property, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/properties/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${props.user.token}`
      },
      data: { property }
    })
      .then(res => setEdited(true))
      .catch(console.error)
  }

  if (edited) {
    return <Redirect to={{
      pathname: `/properties/${props.match.params.id}`,
      state: { flush: true }
    }} />
  }

  return (
    <PropertyForm
      property={property}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`/properties/${props.match.params.id}`}
    />
  )
}

export default withRouter(PropertyUpdate)

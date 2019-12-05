import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import apiUrl from '../../apiConfig'
import PropertyForm from './PropertyForm'

const PropertyCreate = props => {
  const [property, setProperty] = useState({ name: '', address: '', tenant_name: '', lease_start_date: '', lease_end_date: '', rent: '' })

  const handleChange = event => {
    event.persist()
    setProperty({ ...property, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/properties`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { property }
    })
      .then(response =>
        props.history.push(`properties/${response.data.property.id}`)
      )
      .catch(console.error)
  }
  return (
    <PropertyForm
      property={property}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath="/"
    />
  )
}

export default withRouter(PropertyCreate)

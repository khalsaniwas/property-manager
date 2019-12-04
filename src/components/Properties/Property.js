import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Property = props => {
  const [property, setProperty] = useState(null)
  const userId = props.user._id

  useEffect(() => {
    axios({ url: `${apiUrl}/properties/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setProperty(res.data.property))
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/properties/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'property deleted ', variant: 'warning' })
        props.history.push('/properties')
      })
  }

  if (!property) {
    return <p>Loading stuff...</p>
  }

  return (
    <div>
      <h2>{property.name}</h2>
      {userId === property.owner && <button onClick={handleDelete}>Delete</button>}
    </div>
  )
}

export default withRouter(Property)

import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Property = props => {
  const [property, setProperty] = useState(null)
  const userId = props.user.id

  useEffect(() => {
    axios({ url: `${apiUrl}/properties/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
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
        Authorization: `Token token=${props.user.token}`
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
    <div className="jumbotron text-center">
      <h4>{property.name}</h4>
      <h5>Address: {property.address}</h5>
      <h5>Tenant name: {property.tenant_name}</h5>
      <h5>Lease starts on: {property.lease_start_date}</h5>
      <h5>Lease ends on: {property.lease_end_date}</h5>
      <h5>Rent: ${property.rent}.00</h5>
      {userId === property.user.id && <button onClick={handleDelete}>Delete</button>}
      <Link to={`/properties/${props.match.params.id}/edit`}>
        <button>Update</button>
      </Link>
      <Link to="/properties">
        <button type="text">Back</button>
      </Link>
    </div>
  )
}

export default withRouter(Property)

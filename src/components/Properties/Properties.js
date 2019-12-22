import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const Properties = props => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/properties`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(response => {
        setProperties(response.data.properties)
      })
      .then(() => props.alert({ heading: 'Success', message: 'All your properties', variant: 'success' }))
      .catch(console.error)
  }, [])
  const propertiesJsx = properties.map(property => (
    <ListGroup.Item variant="light" key={property.id}>
      <Nav.Link href={`#properties/${property.id}`}>{property.name}</Nav.Link>
    </ListGroup.Item>
  ))

  return (
    <div>
      <h1>Properties</h1>
      <Link to="/create-property"><button>Add New Property</button></Link>
      <ListGroup>
        {propertiesJsx}
      </ListGroup>
    </div>
  )
}

export default Properties

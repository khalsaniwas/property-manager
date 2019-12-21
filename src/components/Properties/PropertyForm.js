import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const PropertyForm = ({ property, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Property name"
          value={property.name}
          name="name"
          onChange={handleChange}
          required
        />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="enter address"
          value={property.address}
          name="address"
          onChange={handleChange}
        />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridTenantName">
        <Form.Label>Tenant Name</Form.Label>
        <Form.Control
          placeholder="enter name"
          value={property.tenant_name}
          name="tenant_name"
          onChange={handleChange}
        />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridLeaseStartDate">
        <Form.Label>Lease start date</Form.Label>
        <Form.Control
          placeholder="MM-DD-YYYY"
          value={property.lease_start_date}
          name="lease_start_date"
          onChange={handleChange}
        />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridLeaseEndDate">
        <Form.Label>Lease end date</Form.Label>
        <Form.Control
          placeholder="MM-DD-YYYY"
          value={property.lease_end_date}
          name="lease_end_date"
          onChange={handleChange}
        />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridRent">
        <Form.Label>Rent</Form.Label>
        <Form.Control
          placeholder="total rent"
          value={property.rent}
          name="rent"
          onChange={handleChange}
        />
      </Form.Group>
    </Form.Row>
    <button type="submit">Submit</button>
    <Link to="/properties">
      <button type="text">Cancel</button>
    </Link>
  </Form>
)

export default PropertyForm

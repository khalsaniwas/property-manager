import React from 'react'
import { Link } from 'react-router-dom'

const PropertyForm = ({ property, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      placeholder="Property name"
      value={property.name}
      name="name"
      onChange={handleChange}
      required
    />
    <label>Address</label>
    <input
      placeholder="enter address"
      value={property.address}
      name="address"
      onChange={handleChange}
    />
    <label>Tenant Name</label>
    <input
      placeholder="enter name"
      value={property.tenant_name}
      name="tenant_name"
      onChange={handleChange}
    />
    <label>Lease start date</label>
    <input
      placeholder="MM-DD-YYYY"
      value={property.lease_start_date}
      name="lease_start_date"
      onChange={handleChange}
    />
    <label>Lease end date</label>
    <input
      placeholder="MM-DD-YYYY"
      value={property.lease_end_date}
      name="lease_end_date"
      onChange={handleChange}
    />
    <label>Rent</label>
    <input
      placeholder="total rent"
      value={property.rent}
      name="rent"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <Link to="/">
      <button type="text">Cancel</button>
    </Link>
  </form>
)

export default PropertyForm

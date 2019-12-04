import React from 'react'
import { Link } from 'react-router-dom'

const PropertyForm = ({ property, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      placeholder="Property Name"
      value={property.name}
      name="name"
      onChange={handleChange}
      required
    />

    <label>Address</label>
    <input
      placeholder="Property Address"
      value={property.address}
      name="address"
      onChange={handleChange}
    />

    <label>Tenant Name</label>
    <input
      placeholder="Tenant Name"
      value={property.tenant_name}
      name="tenant name"
      onChange={handleChange}
    />
    <label>Lease start date</label>
    <input
      placeholder="Lease start date"
      value={property.lease_start_date}
      name="Lease start date"
      onChange={handleChange}
    />
    <label>Lease end date</label>
    <input
      placeholder="Lease end date"
      value={property.lease_end_date}
      name="Lease end date"
      onChange={handleChange}
    />
    <label>Rent</label>
    <input
      placeholder="Property Rent"
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

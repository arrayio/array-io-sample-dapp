import React from 'react'

const Link = ({ active, children, onClick }) => (

  <button className="btn btn-dark" onClick={onClick} disabled={active} >
    {children}
  </button>
)

export default Link
import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const cls = variant === 'outline' ? 'btn-outline' : 'btn-primary'
  return (
    <button className={`${cls} ${className}`} {...props}>
      <span>{children}</span>
    </button>
  )
}

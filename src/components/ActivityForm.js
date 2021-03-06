import React from 'react'

export default function ActivityForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Activity-Form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  );
}
import React from 'react'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to} styles={{color: "red"}}>
    <ArrowRightIcon icon={to} />
  </button>
)
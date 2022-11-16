import React from 'react'

export default function envCheck() {
  console.log("in envCheck");
  console.log(process.env);

  return (
    <div>envCheck</div>
  )
}

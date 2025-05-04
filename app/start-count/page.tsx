import React from 'react'
import CountHeader from './compoenents/CountHeader'
import AddCountRecord from './compoenents/AddCountRecord'

export default function page() {
  return (
    <div className='px-6'>
        <CountHeader/>
        <AddCountRecord/>
    </div>
  )
}

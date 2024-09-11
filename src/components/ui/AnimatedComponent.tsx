"use client"
import React from 'react'
import CountUp from 'react-countup';
const AnimatedComponent = ({ammount}:{ammount:number}) => {
  return (
    <div>
        <CountUp
         end={ammount}
         duration={2.75}
         decimal="2"
         prefix='₹' />
    </div>
  )
}

export default AnimatedComponent
import React from 'react'
import GitHubCalendar from 'react-github-calendar';


const Graph = () => {
  return (
    <div className='bg-black flex justify-center p-4'>
      <GitHubCalendar username="swamimalode07" blockRadius={3}/>
    </div>
  )
}

export default Graph
import React from 'react'
import Card from './Card'
import seasons from '../Data/Seasons'
import '../styles/Grid.css'

function Grid() {
  return (
    <div className="homeGrid">
        {
          seasons && seasons.map((season) => (
              <Card data={season} />
          ))
        }
      </div>
  )
}

export default Grid
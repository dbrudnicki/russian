// @flow
import React from 'react'
import './card.scss'

type Props = {
  front: String,
  back: String
}

export const Card = ({ front, back }: Props) => (
  <div className="Card">
    <div className="inner">
      <div className="front">
        <div className="text">{front}</div>
      </div>
      <div className="back">
        <div className="text">{back}</div>
      </div>
    </div>
  </div>
)

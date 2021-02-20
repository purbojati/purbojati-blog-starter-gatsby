import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Adjie Purbojati`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hi I'm Adjie, tech founder and innovation enthusiast. Also a traveler before the pandemic came.{' '}
          <a href="https://www.linkedin.com/in/purbojati/">
            Let's connect with me!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

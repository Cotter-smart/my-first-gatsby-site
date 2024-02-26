
// Step 1: Import React
import * as React from 'react'
import myImage from '.src/images/nyestuff.jpg'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>FIN 388 Learning Website PHISH</h1>
      <p>We built this using gatsby</p>

<div>
      <h1>Image Viewer</h1>
      <img src= {myImage} alt="Description of the image" />
    </div>


    </main>
  )
}

// Step 3: Export your component
export default AboutPage
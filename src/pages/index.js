/* IMPORTS */



import * as React from 'react'
import { Link } from 'gatsby'
/* import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
//import './App.css'

import BackgroundImage from 'gatsby-background-image'

//import backgroundImage from '/Users/cottersmart/Desktop/my-first-gatsby-site/src/background.jpg'


//import { graphql, useStaticQuery } from 'gatsby';
//import { getImage, GatsbyImage } from 'gatsby-plugin-image';
//import styled from 'styled-components';
//import './App.css';

//import BackgroundImage from 'gatsby-background-image';

// Assuming backgroundImage is correctly imported and available
//import backgroundImage from '/Users/cottersmart/Desktop/my-first-gatsby-site/src/background.jpg';

*/
/* CODE */



const IndexPage = () => {
  return (
    <main>
    
     
<h1 style={{ color: '#272727', fontFamily: 'Playfair Display', textAlign: 'center', fontSize: '55px', fontWeight: 'bold'}}>ESummarAIze</h1>

      <Link to="/about">About</Link>

      <select style={{fontFamily: 'Playfair Display'}} className='form-select'>
        {options.map(option => (
            <option value = {option.value}>{option.label}</option>
        ))}
      </select>

      <div style={squareStyle}></div>

      <button style={buttonRun}>Run</button>

      <h2 style={{ color: 'black', fontFamily: 'Playfair Display', marginLeft: '330px', fontSize: '30px', fontWeight: 'bold'}}>Summary</h2>

      <div style={squareStyle}></div>

      <button style={buttonDownload}>Download</button>
      <button style={buttonPrint}>Print</button>
      <button style={buttonCopy}>Copy</button>

      <p>MADE BY JULIA, COTTER, MATT!!</p>
    </main>
  

)

}



export const Head = () => <title>Home Page</title>

export default IndexPage


const options = [
    {label: "Select Date", value: 1},
    {label: "From Last Meeting", value: 2},
    {label: "Last Month", value: 2},
    {label: "Last 3 Months", value: 3},
    {label: "Last Year", value: 2},
];


const buttonRun = {
      width: '63px',
      height: '27px',
      backgroundColor: '#bddaec',
      border: '1px solid #85acc5',
      borderRadius: '10px',
      fontSize: '16px',
      color: 'black',
      fontFamily: 'Playfair Display',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '299px',
      right: '340px', 
    };

    const buttonDownload = {
          width: '82px',
          height: '27px',
          backgroundColor: '#bddaec',
          border: '1px solid #85acc5',
          borderRadius: '10px',
          fontSize: '16px',
          color: 'black',
          fontFamily: 'Playfair Display',
          cursor: 'pointer',
          position: 'absolute',
          bottom: '-190px',
          right: '480px',
        };

        const buttonCopy = {
              width: '63px',
              height: '27px',
              backgroundColor: '#bddaec',
              border: '1px solid #85acc5',
              borderRadius: '10px',
              fontSize: '16px',
              color: 'black',
              fontFamily: 'Playfair Display',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '-190px',
              right: '340px',
            };

            const buttonPrint = {
                  width: '63px',
                  height: '27px',
                  backgroundColor: '#bddaec',
                  border: '1px solid #85acc5',
                  borderRadius: '10px',
                  fontSize: '16px',
                  color: 'black',
                  fontFamily: 'Playfair Display',
                  cursor: 'pointer',
                  position: 'absolute',
                  bottom: '-190px',
                  right: '410px',
                };


    const squareStyle = {
          width: '1000px',
          height: '400px',
          border: '2px solid black',
          margin: '20px auto', // Centers the square horizontally
          position: 'relative'
        };





        
"use client";

function HelloWorld() {
    return (
      <div>
        Hello world
        <p>scoped!</p>
        <style jsx>{`
          p {
            color: blue;
        }
        /* displays anything past 1500px */
          div {
            background: red;
          }
        /* displays anything under 1500px */ 
          @media (max-width: 1500px) {
            div {
              background: yellow;
            }
          }
          @media (max-width: 1200px) {
            div {
              background: pink;
            }
          }
          @media (max-width: 900px) {
            div {
              background: blue;
            }
          }
          @media (max-width: 600px) {
            div {
              background: orange;
            }
          }
        `}</style>
        <style jsx>{`
          body {
            background: black;
          }
        `}</style>
      </div>
    )
  }
   
  export default HelloWorld
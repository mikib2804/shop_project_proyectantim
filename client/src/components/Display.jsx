import { useState } from 'react';
const Display = ({curent}) => {
  
  return (
      <footer>
          <p>{curent === true ? "we got all the info we needed" :"you still have to give us info"}</p>
      </footer>
  )
}

export default Display
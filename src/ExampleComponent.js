import React from 'react';

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

/* Default component model
  {
    "greeting": "Hello, ",  
    "username": {{ current_user.fullName }},
    "message": "Welcome to custom components!",
    "yesQuery": "yesQuery",
    "noQuery": "noQuery",
    "runQuery": "runQuery"
  }
*/

const ExampleComponent = ({ triggerQuery, model, modelUpdate }) => {
  const handleChange = (e) => {
    modelUpdate({
      greeting: e.target.value
    })
  }
  return (
    <>
      <CircularProgress value={80} />
    </>
  );
}
export default ExampleComponent;
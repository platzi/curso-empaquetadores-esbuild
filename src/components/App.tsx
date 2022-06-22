import React, { useCallback, useState } from 'react';

const App = (props: { message: string }) => {
  return(
    <>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button>Increment</button>
    </>
  )
}
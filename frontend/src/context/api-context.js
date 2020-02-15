import React from 'react'

const apiContext = React.createContext({})

export const ApiProvider = apiContext.Provider
export const ApiConsumer = apiContext.Consumer
export default apiContext
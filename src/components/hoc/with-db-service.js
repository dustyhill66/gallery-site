import React from 'react';
import DBServiceContext from '../db-service-context/db-service-context'

const WithDBService = () => (Wrapped) => {
  return (props) => {
    return (
      <DBServiceContext.Consumer>
        {
          (DBService) => {
            return <Wrapped {...props} DBService={DBService} />
          }
        }
      </DBServiceContext.Consumer>
    )
  }
}

export default WithDBService
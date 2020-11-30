import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

const Dashboard = (props) => {
  const { route } = props

  return <Suspense fallback={'carcando'}>{renderRoutes(route.routes)}</Suspense>
}

Dashboard.propTypes = {
  route: PropTypes.object
}

export default Dashboard

/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react'
import Home from './views/home'
import { Redirect } from 'react-router-dom'
import DashboardLayout from './layouts/dashboard'
import Login from './views/login'
import List from './views/list'
import Invoice from './views/invoice'
import User from './views/user'


const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/list',
    exact: true,
    component: List
  },
  {
    path: '/new/invoice',
    exact: true,
    component: Invoice
  },
  {
    path: '/create',
    exact: true,
    component: User
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/about',
        exact: true,
        component: lazy(() => import('./views/about'))
      }
    ]
  }
]

export default routes

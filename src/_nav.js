import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavTitle',
    anchor: 'Main',
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Discover',
    icon: <CIcon name="cil-cursor" customClasses="nav-icon" />,
    items: [],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Users',
    icon: <CIcon name="cil-notes" customClasses="nav-icon" />,
    items: [],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Documents',
    icon: <CIcon name="cil-star" customClasses="nav-icon" />,
    items: [],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Applications',
    icon: <CIcon name="cil-calculator" customClasses="nav-icon" />,
    items: [],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Pages',
    to: '/widgets',
    icon: <CIcon name="cil-bell" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Secondary',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Support Centre',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Inbox',
    to: '/theme/colors',
    icon: <CIcon name="cil-drop" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'File Manager',
    to: '/theme/typography',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Login',
    to: '/login',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Register',
    to: '/register',
  },
]

export default _nav

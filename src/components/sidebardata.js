import React from 'react';
import * as Css from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import * as RemixIcons from 'react-icons/ri';


export const sidebardata = [
  {
    title:'Landing',
    path: '/landing',
    icon: <FiIcons.FiHome/>,
    cName:'nav-text'
  },
  {
    title:'Profile',
    path: '/profile',
    icon: <Css.CgProfile/>,
    cName:'nav-text'
  },
  {
    title:'Compare',
    path: '/compare',
    icon: <RemixIcons.RiGasStationFill/>,
    cName:'nav-text'
  },
  {
    title:'AboutUs',
    path: '/aboutUs',
    icon: <RemixIcons.RiTeamLine/>,
    cName:'nav-text'
  },
]

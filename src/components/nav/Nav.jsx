import React from 'react'

const colorBorderNav = {borderBottom: 'solid 1px #f2f2f2'}

const Nav = () => {
  return (
    <div className="navbar" style={{ ...colorBorderNav, position: 'fixed', top: 0}}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">LucasFerdal</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Proyectos</a></li>
          <li><a>Skills</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
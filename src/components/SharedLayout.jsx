import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul className={css.navlist}>
              <li className={css.navitem}>
                <NavLink
                  className={({ isActive }) =>
                    `${css['navitem']}${isActive ? css.active : ''}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={css.navitem}>
                <NavLink
                  className={({ isActive }) =>
                    `${css['navitem']}${isActive ? css.active : ''}`
                  }
                  to="/movies"
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

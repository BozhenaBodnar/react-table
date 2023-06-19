import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  link: string;
  title: string;
};

export const PageNavLink: React.FC<Props> = ({ link, title }) => (
  <NavLink
    to={link}
    className={({ isActive }: { isActive: boolean }) => classNames(
      'navbar-item',
      { 'has-background-grey-lighter': isActive },
    )}
  >
    {title}
  </NavLink>
);

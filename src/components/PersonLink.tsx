import { FC } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Person } from '../types';

export type Props = {
  person: Person;
};

export const PersonLink: FC<Props> = ({ person }) => {
  const { name, sex, slug } = person;
  const isFemale = sex === 'f';
  const { search } = useLocation();

  return (
    <Link
      className={classNames(
        { 'has-text-danger': isFemale },
      )}
      to={{
        pathname: `../${slug}`,
        search,
      }}
    >
      {name}
    </Link>
  );
};

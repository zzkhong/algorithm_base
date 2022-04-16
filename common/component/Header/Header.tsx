import React from 'react';
import { Header as ManHeader } from '@mantine/core';

import styles from './Header.module.scss';
import Brand from '../Brand';

const Header: React.FC = () => {
  return (
    <ManHeader className={styles.header} height={60} p="sm">
      <Brand />
    </ManHeader>
  );
};

export default Header;

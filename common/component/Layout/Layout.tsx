import React from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import styles from './Layout.module.scss';

import Navbar from '../Navbar';
import Header from '../Header';

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <>
      <AppShell
        padding="md"
        navbar={<Navbar />}
        header={<Header />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <main className={styles.layout}>{children}</main>
      </AppShell>
    </>
  );
};

export default Layout;

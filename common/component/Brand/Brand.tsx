import React from 'react';
import {
  Group,
  ActionIcon,
  Box,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import { Moon, Paperclip, Sun } from 'tabler-icons-react';

import styles from './Brand.module.scss';

const Brand: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
      })}
    >
      <Group position="apart">
        <Text
          className={styles.brand}
          onClick={() => console.log('Home Page')}
          size="xl"
          weight="bold"
          color={colorScheme === 'light' ? 'gray' : 'white'}
        >
          <Paperclip
            size="16"
            color={colorScheme === 'light' ? 'gray' : 'white'}
          />{' '}
          Algorithm Base
        </Text>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        </ActionIcon>
      </Group>
    </Box>
  );
};

export default Brand;

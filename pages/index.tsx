import React from 'react';
import type { NextPage } from 'next';
import { animated, Spring } from 'react-spring';

import { Button, Divider, Group, Space, TextInput } from '@mantine/core';

import Layout from 'common/component/Layout';

import styles from 'styles/index.module.scss';

const Home: NextPage = () => {
  const [data, setData] = React.useState<number[]>([]);

  const generateSample = () => {
    let sample: number[] = [];

    for (let i = 0; i < 10; i++) {
      sample.push(Math.ceil(Math.random() * 100));
    }

    setData(sample);
  };

  const swapData = () => {};

  const bubbleSort = () => {};

  const Visualizer = () => {
    const total = data.reduce((d, acc) => d + acc, 0);

    return (
      <Group noWrap className={styles.content} position="center">
        {data.map((d, index) => (
          <Spring key={index} to={{ height: d * 2 + 20 }}>
            {(springStyles) => (
              <animated.div
                key={index}
                className={styles.block}
                style={springStyles}
              >
                {d}
              </animated.div>
            )}
          </Spring>
        ))}
      </Group>
    );
  };

  return (
    <Layout>
      <>
        <Visualizer />

        <Divider my="md" />

        <Group position="right">
          <Button variant="gradient">Bubble Sort</Button>
          <Button color="indigo" variant="filled" onClick={generateSample}>
            Generate Data
          </Button>
        </Group>
      </>
    </Layout>
  );
};

export default Home;

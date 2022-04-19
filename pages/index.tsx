import React from 'react';
import type { NextPage } from 'next';
import { animated, Spring } from 'react-spring';

import { Button, Divider, Group, Space, TextInput } from '@mantine/core';

import Layout from 'common/component/Layout';

import styles from 'styles/index.module.scss';

const Home: NextPage = () => {
  const [data, setData] = React.useState<number[]>([]);

  let inputRef = React.createRef<HTMLInputElement>();

  const handleReset = () => {
    setData([]);
  };

  const handleSample = () => {
    setData([3, 9, 8, 2, 5, 7]);
  };

  const handleAdd = () => {
    if (inputRef.current?.value) {
      let newData = [...data, parseInt(inputRef.current.value, 10)];
      setData(newData);

      inputRef?.current.value = '';
    }
  };

  const swapData = () => {};

  const bubbleSort = () => {};

  const Visualizer = () => {
    const total = data.reduce((d, acc) => d + acc, 0);

    return (
      <Group noWrap position="center" className={styles.content}>
        {data.map((d, index) => (
          <Spring key={index} to={{ height: 300 * (d / total) }}>
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
        <TextInput
          required
          ref={inputRef}
          type="number"
          label="Data"
          placeholder="Numbers separated by space"
        />

        <Space h="md" />
        <Group position="apart">
          <Button variant="gradient">Bubble Sort</Button>
          <Group>
            <Button color="red" variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button color="green" variant="outline" onClick={handleSample}>
              Sample
            </Button>
            <Button color="cyan" variant="gradient" onClick={handleAdd}>
              Add Data
            </Button>
          </Group>
        </Group>
      </>
    </Layout>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Field } from 'src/components/Field/Field';
import { Board } from 'src/utils/createField/Board';
import { useEffect, useRef, useState } from 'react';

const FIELD_SIZE = 4;
const DEFAULT_FIELD = new Board();
DEFAULT_FIELD.createBoard(FIELD_SIZE);
const indexArray: string[][] = [];

for (let x = 0; x < FIELD_SIZE; x++) {
  const temp: string[] = [];
  for (let y = 0; y < FIELD_SIZE; y++) {
    temp.push(`${x},${y}`);
  }
  indexArray.push(temp);
}

const Home: NextPage = () => {
  const ref = useRef();
  const [field, setField] = useState<number[][]>(DEFAULT_FIELD.getBoard());
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    const action = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowLeft': {
          DEFAULT_FIELD.toLeft();
          setField(DEFAULT_FIELD.getBoard());
          setChange(true);
          break;
        }
        case 'ArrowRight': {
          DEFAULT_FIELD.toRight();
          setField(DEFAULT_FIELD.getBoard());
          setChange(true);
          break;
        }
        case 'ArrowUp': {
          DEFAULT_FIELD.toTop();
          setField(DEFAULT_FIELD.getBoard());
          setChange(true);
          break;
        }
        case 'ArrowDown': {
          DEFAULT_FIELD.toBottom();
          setField(DEFAULT_FIELD.getBoard());
          setChange(true);
          break;
        }
        default:
          break;
      }
      setChange(false);
    };
    window.addEventListener('keydown', action);
  }, [ref]);

  return (
    <>
      <Head>
        <title>2048</title>
      </Head>
      <Field field={field} index={indexArray} />
    </>
  );
};

export default Home;

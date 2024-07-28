'use client';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <table border={1} style={{width:"400px", border:"1px solid #000", borderCollapse:"collapse"}}>
        <tr>
          <th colSpan={3}>
            {count}
          </th>
        </tr>
        <tr>
          <th>
            <button onClick={() => dispatch(increment())} className={styles.button} style={{cursor:"pointer"}}>
              Increment
            </button>
          </th>
          <th>
            <button onClick={() => dispatch(decrement())} className={styles.button} style={{cursor:"pointer"}}>
              Decrement
            </button>
          </th>
          <th>
            <button onClick={() => dispatch(incrementByAmount(2))} className={styles.button} style={{cursor:"pointer"}}>
              Increment by 2
            </button>
          </th>
        </tr>
      </table>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

    </main>
  )
}
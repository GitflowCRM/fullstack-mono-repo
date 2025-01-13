'use client';
import { NextTamaguiProvider } from '../NextTamaguiProvider';
import styles from './page.module.css';
import SharedButton from 'packages/ui/src/lib/button.shared';
import Todo from '../todo';
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <NextTamaguiProvider>
      <Todo />
    </NextTamaguiProvider>
  );
}

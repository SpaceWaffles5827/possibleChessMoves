import Board from '../comps/Board'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [boardData, setBoardData] = useState([[null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null],
                                              [null, null, null, null, null, null, null, null]]);

  return (
    <div className={styles.app}>
      <Board boardData={boardData}/>
    </div>
  )
}

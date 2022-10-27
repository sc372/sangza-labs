import { FC } from 'react'
import styles from './styles.module.css'

const Timeline: FC = () => {
  return (
    <div className={`${styles['timeline']}`}>
      <div className={`${styles['timeline__entry']}`}>
        <div className={`${styles['timeline__title']}`}>
          <h3>2014 - Present</h3>
          <p>Title, Company</p>
        </div>
        <div className={`${styles['timeline__body']}`}>
          <p>
            Voluptatibus veniam ea reprehenderit atque reiciendis non laborum
            adipisci ipsa pariatur omnis.
          </p>
          <ul>
            <li>Rerum sit libero possimus amet excepturi</li>
            <li>
              Exercitationem enim dolores sunt praesentium dolorum praesentium
            </li>
            <li>
              Modi aut dolores dignissimos sequi sit ut aliquid molestias
              deserunt illo
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles['timeline__entry']}`}>
        <div className={`${styles['timeline__title']}`}>
          <h3>2010 - Present</h3>
          <p>Title, Company</p>
        </div>
        <div className={`${styles['timeline__body']}`}>
          <p>
            Voluptatibus veniam ea reprehenderit atque reiciendis non laborum
            adipisci ipsa pariatur omnis.
          </p>
          <ul>
            <li>Rerum sit libero possimus amet excepturi</li>
            <li>
              Exercitationem enim dolores sunt praesentium dolorum praesentium
            </li>
            <li>
              Modi aut dolores dignissimos sequi sit ut aliquid molestias
              deserunt illo
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Timeline

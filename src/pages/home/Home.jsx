import styles from './Home.module.css';

import Banner from '../../components/banner/Banner';

function Home() {

  return (
    <main className={styles.Home}>
      <h1>My Budget Planner</h1>
      <section className={styles['banner-container']}>
        <Banner >
          <div className={styles['Banner']}>
          <p>Budget: $2000</p>
          <button>Edit</button>
          </div>

        </Banner>
        <Banner>
        <div className={styles['Banner']}>
          <p>Remaning: $1040</p>
          </div>
        </Banner>
        <Banner>
        <div className={styles['Banner']}>
          <p>Spent so far: $960</p>
          </div>
        </Banner>
      </section>
    </main>
  );
}

export default Home;

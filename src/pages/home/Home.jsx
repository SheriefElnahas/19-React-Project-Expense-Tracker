import styles from './Home.module.css';

import Banner from '../../components/banner/Banner';

function Home() {
  return (
    <main className={styles.Home}>
      <h1>My Budget Planner</h1>
      <section className="banner-container">
      <Banner />
      <Banner />
      <Banner />
      </section>
   
    </main>
  )
}

export default Home
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { ContactUs } from './components/ContactUs';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AboutMe />
        <Portfolio />
        <Services />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;

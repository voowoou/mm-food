import styles from './styles.module.sass';

export default function HomePage() {
  return (
    <>
      <a href="" className={styles.card}>
        <h2>WHAT IS IT</h2>
        <div>
          <p>This app was created as a pet project to discover new recipes.</p>
          <p>
            It uses Spoonacular Food API and Google Programmable Search Engine to access the recipe
            database. Check a GitHub repository here.
          </p>
        </div>
      </a>
      <a href="" className={styles.card}>
        <h2>JAM SESSION</h2>
        <div>
          <p>
            It is a main feature that allows you to find recipes by your request. You can specify
            cuisine, nutrition, intolerances, etc.
          </p>
        </div>
      </a>
      <a href="" className={styles.card}>
        <h2>À LA ALBUM</h2>
        <div>
          <p>Here you can try chef's menu matched with classic long plays.</p>
        </div>
      </a>
      <a href="" className={styles.card}>
        <h2>À LA CARTE</h2>
        <div>
          <p>Menu of the day.</p>
        </div>
      </a>
    </>
  );
}

import styles from "../styles/News.module.css";

const SingleSlide = ({ data, index }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.topBar}>
        <img
          src={
            "https://avatars.dicebear.com/api/micah/" + data.address + ".svg"
          }
        />
        <div className={styles.heading}>
          <p>#{data.address}</p>
          <h2>{data.title}</h2>
        </div>
      </div>
      <div className={styles.content}>
        <p>{data.content}</p>
      </div>
      <div className={styles.footer}>
        <img src="./like.png" />
        <img src="./support.png" />
      </div>
    </div>
  );
};
export default SingleSlide;

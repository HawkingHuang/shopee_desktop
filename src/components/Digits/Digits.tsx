import styles from "./Digits.module.scss";
const numberSvgs = Object.entries(
  import.meta.glob<string>("@/assets/images/limited_time/number_icons/*.svg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/\d+/)![0]);
    const numB = parseInt(b.match(/\d+/)![0]);
    return numA - numB;
  })
  .map(([_, img]) => img);

function Digits({ value }: { value: number }) {
  return (
    <div className={styles.digit}>
      <div className={styles.digitList} style={{ transform: `translateY(${value * 20}px)` }}>
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((n) => (
          <span key={n}>
            <img src={numberSvgs[n]} alt={String(n)} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Digits;

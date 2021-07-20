import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const colorOfStatistic = [styles.blue, styles.purple, styles.red, styles.green];

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title ? <h2 className={styles.title}>{title}</h2> : null}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }, i) => (
        <li
          className={`${styles.item} ${
            colorOfStatistic[i - Math.floor(i / 4) * 4]
          }`}
          key={id}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;

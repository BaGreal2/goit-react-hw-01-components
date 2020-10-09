import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

function Transactions({ items }) {
  return (
    <table className={styles.transactionsHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(item => (
          <tr key={item.id} className={styles.tbodyPart}>
            <td className={styles.tbodyPart1}>{item.type}</td>
            <td className={styles.tbodyPart1}>{item.amount}</td>
            <td className={styles.tbodyPart1}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

export default Transactions;

import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionsHistory}>
            <thead>
                <tr>
                <th className={css.transactionsTitle}>Type</th>
                <th className={css.transactionsTitle}>Amount</th>
                <th className={css.transactionsTitle}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.transactionsType}>{item.type}</td>
                        <td className={css.transactionsAmount}>{item.amount}</td>
                        <td className={css.transactionsCurrency}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
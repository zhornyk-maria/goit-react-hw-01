
const TransactionHistory = ({ items }) => {
    return (
        <table className="transactionsHistory">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
                <tr>
                <td>Withdrawal</td>
                <td>85</td>
                <td>USD</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TransactionHistory;
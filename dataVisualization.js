

(function() {
    const dataX = [
      { branch: "Surabaya", posting_date: "2024-01-01", visitors: 100 },
      { branch: "Surabaya", posting_date: "2024-01-02", visitors: 80 },
      { branch: "Surabaya", posting_date: "2024-01-03", visitors: 25 },
      { branch: "Jakarta", posting_date: "2024-01-01", visitors: 200 },
      { branch: "Jakarta", posting_date: "2024-01-02", visitors: 235 }
    ];

    const dataY = [
      { branch: "Surabaya", posting_date: "2024-01-01", total_transactions: 35 },
      { branch: "Surabaya", posting_date: "2024-01-02", total_transactions: 24 },
      { branch: "Jakarta", posting_date: "2024-01-01", total_transactions: 135 }
    ];

    function combineData(dataX, dataY) {
      const combined = [];

      dataX.forEach(itemX => {
        const branch = itemX.branch;
        const date = itemX.posting_date;
        const visitors = itemX.visitors;

        const itemY = dataY.find(y => y.branch === branch && y.posting_date === date);
        const totalTransactions = itemY ? itemY.total_transactions : 0;
        const ratio = visitors ? totalTransactions / visitors : 0;

        combined.push({
          branch,
          posting_date: date,
          visitors,
          total_transactions: totalTransactions,
          ratio: ratio.toFixed(2)
        });
      });

      return combined;
    }

    const result = combineData(dataX, dataY);
    console.log( result);

    window.visualizeData = () => {
      console.log(result);
    };
})();

  
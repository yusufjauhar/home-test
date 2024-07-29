(function() {


const dataGroup = [
    { branch: "Surabaya", posting_date: "2024-01-01" },
    { branch: "Surabaya", posting_date: "2024-01-02" },
    { branch: "Surabaya", posting_date: "2024-01-03" },
    { branch: "Jakarta", posting_date: "2024-01-01" },
    { branch: "Jakarta", posting_date: "2024-01-03" }
  ];
  
  const dataRaw = [
    { branch: "Surabaya", posting_date: "2024-01-01", customer: "CUST-001", grand_total: 100000 },
    { branch: "Surabaya", posting_date: "2024-01-01", customer: "CUST-001", grand_total: 560000 },
    { branch: "Jakarta", posting_date: "2024-01-01", customer: "CUST-001", grand_total: 720000 },
    { branch: "Surabaya", posting_date: "2024-01-02", customer: "CUST-001", grand_total: 340000 },
    { branch: "Surabaya", posting_date: "2024-01-02", customer: "CUST-001", grand_total: 568000 },
    { branch: "Surabaya", posting_date: "2024-01-02", customer: "CUST-001", grand_total: 142000 },
    { branch: "Surabaya", posting_date: "2024-01-02", customer: "CUST-001", grand_total: 256000 },
    { branch: "Surabaya", posting_date: "2024-01-03", customer: "CUST-001", grand_total: 234500 },
    { branch: "Surabaya", posting_date: "2024-01-03", customer: "CUST-001", grand_total: 345600 },
    { branch: "Jakarta", posting_date: "2024-01-03", customer: "CUST-001", grand_total: 125000 },
    { branch: "Jakarta", posting_date: "2024-01-03", customer: "CUST-001", grand_total: 70000 },
    { branch: "Jakarta", posting_date: "2024-01-03", customer: "CUST-001", grand_total: 86000 }
  ];
  
  function processData(dataGroup, dataRaw) {
    const result = [];
    
    const branchTotals = dataRaw.reduce((acc, item) => {
      const branchKey = item.branch;
      const dateKey = `${item.branch}-${item.posting_date}`;
  
      acc[branchKey] = (acc[branchKey] || 0) + item.grand_total;
      acc[dateKey] = (acc[dateKey] || 0) + item.grand_total;
  
      return acc;
    }, {});
  
    const branchGroups = dataGroup.reduce((acc, item) => {
      const branchKey = item.branch;
      const dateKey = `${item.branch}-${item.posting_date}`;
  
      if (!acc[branchKey]) {
        acc[branchKey] = {
          indent: 0,
          branch: item.branch,
          grand_total: branchTotals[branchKey],
          children: []
        };
      }
  
      acc[branchKey].children.push({
        indent: 1,
        posting_date: item.posting_date,
        grand_total: branchTotals[dateKey],
        children: dataRaw.filter(data => data.branch === item.branch && data.posting_date === item.posting_date).map(data => ({
          ...data,
          indent: 2
        }))
      });
  
      return acc;
    }, {});
  
    Object.values(branchGroups).forEach(branch => {
      result.push({
        indent: branch.indent,
        branch: branch.branch,
        grand_total: branch.grand_total
      });
      
      branch.children.forEach(date => {
        result.push({
          indent: date.indent,
          posting_date: date.posting_date,
          grand_total: date.grand_total
        });
  
        date.children.forEach(customer => {
          result.push(customer);
        });
      });
    });
  
    return result;
  }
  
  const result = processData(dataGroup, dataRaw);
  console.log(result);	
  
  window.processData = processData;

})();
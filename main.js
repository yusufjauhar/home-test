document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button1').addEventListener('click', handleButton1Click);
    document.getElementById('button2').addEventListener('click', handleButton2Click);
});

function handleButton1Click() {
    try {
        if (typeof processData === 'function') {
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

            const result = processData(dataGroup, dataRaw); 
            console.log("Hasil dari dataMappingA:", result);

            // displayResult(result);
        } else {
            console.error("Fungsi processData tidak ditemukan.");
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

function handleButton2Click() {
    try {
        if (typeof visualizeData === 'function') {
            console.log("Hasil dari visualizeData");
            visualizeData(); 
        } else {
            console.error("Fungsi visualizeData tidak ditemukan.");
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

function displayResult(data) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = JSON.stringify(data, null, 2); 
}

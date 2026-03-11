// database_test.js

const rawLawyerData = [
    { prefix: "นาย", firstName: "ทดสอบ", lastName: "ลำดับหนึ่ง" },
    { prefix: "นาย", firstName: "ทดสอบ", lastName: "ลำดับสอง" },
    { prefix: "นาย", firstName: "ชื่อจริง", lastName: "ลำดับสาม" },
    { prefix: "นาย", firstName: "ชื่อ", lastName: "ลำดับสี่" }
];

// This function processes the raw data, adds an ID, and auto-generates the Full Name
function initializeDatabase() {
    let lawyers = rawLawyerData.map((lawyer, index) => {
        return {
            id: `L${String(index + 1).padStart(3, '0')}`, // Generates L001, L002...
            prefix: lawyer.prefix,
            firstName: lawyer.firstName,
            lastName: lawyer.lastName,
            fullName: `${lawyer.prefix}${lawyer.firstName} ${lawyer.lastName}`,
            nameWithoutPrefix: `${lawyer.firstName} ${lawyer.lastName}` // Based on Excel file, sometimes prefix is missing
        };
    });

    // Save to Browser's Local Storage so the app can access it anywhere
    localStorage.setItem('lawyerDatabase', JSON.stringify(lawyers));
    return lawyers;
}

// This function is for autocomplete
function getLawyerList() {
    return rawLawyerData.map(l => ({
        fullName: `${l.firstName} ${l.lastName}`
    }));
}

// Fetch the database
function getLawyers() {
    const data = localStorage.getItem('lawyerDatabase');
    if (data) {
        return JSON.parse(data);
    } else {
        return initializeDatabase();
    }
}
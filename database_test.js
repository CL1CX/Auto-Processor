// database_test.js

const rawLawyerData = [
    { prefix: "นาย", firstName: "ทดสอบ", lastName: "ลำดับหนึ่ง" },
    { prefix: "นาย", firstName: "ทดสอบ", lastName: "ลำดับสอง" },
    { prefix: "นาย", firstName: "ชื่อจริง", lastName: "ลำดับสาม" },
    { prefix: "นาย", firstName: "ชื่อ", lastName: "ลำดับสี่" }
];

// This function is for autocomplete
function getLawyerList() {
    return rawLawyerData.map(l => ({
        fullName: `${l.firstName} ${l.lastName}`
    }));
}
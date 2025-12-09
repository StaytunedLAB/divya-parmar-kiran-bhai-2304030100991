function toMinutes(timeStr) {
    if (!timeStr) return null;
    const parts = timeStr.split(":");
    if (parts.length !== 2) return null;

    const h = Number(parts[0]);
    const m = Number(parts[1]);

    return (isNaN(h) || isNaN(m)) ? null : h * 60 + m;
}

function processAttendance(att) {
    const {
        employeeId,
        date,
        checkIn,
        checkOut,
        breakStart,
        breakEnd,
        overtimeApproved
    } = att;

    let status = "complete";
    let totalWorkingMinutes = 0;
    let overtimeMinutes = 0;
    let note = "";
    let errorMessage = "";

    try {
        
        const inMin = toMinutes(checkIn);
        const outMin = toMinutes(checkOut);

        if (inMin === null || outMin === null) {
            status = "incomplete";
            note = "Missing or invalid check-in/check-out";
            return {
                employeeId,
                date,
                status,
                totalWorkingMinutes: 0,
                overtimeMinutes: 0,
                note,
                errorMessage
            };
        }

        
        let breakDuration = 0;
        if (breakStart) {
            const bStart = toMinutes(breakStart);
            const bEnd = toMinutes(breakEnd);

            if (bStart !== null && bEnd !== null) {
                breakDuration = bEnd - bStart;
                if (breakDuration < 0) breakDuration = 0;
            } else {
                
                breakDuration = 30;
            }
        }

        
        totalWorkingMinutes = outMin - inMin - breakDuration;

        if (totalWorkingMinutes < 0) {
            status = "invalid";
            totalWorkingMinutes = 0;
            note = "Negative working duration";
        }

    
        if (overtimeApproved && totalWorkingMinutes > 480) {
            overtimeMinutes = totalWorkingMinutes - 480;
        }

    } catch (err) {
        status = "error";
        totalWorkingMinutes = 0;
        overtimeMinutes = 0;
        errorMessage = err.message;
        note = "An unexpected system error occurred.";
    } finally {
        console.log("\n📌 Attendance processed successfully (finally block executed)");
    }

    return {
        employeeId,
        date,
        status,
        totalWorkingMinutes,
        overtimeMinutes,
        note,
        errorMessage
    };
}



const sampleAttendance = {
    employeeId: "EMP102",
    date: "2025-12-08",
    checkIn: "09:00",
    checkOut: "18:15",
    breakStart: "13:00",
    breakEnd: null,        
    overtimeApproved: true
};


const result = processAttendance(sampleAttendance);
console.log("\n=== FINAL ATTENDANCE SUMMARY ===");
console.table(result);



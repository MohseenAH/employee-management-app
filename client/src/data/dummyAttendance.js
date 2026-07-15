const dummyAttendance = [
  // John Anderson (1001)
  { employeeId: 1001, date: "2026-07-01", status: "Present" },
  { employeeId: 1001, date: "2026-07-02", status: "Present" },
  { employeeId: 1001, date: "2026-07-03", status: "Present" },
  { employeeId: 1001, date: "2026-07-04", status: "Absent" },
  { employeeId: 1001, date: "2026-07-05", status: "Present" },

  // Sarah Williams (1002)
  { employeeId: 1002, date: "2026-07-01", status: "Present" },
  { employeeId: 1002, date: "2026-07-02", status: "Leave" },
  { employeeId: 1002, date: "2026-07-03", status: "Present" },
  { employeeId: 1002, date: "2026-07-04", status: "Present" },
  { employeeId: 1002, date: "2026-07-05", status: "Present" },

  // Michael Brown (1003)
  { employeeId: 1003, date: "2026-07-01", status: "Absent" },
  { employeeId: 1003, date: "2026-07-02", status: "Present" },
  { employeeId: 1003, date: "2026-07-03", status: "Present" },
  { employeeId: 1003, date: "2026-07-04", status: "Present" },
  { employeeId: 1003, date: "2026-07-05", status: "Leave" },

  // Emily Davis (1004)
  { employeeId: 1004, date: "2026-07-01", status: "Leave" },
  { employeeId: 1004, date: "2026-07-02", status: "Leave" },
  { employeeId: 1004, date: "2026-07-03", status: "Present" },
  { employeeId: 1004, date: "2026-07-04", status: "Present" },
  { employeeId: 1004, date: "2026-07-05", status: "Present" },

  // David Wilson (1005)
  { employeeId: 1005, date: "2026-07-01", status: "Present" },
  { employeeId: 1005, date: "2026-07-02", status: "Present" },
  { employeeId: 1005, date: "2026-07-03", status: "Present" },
  { employeeId: 1005, date: "2026-07-04", status: "Present" },
  { employeeId: 1005, date: "2026-07-05", status: "Present" },

  // Sophia Taylor (1006)
  { employeeId: 1006, date: "2026-07-01", status: "Absent" },
  { employeeId: 1006, date: "2026-07-02", status: "Absent" },
  { employeeId: 1006, date: "2026-07-03", status: "Present" },
  { employeeId: 1006, date: "2026-07-04", status: "Present" },
  { employeeId: 1006, date: "2026-07-05", status: "Present" },

  // James Moore (1007)
  { employeeId: 1007, date: "2026-07-01", status: "Present" },
  { employeeId: 1007, date: "2026-07-02", status: "Present" },
  { employeeId: 1007, date: "2026-07-03", status: "Leave" },
  { employeeId: 1007, date: "2026-07-04", status: "Present" },
  { employeeId: 1007, date: "2026-07-05", status: "Present" },

  // Olivia Martin (1008)
  { employeeId: 1008, date: "2026-07-01", status: "Present" },
  { employeeId: 1008, date: "2026-07-02", status: "Present" },
  { employeeId: 1008, date: "2026-07-03", status: "Absent" },
  { employeeId: 1008, date: "2026-07-04", status: "Present" },
  { employeeId: 1008, date: "2026-07-05", status: "Present" },

  // Daniel Thomas (1009)
  { employeeId: 1009, date: "2026-07-01", status: "Present" },
  { employeeId: 1009, date: "2026-07-02", status: "Present" },
  { employeeId: 1009, date: "2026-07-03", status: "Present" },
  { employeeId: 1009, date: "2026-07-04", status: "Leave" },
  { employeeId: 1009, date: "2026-07-05", status: "Present" },

  // Emma Garcia (1010)
  { employeeId: 1010, date: "2026-07-01", status: "Present" },
  { employeeId: 1010, date: "2026-07-02", status: "Absent" },
  { employeeId: 1010, date: "2026-07-03", status: "Absent" },
  { employeeId: 1010, date: "2026-07-04", status: "Present" },
  { employeeId: 1010, date: "2026-07-05", status: "Leave" },

  // William Martinez (1011)
  { employeeId: 1011, date: "2026-07-01", status: "Present" },
  { employeeId: 1011, date: "2026-07-02", status: "Present" },
  { employeeId: 1011, date: "2026-07-03", status: "Present" },
  { employeeId: 1011, date: "2026-07-04", status: "Present" },
  { employeeId: 1011, date: "2026-07-05", status: "Absent" },

  // Ava Rodriguez (1012)
  { employeeId: 1012, date: "2026-07-01", status: "Present" },
  { employeeId: 1012, date: "2026-07-02", status: "Leave" },
  { employeeId: 1012, date: "2026-07-03", status: "Leave" },
  { employeeId: 1012, date: "2026-07-04", status: "Present" },
  { employeeId: 1012, date: "2026-07-05", status: "Present" },

  // Benjamin Clark (1013)
  { employeeId: 1013, date: "2026-07-01", status: "Present" },
  { employeeId: 1013, date: "2026-07-02", status: "Present" },
  { employeeId: 1013, date: "2026-07-03", status: "Present" },
  { employeeId: 1013, date: "2026-07-04", status: "Present" },
  { employeeId: 1013, date: "2026-07-05", status: "Present" },

  // Charlotte Lewis (1014)
  { employeeId: 1014, date: "2026-07-01", status: "Present" },
  { employeeId: 1014, date: "2026-07-02", status: "Absent" },
  { employeeId: 1014, date: "2026-07-03", status: "Present" },
  { employeeId: 1014, date: "2026-07-04", status: "Present" },
  { employeeId: 1014, date: "2026-07-05", status: "Present" },

  // Henry Walker (1015)
  { employeeId: 1015, date: "2026-07-01", status: "Leave" },
  { employeeId: 1015, date: "2026-07-02", status: "Present" },
  { employeeId: 1015, date: "2026-07-03", status: "Absent" },
  { employeeId: 1015, date: "2026-07-04", status: "Present" },
  { employeeId: 1015, date: "2026-07-05", status: "Present" },
];

export default dummyAttendance;
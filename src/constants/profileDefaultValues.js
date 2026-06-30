const profileDefaultValues = {
  fullName: "",
  mobileNumber: "",
  dateOfBirth: "",
  gender: "",
  profileImage: null,

  location: {
    country: "India",
    state: "",
    district: "",
    city: "",
    pinCode: "",
  },

  education: {
    institution: "",
    studentId: "",
    classGrade: "",
    course: "",
  },

  emergencyContact: {
    contactName: "",
    relationship: "",
    bloodGroup: "",
    emergencyNumber: "",
    medicalConditions: "",
  },

  preferences: {
    language: "English",
    governmentAlerts: true,
    weatherReports: true,
    schoolBroadcasts: true,
    emergencyDrills: false,
  },
};

export default profileDefaultValues;
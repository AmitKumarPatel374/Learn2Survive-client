const mapUserToProfileForm = (user) => ({
  fullName: user.fullName || "",
  mobileNumber: user.mobileNumber || "",
  dateOfBirth: user.dateOfBirth?.split("T")[0] || "",
  gender: user.gender || "",

  profileImage: null,

  location: {
    country: user.location?.country || "India",
    state: user.location?.state || "",
    district: user.location?.district || "",
    city: user.location?.city || "",
    pinCode: user.location?.pinCode || "",
  },

  education: {
    institution: user.education?.institution || "",
    studentId: user.education?.studentId || "",
    classGrade: user.education?.classGrade || "",
    course: user.education?.course || "",
  },

  emergencyContact: {
    contactName: user.emergencyContact?.contactName || "",
    relationship: user.emergencyContact?.relationship || "",
    bloodGroup: user.emergencyContact?.bloodGroup || "",
    emergencyNumber: user.emergencyContact?.emergencyNumber || "",
    medicalConditions: user.emergencyContact?.medicalConditions || "",
  },

  preferences: {
    language: user.preferences?.language || "English",
    ...user.preferences?.notifications,
  },
});

export default mapUserToProfileForm;
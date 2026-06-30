const buildProfileFormData = (data) => {
  const formData = new FormData();

  formData.append("fullName", data.fullName);
  formData.append("mobileNumber", data.mobileNumber);
  formData.append("dateOfBirth", data.dateOfBirth);
  formData.append("gender", data.gender);

  formData.append(
    "location",
    JSON.stringify(data.location)
  );

  formData.append(
    "education",
    JSON.stringify(data.education)
  );

  formData.append(
    "emergencyContact",
    JSON.stringify(data.emergencyContact)
  );

  formData.append(
    "preferences",
    JSON.stringify(data.preferences)
  );

  if (data.profileImage?.[0]) {
    formData.append(
      "profileImage",
      data.profileImage[0]
    );
  }

  return formData;
};

export default buildProfileFormData;
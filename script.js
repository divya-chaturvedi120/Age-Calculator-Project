// Using Luxon for date handling
const DateTime = luxon.DateTime;

document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");

  if (!dob) {
    resultDiv.textContent = " Please select your date of birth.";
    return;
  }

  const birthDate = DateTime.fromISO(dob);
  const now = DateTime.now();

  if (birthDate > now) {
    resultDiv.textContent = " Date of birth cannot be in the future!";
    return;
  }

  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  resultDiv.innerHTML = `
    🎉 You are <span style="color:#2575fc">${Math.floor(diff.years)}</span> years, 
    <span style="color:#2575fc">${Math.floor(diff.months)}</span> months, and 
    <span style="color:#2575fc">${Math.floor(diff.days)}</span> days old.
  `;
});

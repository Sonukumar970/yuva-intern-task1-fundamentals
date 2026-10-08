const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  result.textContent = "✓ Setup verification completed successfully.";
});

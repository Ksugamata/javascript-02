document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submitBtn");
  button.addEventListener("click", validateName);
});

function validateName() {
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("message");

  if (name.length < 3) {
    message.textContent = "名前は3文字以上で入力してください";
    message.className = "message";
  } else if (name.length > 5) {
    message.textContent = "名前は5文字以下で入力してください";
    message.className = "message";
  } else {
    message.textContent = "送信されました";
    message.className = "message success";
  }
}

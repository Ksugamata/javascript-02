const add = document.addEventListener.bind(document);
const byId = (id) => document.getElementById(id);

add("DOMContentLoaded", () => {
  const btn = byId("submitBtn");
  const nameInput = byId("nameInput");
  const msg = byId("message");

  btn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name.length < 3) {
      msg.textContent = "名前は3文字以上で入力してください";
      msg.className = "message";
    } else if (name.length > 5) {
      msg.textContent = "名前は5文字以下で入力してください";
      msg.className = "message";
    } else {
      msg.textContent = "送信されました";
      msg.className = "message success";
    }
  });
});

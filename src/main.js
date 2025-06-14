import { sendLineMessage } from "./sendLine.js";
import { initThreeScene } from "./components/ThreeScene.js";


document.getElementById("lineForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const message = form.message.value;

  const success = await sendLineMessage(title, message);

  if (success) {
    document.getElementById("result").textContent = "✅ 送信成功！";
    initThreeScene();
  } else {
    document.getElementById("result").textContent = "❌ 送信失敗！";
  }
});

import { sendLineMessage } from "./sendLine.js";
import { initThreeScene } from "./components/ThreeScene.js";

document.getElementById("lineForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const message = form.message.value.trim();

  if (!message) {
    document.getElementById("result").textContent = "⚠ メッセージが空です";
    return;
  }

  const success = await sendLineMessage(message);

  if (success) {
    document.getElementById("result").textContent = "✅ 送信成功！";
    initThreeScene();
  } else {
    document.getElementById("result").textContent = "❌ 送信失敗！";
  }
});

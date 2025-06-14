const LINE_TOKEN =
  "WsgLYFuMSsXFxlWxgygRIEZ4rFO3RLo5YuoyHsatIIG2zXuxVJQvGrI+KxqZ+2RhhFLpOrDY25E8gNtu/g455rQHSrDlnN/OJenreBG1r2EyBOIcEPYtEmYWBD+bS7y6Dp9+ChvCFSisCVRNYthKCgdB04t89/1O/w1cDnyilFU=";
const USER_ID = "U8f80f8b94450a0cfe1089ad8c7d65c28";

document.getElementById("lineForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const message = form.message.value.trim(); // ← 空白削除の保険

  if (!message) {
    document.getElementById("result").textContent = "⚠ メッセージが空です";
    return;
  }

  const payload = {
    to: USER_ID,
    messages: [
      {
        type: "text",
        text: message,
      },
    ],
  };

  try {
    const response = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LINE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = document.getElementById("result");

    if (response.ok) {
      result.textContent = "✅ 送信成功！";
      // Three.js アニメーション呼び出し（存在するなら）
      if (typeof initThreeScene === "function") {
        initThreeScene();
      }
    } else {
      const error = await response.json();
      result.textContent = `❌ 失敗: ${JSON.stringify(error)}`;
    }
  } catch (err) {
    console.error(err);
    document.getElementById("result").textContent = "❌ ネットワークエラー";
  }
});

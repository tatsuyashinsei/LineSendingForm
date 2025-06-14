const LINE_TOKEN =
  "WsgLYFuMSsXFxlWxgygRIEZ4rFO3RLo5YuoyHsatIIG2zXuxVJQvGrI+KxqZ+2RhhFLpOrDY25E8gNtu/g455rQHSrDlnN/OJenreBG1r2EyBOIcEPYtEmYWBD+bS7y6Dp9+ChvCFSisCVRNYthKCgdB04t89/1O/w1cDnyilFU=";
const USER_ID = "U8f80f8b94450a0cfe1089ad8c7d65c28";

export async function sendLineMessage(title, message) {
  const payload = {
    to: USER_ID,
    messages: [{ type: "text", text: `【${title}】\n${message}` }],
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

    if (response.ok) {
      return true;
    } else {
      const error = await response.json();
      console.error("送信失敗:", error);
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

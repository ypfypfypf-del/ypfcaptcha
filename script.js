// CAPTCHA画像のURL（Geminiで生成）
const captchaImageUrl = "captcha.png"; // 仮のURL

// LinktreeとInstagramのURL
const linktreeUrl = "https://linktr.ee/yourpeacefulfriend";
const instagramUrl = "https://www.instagram.com/rekkoindustrial_jp?igsh=MTAzcHFkdmQyZWF4MA%3D%3D&utm_source=qr";

// CAPTCHA画像、入力欄、ボタン、メッセージエリアの要素を取得
const captchaImage = document.getElementById("captchaImage");
const captchaInput = document.getElementById("captchaInput");
const continueButton = document.getElementById("continueButton");
const messageArea = document.getElementById("messageArea");

// CAPTCHA画像を読み込む
captchaImage.src = captchaImageUrl;

// 入力欄の初期表示と消去処理
captchaInput.addEventListener("focus", () => {
  if (captchaInput.placeholder === "type the text") {
    captchaInput.placeholder = "";
  }
});

captchaInput.addEventListener("blur", () => {
  if (captchaInput.value === "") {
    captchaInput.placeholder = "type the text";
  }
});

// "continue"ボタンの文字切り替え処理
continueButton.addEventListener("click", () => {
  if (continueButton.textContent === "continue") {
    continueButton.textContent = "YPF!";
    // 2.5秒後にリダイレクト
    setTimeout(() => {
      window.location.href = linktreeUrl;
    }, 2500);
  } else {
    window.location.href = linktreeUrl;
  }
});

// 入力内容の判定処理と隠しメッセージの表示処理
captchaInput.addEventListener("input", () => {
  const inputValue = captchaInput.value.toLowerCase();
  if (inputValue === "your peaceful friend") {
    messageArea.textContent = "Wow, you are my best fan that you even remember my name! Thanks for all your support 🫶 Share on social media that you found this hidden feature!";
  } else if (inputValue === "rekko") {
    window.location.href = instagramUrl;
  } else {
    messageArea.textContent = "";
  }
});

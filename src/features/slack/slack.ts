export function sendSlackMessage(text: string) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (url) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ text: text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((text) => console.log(text))
      .catch((error) => console.error("Error:", error));
  }
}

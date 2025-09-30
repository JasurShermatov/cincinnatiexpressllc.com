type Req = any;
type Res = any;

async function readBody(req: Req): Promise<any> {
  if (req.body) return req.body;
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
    return;
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatIdsCsv = process.env.TELEGRAM_CHAT_IDS; // comma-separated

  if (!botToken || !chatIdsCsv) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Server not configured for Telegram" }));
    return;
  }

  const body = await readBody(req);
  const { name = "", email = "", phone = "", message = "" } = body || {};

  const text =
    `New contact message:%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Email: ${encodeURIComponent(email)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A%0A` +
    `Message:%0A${encodeURIComponent(message)}`;

  const chatIds = chatIdsCsv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  try {
    const urlBase = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const results = await Promise.all(
      chatIds.map((chat_id) =>
        fetch(
          `${urlBase}?chat_id=${encodeURIComponent(
            chat_id
          )}&text=${text}&disable_web_page_preview=true`,
          {
            method: "GET",
          }
        ).then(async (r) => ({
          ok: r.ok,
          status: r.status,
          body: await r.text(),
        }))
      )
    );

    const anyFail = results.some((r) => !r.ok);
    if (anyFail) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          error: "Failed to deliver to one or more recipients",
          results,
        })
      );
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Unexpected server error" }));
  }
}

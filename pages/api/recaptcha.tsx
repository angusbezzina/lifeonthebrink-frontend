export default async function handler(req: any, res: any) {
  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body["g-recaptcha-response"]}`;
  return fetch(VERIFY_URL, { method: "POST" })
    .then((res) => res.json())
    .then((json) => res.send(json));
}
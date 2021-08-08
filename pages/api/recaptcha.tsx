export default async function handler(req: any, res: any) {
  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body["g-recaptcha-response"]}`;
  return fetch(VERIFY_URL, { method: "POST" })
    .then((res) => res.json())
    .then((json) => res.send(json));
}

// Localhost will not work by default, need to add it to the list of Whitelisted domains via the ReCaptcha Admin panel
// Next steps are to handle UI and test responses
// Try to set this up, then work on deploying the backend to AWS
// Finish this project, create a starter project for a wordpress backend-driven project
// Get AlexanderBezzina.com live
// Build a portable Router with Raspberry Pi and Node.js (Complete the NodeJS course)
// Create an AR business card
// Complete the Testing courses, GraphQL and review Typescript  
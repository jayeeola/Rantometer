
export default async function handler(req, res) {
  const { rant } = req.body;

  // Simple fake logic for demo purposes
  const intensity = Math.min(100, Math.floor(Math.random() * 100));

  // Simulated creative responses
  const responses = [
    "Whew! That’s some serious steam you’re letting off.",
    "Totally get it. That one’s worth ranting over!",
    "Take a deep breath... in and out. Better?",
    "Yikes. That one stings. Let it out!",
    "Rant received. You’re not alone!"
  ];

  const response = responses[Math.floor(Math.random() * responses.length)];

  res.status(200).json({ intensity, response });
}

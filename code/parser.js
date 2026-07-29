const raw = $input.first().json.output || "";

const clean = raw
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const parsed = JSON.parse(clean);

return [
  {
    json: {
      intent: parsed.intent || "",
      urgency: parsed.urgency || "",
      sentiment: parsed.sentiment || "",
      should_escalate: parsed.should_escalate || false,
      short_summary: parsed.short_summary || "",
      reply: parsed.reply || ""
    }
  }
];

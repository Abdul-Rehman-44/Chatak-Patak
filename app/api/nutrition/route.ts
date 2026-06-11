import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { ingredients } = await req.json();

    const prompt = `
You are a witty, health-conscious AI nutritionist for a Lahore-based food truck called Chatak Patak (popular with DHA crowd).
A user has built a custom bowl with the following ingredients:
${ingredients.join(", ")}

Estimate the rough nutritional breakdown for a standard food-truck serving size of this bowl.

Respond ONLY with a valid JSON object in the following format:
{
  "calories": 450,
  "protein": "15g",
  "carbs": "40g",
  "fats": "20g",
  "message": "A fun, short (2 sentences max) message about this bowl's health profile, using terms the health-conscious DHA crowd would appreciate (e.g. 'macros', 'clean eating', 'cheat meal')."
}
`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const responseContent = completion.choices[0]?.message?.content || "{}";
    const result = JSON.parse(responseContent);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error generating nutrition info:", error);
    return NextResponse.json(
      { error: "Failed to generate nutrition info" },
      { status: 500 }
    );
  }
}

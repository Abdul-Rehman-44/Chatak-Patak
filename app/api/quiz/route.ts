import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";
import { products } from "../../lib/products";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    const prompt = `
You are a fun, witty AI for a Lahore-based food truck called Chatak Patak (popular with UCP students).
A user has just taken a personality quiz with the following answers:
${answers.map((a: any, i: number) => `Q${i+1}: ${a.question}\nA: ${a.answer}`).join("\n")}

Based on these answers, assign them one of the following menu items that best matches their personality vibe.

Available Menu Items:
${products.filter(p => p.category === 'bowls').map(p => `- ${p.name} (ID: ${p.id}): ${p.description}`).join("\n")}

Respond ONLY with a valid JSON object in the following format:
{
  "productId": "the-id-of-the-product",
  "personalityLabel": "A fun label like 'You're a Spicy Volcano — chaotic good energy'",
  "description": "A 2-3 sentence funny description explaining why they got this bowl, using UCP student slang/vibes."
}
`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    const responseContent = completion.choices[0]?.message?.content || "{}";
    const result = JSON.parse(responseContent);

    const productExists = products.find(p => p.id === result.productId);
    if (!productExists) {
        result.productId = "spicy-volcano";
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error generating quiz result:", error);
    return NextResponse.json(
      { error: "Failed to generate quiz result" },
      { status: 500 }
    );
  }
}

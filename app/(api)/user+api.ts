import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkID } = await request.json();

    if (!name || !email || !clerkID) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await sql`
      INSERT INTO users (
        name,
        email,
        clerk_id
      )
      VALUES (
        ${name},
        ${email},
        ${clerkID}
      )
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

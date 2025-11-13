export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    // Example: send to console or replace with email sending / DB storage
    console.log("New contact form submission:", { name, email, message });

    // ✅ Return success response
    return Response.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

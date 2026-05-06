import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const token = process.env.DISCORD_BOT_TOKEN;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json(
      { error: "Discord token not configured" },
      { status: 500 },
    );
  }

  console.log(`Fetching Discord banner for user: ${userId}`);

  try {
    const response = await fetch(
      `https://discord.com/api/v10/users/${userId}`,
      {
        headers: {
          Authorization: `Bot ${token}`,
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`Discord API Error [${response.status}]:`, errorData);
      return NextResponse.json(
        {
          error: `Discord API error (${response.status}): ${errorData.message || "Unknown error"}`,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    const bannerHash = data.banner;

    if (!bannerHash) {
      return NextResponse.json({ error: "No banner found" }, { status: 404 });
    }

    const url = `https://cdn.discordapp.com/banners/${userId}/${bannerHash}.png`;
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Discord Banner API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

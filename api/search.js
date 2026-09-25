const MAX_QUERY_LENGTH = 100;

export async function GET(request) {
  const q = new URL(request.url).searchParams.get("q");
  const query = typeof q === "string" ? q.trim() : "";
  if (!query || query.length > MAX_QUERY_LENGTH) {
    return Response.json({ error: "Invalid search" }, { status: 400 });
  }

  const key = process.env.PIXABAY_API_KEY;
  if (!key) {
    return Response.json({ error: "Search is not configured" }, { status: 500 });
  }

  const params = new URLSearchParams({
    key,
    q: query,
    image_type: "photo",
    per_page: "20",
    orientation: "horizontal",
  });

  const upstream = await fetch("https://pixabay.com/api/?" + params.toString());
  if (!upstream.ok) {
    return Response.json({ error: "Search failed" }, { status: 502 });
  }

  const data = await upstream.json();
  const urls = Array.isArray(data.hits)
    ? data.hits.map((hit) => hit.webformatURL).filter((url) => typeof url === "string")
    : [];

  return Response.json({ urls });
}

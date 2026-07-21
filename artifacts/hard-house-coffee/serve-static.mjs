import http from "http";
import fs from "fs";
import path from "path";

const ROOT = new URL("dist/public", import.meta.url).pathname;
const PORT = parseInt(process.env.PORT || "4200", 10);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".json": "application/json",
  ".ico":  "image/x-icon",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".webp": "image/webp",
  ".txt":  "text/plain",
  ".xml":  "text/xml",
  ".woff2":"font/woff2",
  ".woff": "font/woff",
};

http.createServer((req, res) => {
  const url = req.url.split("?")[0].split("#")[0];
  const filepath = path.join(ROOT, url);

  const candidates = [
    filepath,
    path.join(filepath, "index.html"),
    path.join(ROOT, "index.html"),
  ];

  let served = null;
  for (const f of candidates) {
    try {
      if (fs.statSync(f).isFile()) { served = f; break; }
    } catch {}
  }

  if (!served) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  const ext = path.extname(served);
  const mime = MIME[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": mime, "Cache-Control": "no-store" });
  fs.createReadStream(served).pipe(res);
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Production static server ready → http://localhost:${PORT}`);
});

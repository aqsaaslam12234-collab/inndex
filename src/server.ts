import http from "http";
 const products = [
    { id:1, productname: "laptop" },
    { id:2, productname: "Mobile" },
    { id:3, productname: "LED Screen" },
 ];
const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log("request Initlated");

  if (url === "/users" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("content-Type", "application/json");
    return res.end(JSON.stringify(products));
  }
  res.statusCode=200;
  res.end("Add Products");
});
server.listen(3000, () => {
    console.log("server is running");
});


import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/api/test", () => {
    return HttpResponse.json({ id: "id", name: "name" });
  }),
];

export default handlers;

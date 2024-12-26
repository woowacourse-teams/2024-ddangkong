import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle.ts";

const queryClient = new QueryClient();

const enableMocking = async () => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return await worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
});

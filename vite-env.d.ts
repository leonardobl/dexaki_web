/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENVIRONMENT: "DEVELOPMENT" | "PRODUCTION";
  // Adicione outras variáveis de ambiente aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

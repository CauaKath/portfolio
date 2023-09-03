/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TIMELINE_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
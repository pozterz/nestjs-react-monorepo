declare module '*.png'

interface ImportMetaEnv {
  [key: string]: string | boolean | undefined
}
interface ImportMeta {
  env: ImportMetaEnv
}

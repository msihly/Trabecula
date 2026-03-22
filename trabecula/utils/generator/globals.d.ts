declare global {
  interface FileDef {
    name: string;
    makeFile: () => Promise<string>;
  }
}

export {};

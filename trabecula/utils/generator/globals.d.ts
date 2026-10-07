declare global {
  interface FileDef {
    makeFile: () => Promise<string>;
    name: string;
  }
}

export {};

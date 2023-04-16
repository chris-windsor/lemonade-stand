import config from "assets/config.json";

export function useConfig() {
  return {
    ...config
  }
}

export const isDefined = <T>(anything: T | null | undefined): anything is T =>
  anything !== null && anything !== undefined;

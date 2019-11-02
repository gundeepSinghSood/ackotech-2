export const canUseDOM = () => {
  const isClitent =
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement;
  return isClitent;
};
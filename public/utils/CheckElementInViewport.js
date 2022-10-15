export const IsElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  if (typeof window === undefined) return;

  return rect.top <= window.innerHeight;
};

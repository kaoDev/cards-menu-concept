export const tweenEaseFast = {
  type: "tween",
  ease: "easeInOut",
  duration: 150,
};

export const tweenEaseSlow = {
  ...tweenEaseFast,
  duration: 250,
};
export const tweenEaseFaster = {
  ...tweenEaseFast,
  duration: 75,
};

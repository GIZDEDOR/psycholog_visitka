import { Variants, Transition } from "framer-motion";

type FadeInDirection = "left" | "right" | "up" | "down" | "";
type FadeInType = "spring" | "tween";


export const textVariant = (): Variants => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
});


export const fadeIn = (
  direction: FadeInDirection = "",
  type: FadeInType = "spring",
  delay = 0,
  duration = 0.75
): Variants => {
  const transition: Transition =
    type === "spring"
      ? {
          type: "spring",
          delay,
          duration,
        }
      : {
          type: "tween",
          delay,
          duration,
          ease: "easeOut",
        };

  return {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? 100
          : direction === "right"
          ? -100
          : 0,
      y:
        direction === "up"
          ? 100
          : direction === "down"
          ? -100
          : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition,
    },
  };
};

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

interface SlideInOptions {
  elem?: HTMLElement | string | null;
  startX?: number | null;
  endX?: number | null;
  startY?: number | null;
  endY?: number | null;
  startOpacity?: number | null;
  endOpacity?: number | null;
  duration?: number | null;
  stagger?: number | null;
}

interface SmoothScrollOptions {
  //   scrollContainer: HTMLElement;
  targetX?: number | undefined;
  targetY?: number | undefined;
  offsetX?: number | undefined;
  offsetY?: number | undefined;
  duration?: number | undefined;
}

export const slideIn = ({
  elem,
  startX,
  endX,
  startY,
  endY,
  startOpacity,
  endOpacity,
  duration,
  stagger,
}: SlideInOptions) => {
  if (!elem) return;
  gsap.fromTo(
    elem,
    {
      x: startX || 0,
      y: startY || 0,
      opacity: startOpacity || 0,
    },
    {
      x: endX || 0,
      y: endY || 0,
      opacity: endOpacity || 1,
      stagger: stagger || 0,
      duration: duration || 1,
      ease: "power2.inOut",
    }
  );
};

export const smoothScroll = ({
  //   scrollContainer,
  targetX,
  targetY,
  offsetX,
  offsetY,
  duration,
}: SmoothScrollOptions) => {
  gsap.to(window, {
    scrollTo: {
      x: targetX,
      offsetX: offsetX,
      y: targetY,
      offsetY: offsetY,
    },
    duration: duration,
    ease: "power2.inOut",
  });
};

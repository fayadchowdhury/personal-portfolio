import gsap from "gsap";
import { ScrollToPlugin, ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

interface SlideInOptions {
  elem?: HTMLElement | string | NodeListOf<Element> | Element[] | null;
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

interface ScrambleTextOptions {
  elem?: HTMLElement | string | NodeListOf<Element> | Element[] | null;
  text?: string | null;
  scrambleChars?: string | null;
  duration?: number | null;
  repeat?: number | null;
}

interface BlinkOptions {
  elem?: HTMLElement | string | NodeListOf<Element> | Element[] | null;
  duration?: number | null;
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

export const scrambleText = ({
  elem,
  text,
  scrambleChars,
  duration,
  repeat,
}: ScrambleTextOptions) => {
  if (!elem) return;

  gsap.to(elem as gsap.TweenTarget, {
    duration: duration ?? 0,
    scrambleText: {
      text: text ?? "",
      chars: scrambleChars ?? "",
      revealDelay: 0.5,
      speed: 0.3,
      newClass: "myClass",
    },
    repeat: repeat ?? 0,
  });
};

export const blink = ({ elem, duration }: BlinkOptions) => {
  if (!elem) return;
  gsap.to(elem, {
    opacity: 0,
    duration: duration ?? 0,
    repeat: -1,
    yoyo: true,
    ease: "steps(1)",
  });
};

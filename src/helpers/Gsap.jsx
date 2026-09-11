import { useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

export default function Gsap() {
  // const btnRef = useRef(null);
  // const handelMove = (e) => {
  //   const rect = btnRef.current.getBoundingClientRect();
  //   const x = e.clientX - rect.left - rect.width / 2;
  //   const y = e.clientY - rect.top - rect.height / 2;
  //   gsap.to(btnRef.current, { x: x * 0.4, y: y * 0.4, duration: 0.3 });
  // };
  // const handelLeave = () => {
  //   gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.3 });
  // };

  // Do A squishy type animation.
  const buttonRef = useRef(null);

  const squishHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.08,
      duration: 0.25,
      ease: "back.out(2)",
    });
  };

  const squishLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const squishClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.15,
      ease: "back.out(2)",
    });
  };

  const squishRelease = () => {
    gsap.to(buttonRef.current, {
      scale: 1.08,
      duration: 0.15,
      ease: "back.out(2)",
    });
  };

  // text animation on hover

  const textRef = useRef(null);
  const textHover = () => {
    gsap.to(textRef.current, {
      y: -50,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const textLeave = () => {
    gsap.to(textRef.current, {
      y: 0,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  // expanding blob

  const blobRef = useRef(null);

  const blobHover = () => {
    gsap.to(blobRef.current, {
      y: 20,
      scale: 1,
      duration: 1,
    });
  };

  const blobLeave = () => {
    gsap.to(blobRef.current, {
      y: -20,
      scale: 0,
      duration: 1,
      ease: "back.out(2)",
    });
  };
  return { buttonRef, textRef, blobRef, squishHover, squishLeave, squishClick, squishRelease, textHover, textLeave, blobHover, blobLeave };
}

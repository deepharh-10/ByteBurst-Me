import { useRef, useEffect } from "react";

export default function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0; // mouse position
    let rx = 0, ry = 0; // ring position

    const moveHandler = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    document.addEventListener("mousemove", moveHandler);

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animateRing);
    };

    animateRing();

    // Hover effects
    const hoverElements = document.querySelectorAll(
      "a, button, .comp-card, .sponsor-logo"
    );

    const handleEnter = () => {
      if (ringRef.current && cursorRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
        ringRef.current.style.opacity = "0.3";
        cursorRef.current.style.transform = "translate(-50%,-50%) scale(1.5)";
      }
    };

    const handleLeave = () => {
      if (ringRef.current && cursorRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.opacity = "0.5";
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(
          "translate(-50%,-50%) scale(1)",
          ""
        );
      }
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Cleanup 🧹
    return () => {
      document.removeEventListener("mousemove", moveHandler);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={ringRef} className="cursor-ring"></div>

        <div className="grid-bg"></div>

    </>
  );
}
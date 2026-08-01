export const animations = {

  // Timing

  fast: "150ms ease",

  normal: "250ms ease",

  slow: "450ms ease",

  cinematic: "700ms ease-out",


  // Transform values

  hoverScale:
    "scale(1.02)",


  hoverLift:
    "translateY(-4px)",


  // Component motion presets

  floating: {
    transition:
      "transform 500ms ease",

    hover:
      "translateY(-6px)",
  },


  reveal: {
    opacity:
      "0 → 1",

    transform:
      "translateY(20px) → translateY(0)",
  },


  pageEnter: {
    opacity:
      "0 → 1",

    transform:
      "scale(0.98) → scale(1)",
  },


  glowPulse: {
    duration:
      "3000ms",
  },


};
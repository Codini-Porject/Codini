export const dropVariant = {
  initial: {
    scaleY: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const parentStagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

export const fadeUpIn = {
  initial: {
    y: "30px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

export const scaleMiddle = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 0.2,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const fadeRightIn = {
  initial: {
    x: "-50px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const fadeLeftIn = {
  initial: {
    x: "50px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const fadeUpLeftIn = {
  initial: {
    x: "50%",
    y: "50%",
    opacity: 0,
  },
  animate: {
    x: "30%",
    y: "30%",
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const scaleMiddleIn = {
  initial: {
    scale: 0,
    opacity: 0,
    x: "-80px",
    y: "20px",
  },
  animate: {
    x: "-80px",
    y: "20px",
    scale: 1,
    opacity: 0.9,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

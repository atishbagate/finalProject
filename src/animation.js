export const fadeIn = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2
    }
  }
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2
    }
  }
};

export const cardUp = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 4
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 4
    }
  }
};

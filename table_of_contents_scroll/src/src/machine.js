export const machine = {
  initial: 'hidden',
  states: {
    hidden: {
      on: {
        SCROLLED_DOWN: 'showing',
      }
    },
    showing: {
      on: {
        MOUSEOVER: 'expanded',
        SCROLLED_UP: 'hidden'
      }
    },
    expanded: {
      on: {
        MOUSEOUT: 'showing',
        SCROLLED_UP: 'hidden'
      }
    }
  }
};







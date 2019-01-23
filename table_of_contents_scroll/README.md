# Source

<https://skorks.com/2011/09/why-developers-never-use-state-machines/>

# Behaviour

-   When the page is scrolled to the top, we see no table of contents (TOC).

![CannotAccessToc](01_top_no_toc.png)

-   When the page is scrolled, we see a link to the TOC.

![ShowingTOCLink](02_scrolled_toc_link.png)

-   When the hover that link, it expands and actually shows the TOC.

![ShowingExpandedTOC](03_hovered_expaded_toc.png)

# Machine

## Simple version

![Machine](machine.png)

```js
const machine = Machine({
  initial: 'CannotAccessToc',
  states: {
    CannotAccessToc: {
      on: {
        SCROLLED_DOWN: 'ShowingTOCLink',
      }
    },
    ShowingTOCLink: {
      on: {
        MOUSEOVER: 'ShowingExpandedTOC',
        SCROLLED_NEAR_THE_TOP: 'CannotAccessToc'
      }
    },
    ShowingExpandedTOC: {
      on: {
        MOUSEOUT: 'ShowingTOCLink',
        SCROLLED_NEAR_THE_TOP: 'CannotAccessToc'
      }
    }
  }
});
```

## Statechart

![Statechart](statechart.png)

```js
const machine = Machine({
  initial: 'CannotAccessToc',
  on: {
    SCROLLED_NEAR_THE_TOP: 'CannotAccessToc'
  },
  states: {
    CannotAccessToc: {
      on: {
        SCROLLED_DOWN: 'CanAccessToc',
      }
    },
    CanAccessToc: {
      initial: 'ShowingTocLink',
      states: {
        ShowingTocLink: {
          on: {
            MOUSEOVER: 'ShowingExpandedToc',
          }
        },
        ShowingExpandedToc: {
          on: {
            MOUSEOUT: 'ShowingTocLink',
          }
        }
      }
    },
  }
});
```

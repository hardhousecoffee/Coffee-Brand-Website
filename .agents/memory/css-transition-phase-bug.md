---
name: CSS transition phase bug
description: Multi-phase state pattern where the "hold" phase accidentally produces transition:"none", causing instant opacity snap
---

**The bug pattern:**

```tsx
const transition =
  phase === "in"  ? "opacity 2s ease" :
  phase === "out" ? "opacity 2s ease" :
  "none"; // ← "hold" phase hits this — instant snap!
```

When phase switches from "in" to "hold", React re-renders with `opacity: 1` AND `transition: "none"` simultaneously → instant snap to full opacity instead of a 2s ease-in.

**The fix:** Use a single `opacity` state variable (number) and a constant transition:

```tsx
const [opacity, setOpacity] = useState(0);
// ...
transition: "opacity 2.5s ease"  // always the same value
```

Then just call `setOpacity(1)` to fade in and `setOpacity(0)` to fade out. React's CSS transition system handles the rest correctly.

**Why:** The transition property must be set to the desired duration at the moment the opacity value changes. If the transition evaluates to "none" at that render, no animation occurs regardless of previous renders.

## Competing keyframe animations

Do not assign two delayed CSS animations that both control `opacity` or `transform` to the same element when the first must remain visible before the second begins. The later animation can suppress the active entrance state and make the element appear invisible.

**Why:** Multiple animations on one element compose by property, and the later-listed animation can win for overlapping properties even when its visible effect is intended for a later phase.

**How to apply:** Split phases across nested elements: let the inner element own entrance movement/opacity and let the outer wrapper own the later fade. Each animated property then has one owner per phase.

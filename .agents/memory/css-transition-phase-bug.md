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

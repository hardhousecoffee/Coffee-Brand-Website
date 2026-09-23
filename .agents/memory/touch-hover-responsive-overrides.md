---
name: Touch-hover responsive overrides
description: Why landscape mobile positioning must explicitly neutralize generic hover transforms on touch Safari.
---

Responsive positioning fixes for interactive card labels must account for touch browsers persisting `:hover`. Place the mobile override after generic hover rules and explicitly reset transforms in both normal and hovered states.

**Why:** A generic hover transform remained active on landscape Safari and translated a centered card label left, clipping its first character even though the wrapper itself was centered.

**How to apply:** When card text is repositioned for touch/mobile layouts, verify the selector against both its base and `:hover` state at the target viewport and ensure source order and specificity let the mobile rule win.
---
name: Intermediate-width headline containment
description: Prevent single-line hero text from escaping its grid column beside adjacent media.
---

Keep deliberately unwrapped hero lines sized independently from a larger parent heading when they share a row with media.

**Why:** Standard mobile and wide-desktop checks missed an overlap caused by browser zoom and an intermediate effective viewport. Inherited heading sizing plus `white-space: nowrap` allowed the line to escape its grid column.

**How to apply:** Verify side-by-side hero layouts at 1024, 1180, and 1440 pixels, in addition to tablet and mobile. Confirm visible space remains between the complete text line and adjacent media.
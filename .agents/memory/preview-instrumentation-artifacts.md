---
name: Preview instrumentation artifacts
description: How to distinguish injected Replit preview behavior from application layout or runtime defects.
---

Preview instrumentation can produce errors or measurements that do not originate in application
code.

**Why:** The preview harness can inject anonymous scripts such as `SmoothPointer`; their errors and
layout side effects can otherwise be mistaken for app regressions.

**How to apply:** Confirm that an error stack or overflowing element resolves to project code before
changing the application. Do not mask unexplained preview measurements with global CSS.
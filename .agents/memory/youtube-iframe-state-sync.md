---
name: YouTube iframe state sync
description: Reliability constraint for synchronizing custom controls with YouTube embeds inside proxied previews.
---

Custom controls must treat inbound YouTube player-state events as the source of truth. A successful
play or pause command does not prove that the embed will emit the matching state event.

**Why:** In the proxied preview, official IFrame API and direct postMessage approaches both accepted
commands, while outbound player-state messages were absent or affected by redirected-origin
mismatches. Optimistic UI could therefore appear correct while embedded controls were out of sync.

**How to apply:** Test both directions: custom control to player and embedded control back to custom
UI. If inbound state events are unavailable, report the limitation rather than shipping optimistic
state as synchronized behavior.
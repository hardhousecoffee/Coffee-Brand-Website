---
name: YouTube embed validation
description: Reliability constraints for embed availability and custom-control synchronization inside proxied previews.
---

Custom controls must treat inbound YouTube player-state events as the source of truth. A successful
play or pause command does not prove that the embed will emit the matching state event.

**Why:** In the proxied preview, official IFrame API and direct postMessage approaches both accepted
commands, while outbound player-state messages were absent or affected by redirected-origin
mismatches. Optimistic UI could therefore appear correct while embedded controls were out of sync.

**How to apply:** Test both directions: custom control to player and embedded control back to custom
UI. If inbound state events are unavailable, report the limitation rather than shipping optimistic
state as synchronized behavior.

YouTube oEmbed metadata returning HTTP 200 does not prove that a video may be played in an iframe.

**Why:** Multiple official venue videos returned complete oEmbed metadata but displayed “This video is
unavailable” in the actual privacy-enhanced iframe. Embedding permissions are enforced separately.

**How to apply:** Use metadata to shortlist videos, then render every final candidate in the app preview.
Replace any card that displays YouTube’s unavailable state before shipping.
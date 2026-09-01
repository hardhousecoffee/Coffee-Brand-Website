---
name: Animated marquee containment
description: Why translated marquee tracks may still create mobile document overflow despite local clipping.
---

For continuously translated marquee tracks, clip the animated viewport locally and also contain deliberate horizontal overflow at the owning page boundary.

**Why:** In Chromium mobile viewports, long transformed marquee clones continued to inflate `documentElement.scrollWidth` even when their immediate wrappers used `overflow: clip` or `overflow: hidden`. Page-boundary containment removed the false horizontal scroll while preserving smooth animation.

**How to apply:** When a marquee visibly clips correctly but mobile QA still reports `scrollWidth > clientWidth`, confirm the track is the only offender, then add horizontal overflow containment to the page shell rather than globally masking unrelated layout defects.
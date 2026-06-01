---
name: Video intro timing
description: How to time fade-out for a video overlay intro without the freeze-then-snap problem
---

When using a video as a timed overlay (play-once intro), always check the video duration with `ffprobe` before setting fade-out timers.

**The problem:** If `fadeOutTimer` fires after the video has already ended, the video freezes on its last frame for that gap before the opacity transition begins. The user sees: video stops → pause → then fades. Feels like it "disappears instantly."

**The fix:** Start the fade-out while the video is still actively playing. A good rule is to start fading at ~70% of the video duration so the video is still moving when opacity begins dropping.

**Example (5s video):**
- fadeOutTimer: 3500ms (video still playing, 1.5s left)
- transition: "opacity 2.5s ease"
- goneTimer: 3500 + 2500 + 100ms buffer = 6100ms

**Why:** The visual overlap between moving video content and the opacity fade makes the disappearance feel organic rather than abrupt.

---
name: Independent preview review
description: How to provide an accurate development preview for browser and external text-reader reviews.
---

For independent prepublication reviews, serve the existing prerendered build through the development preview and verify route-specific HTML as well as the browser display.

**Why:** A reviewer received the same generic homepage fallback and an obsolete headline at multiple development URLs, while JavaScript-enabled browsers displayed the updated React pages. HTTP 200 alone did not establish correct review content.

**How to apply:** Compare direct blog and article responses with generated pages before sharing the preview. Keep production settings and publication untouched unless separately approved. This review mode serves a built snapshot: rebuild after subsequently approved source changes before asking the user to review again. Do not change protected article content merely to fix a preview-serving discrepancy.

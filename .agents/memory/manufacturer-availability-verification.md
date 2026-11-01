---
name: Manufacturer availability verification
description: Why extracted manufacturer-page inventory text needs a visible-page cross-check.
---

Do not treat stock, discontinued status or discounts found in a manufacturer's extracted page text as confirmed without checking which state the visible page actually displays.

**Why:** CAFÉ's product page extraction included “no longer manufactured” and out-of-stock messages from hidden page states. Its visible page instead showed a price and requested a ZIP code for availability. Treating all extracted states as current would have created a false discontinuation claim.

**How to apply:** Cross-check consequential availability claims against a rendered page or unambiguous current product data. If inventory requires a customer location, report availability as unconfirmed rather than supplying a location or inferring discontinuation. Do not convert an unpopulated sale label into an invented discount.

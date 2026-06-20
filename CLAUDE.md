# IronCodex Project Instructions

These rules apply to all future work on IronCodex.

## Image Requirements For All Articles

- Every article must have a real, relevant, good-quality image.
- No article may intentionally use a placeholder image.
- No article may use initials cards, generic logo cards, generic fallback graphics, blank cards, or decorative placeholders as its primary image.
- No article may render broken image boxes in production.
- No article may use AI-generated historical images unless explicitly requested and clearly marked, and never as a fake historical source.
- Image selection must be historically relevant to the article subject.
- Every image must include a caption, source or collection, source URL, and reliability or context note where appropriate.
- For Wikimedia Commons, the image `src` must be a real renderable image URL or a local asset path. The Commons file page belongs in `sourceUrl`, not in `src`.
- If no exact image exists, use the best historically associated real image, such as a manuscript depiction, museum object, monument, map, seal, coin, battlefield, castle, tomb, or surviving artifact.
- If no suitable image can be found, flag the article as incomplete rather than silently using a placeholder.
- Placeholder fallbacks may exist only as defensive development error states, not as intended production article images.
- All new content tasks must run image validation before completion.

Bad:

> A Weapons & Armor article for “Battle Axe” renders a generic IronCodex card with “BA” initials.

Good:

> The article uses a real museum photograph of a medieval axe head, a manuscript depiction of axes in battle, or another historically relevant public-domain image, with caption and source metadata.

Bad:

> A person article uses a blank avatar or initials card.

Good:

> The person article uses a real manuscript depiction, painting, coin, seal, statue, tomb, or historically associated image, with an honest caption explaining whether it is contemporary or later.

Bad:

> An image `src` points to `https://commons.wikimedia.org/wiki/File:Example.jpg`.

Good:

> The image `src` points to a valid local asset or direct renderable image file, while `sourceUrl` points to the Commons file page.

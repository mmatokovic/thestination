# help

## lookup order

Consider this content structure:

```plain
content/
├── about.md
└── contact.md
```

Files in the root of the content directory have a content type of page. To render these pages with a unique template, create a matching subdirectory:

```plain
layouts/
└── page/
    └── single.html
```

But the contact page probably has a form and requires a different template. In the front matter specify layout:

content/contact.md

```yaml
---
layout: contact
title: Contact
---
```

Then create the template for the contact page:

```plain
layouts/
└── page/
    └── contact.html  <-- renders contact.md
    └── single.html   <-- renders about.md
```

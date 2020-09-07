---
title: "Our Team"
eleventyExcludeFromCollections: true
---

Here you can find out about the members of staff in our practice.
<ul>
{% for item in collections.team %}
  <li>
    <a href="{{ item.url }}">{{ item.data.title }}</a>
  </li>
{% endfor %}
</ul>
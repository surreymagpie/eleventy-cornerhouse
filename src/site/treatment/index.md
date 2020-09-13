---
title: "Treatment"
tags: false
eleventyNavigation:
  key: Treatment
  order: 4
templateEngineOverride: njk,md
---

<aside class="treatment-list">
{% for category,pages in collections.treatmentCategories %}
<h3 class="treatment-category">{{ category }}</h3>
<ul class="treatment-items">
  {% for page in pages %}
  <li class="treatment-item"><a href="{{ page.url }}">{{ page.data.title }}</a></li>
  {% endfor -%}
</ul>
{% endfor -%}
</aside>

These pages provide you with some information about the types of dental treatment which are available.

Click on an item in the list to find out more about that treatment, why it may be needed and what options you have.

Where we feel that a patient would be better served by obtaining treatment elsewhere, we are happy to arrange referrals as appropriate.

If you have further questions, please call the practice on [01784 253140](tel:+441784253140) to find out more.

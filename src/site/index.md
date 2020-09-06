---
title: Welcome to Cornerhouse Dental Practice
layout: layouts/base.njk
---
Located in one of the oldest buildings in Ashford, Surrey, the practice has been treating patients on this site since 1953. Established by Richard Francis, the practice was later taken over by his son Patrick. The current principal dentist is Robert Curtis who took over in 1999.

Over the years, we have seen many thousands of patients and our kind and gentle care has brought us the excellent reputation we hold today and of which we are very proud.

Many patients who have moved away from the area still attend this practice, choosing to continue with the dentists they trust rather than see someone new.
<ul>
{% for item in collections.news %}
  <li>
    <a href="{{ item.url }}">{{ item.data.title }}</a>
    <time datetime="{{ item.data.date }}">{{ item.data.date }}</time>
    
  </li>
{% endfor %}
</ul>
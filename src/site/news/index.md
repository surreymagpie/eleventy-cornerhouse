---
title: Recent articles
tags: false
eleventyNavigation:
  key: News
  order: 1
---
The most recent news articles are listed below.

<ul>
{% for item in collections.news | reverse %}
  <li>
    <a href="{{ item.url }}">{{ item.data.title }}</a>
    <time datetime="{{ item.data.date }}">{{ item.data.date }}</time>
    
  </li>
{% endfor %}
</ul>
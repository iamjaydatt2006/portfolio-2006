---
title: Skills
seo_title: Technical Skills | Jaydatt Khodave
description: Technical skills of Jaydatt Khodave across frontend, backend, databases, and tools, including HTML5, CSS3, JavaScript, React, Node.js, PHP, MySQL, and Firebase.
permalink: /skills/
lead: The languages, frameworks, and tools I work with, grouped by area.
---
<div class="container">
  {%- for group in site.data.skills %}
  {%- assign slug = group.category | slugify %}
  <section class="section{% if forloop.first %} section--first{% endif %} section__grid" aria-labelledby="{{ slug }}-title">
    <div>
      <h2 class="section__title" id="{{ slug }}-title">{{ group.category }}</h2>
      {%- if group.description %}
      <p class="section__note">{{ group.description }}</p>
      {%- endif %}
    </div>
    <div class="section__body">
      <ul class="skill-list">
        {%- for item in group.items %}
        <li>{{ item }}</li>
        {%- endfor %}
      </ul>
    </div>
  </section>
  {%- endfor %}
</div>

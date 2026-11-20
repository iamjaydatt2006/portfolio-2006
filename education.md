---
title: Education
seo_title: Education | Jaydatt Khodave
description: Education of Jaydatt Khodave, pursuing a B.Tech in Computer Science & Engineering at MGM University, expected graduation 2029.
permalink: /education/
lead: Academic background in computer science.
---
<section class="section section--first" aria-labelledby="academic-title">
  <div class="container">
    <div class="section-head">
      <h2 class="section-head__title" id="academic-title">Academic timeline</h2>
    </div>
    <ol class="timeline">
      {%- for entry in site.data.education %}
      {% include timeline-entry.html period=entry.period tag=entry.status title=entry.title subtitle=entry.institution text=entry.location %}
      {%- endfor %}
    </ol>
  </div>
</section>

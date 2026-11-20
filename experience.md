---
title: Experience
seo_title: Experience | Jaydatt Khodave
description: Professional experience of Jaydatt Khodave, founder of It Is Unique Official since 2023, covering digital product and website development.
permalink: /experience/
lead: Entrepreneurial and project work, kept separate from formal employment.
---
<section class="section section--first" aria-labelledby="entrepreneurship-title">
  <div class="container">
    <div class="section-head">
      <h2 class="section-head__title" id="entrepreneurship-title">Entrepreneurship</h2>
    </div>
    <ol class="timeline">
      {%- for entry in site.data.experience %}
      {% include timeline-entry.html period=entry.period tag=entry.type title=entry.title subtitle=entry.organization subtitle_url=entry.url text=entry.summary items=entry.responsibilities %}
      {%- endfor %}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="projects-title">
  <div class="container section__grid">
    <h2 class="section__title" id="projects-title">Projects</h2>
    <div class="section__body prose">
      <p>My personal and organization projects are listed separately from the role above. Each one has its own page with details and links.</p>
      <p><a class="link-more" href="{{ '/projects/' | relative_url }}">Browse projects</a></p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="education-link-title">
  <div class="container section__grid">
    <h2 class="section__title" id="education-link-title">Education</h2>
    <div class="section__body prose">
      <p>I'm studying for a {{ site.author.education }} at {{ site.author.university }}.</p>
      <p><a class="link-more" href="{{ '/education/' | relative_url }}">View education</a></p>
    </div>
  </div>
</section>

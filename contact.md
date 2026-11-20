---
title: Contact
seo_title: Contact Jaydatt Khodave
description: Contact Jaydatt Khodave by email, GitHub, or LinkedIn to discuss projects, collaboration, or opportunities.
permalink: /contact/
lead: I'm always interested in connecting with people, discussing technology, and exploring meaningful projects.
hide_cta: true
---
<section class="section section--first" aria-labelledby="reach-title">
  <div class="container section__grid">
    <h2 class="section__title" id="reach-title">Get in touch</h2>
    <div class="section__body">
      <p class="contact-email">
        <a href="mailto:{{ site.author.email }}" id="contact-email">{{ site.author.email }}</a>
      </p>
      <div class="actions">
        <a class="button button--primary" href="mailto:{{ site.author.email }}">Send an email</a>
        <button class="button" type="button" data-copy="{{ site.author.email }}" hidden>Copy email address</button>
      </div>
      <p class="sr-only" role="status" aria-live="polite" data-copy-status></p>
      <p class="copy-feedback" aria-hidden="true" data-copy-visible></p>

      <dl class="contact__list">
        <div><dt>Name</dt><dd>{{ site.author.name }}</dd></div>
        <div><dt>Location</dt><dd>{{ site.author.location }}</dd></div>
        <div><dt>Email</dt><dd><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></dd></div>
        <div><dt>GitHub</dt><dd><a href="{{ site.social.github }}" rel="me noopener noreferrer" target="_blank">{{ site.social.github | remove: 'https://' }}<span class="sr-only"> (opens in new tab)</span></a></dd></div>
        <div><dt>LinkedIn</dt><dd><a href="{{ site.social.linkedin }}" rel="me noopener noreferrer" target="_blank">{{ site.social.linkedin | remove: 'https://www.' | remove: 'https://' | split: '/' | join: '/' }}<span class="sr-only"> (opens in new tab)</span></a></dd></div>
      </dl>
    </div>
  </div>
</section>

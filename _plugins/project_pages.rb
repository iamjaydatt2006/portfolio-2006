# frozen_string_literal: true

# Builds /projects/<slug>/ pages from _data/projects.yml so that adding a
# project only requires editing the data file. Runs at build time and uses no
# external gems, so it works on Cloudflare Pages.
module Portfolio
  class ProjectPage < Jekyll::PageWithoutAFile
    def initialize(site, project)
      slug = project['slug'].to_s
      super(site, site.source, File.join('projects', slug), 'index.html')

      self.data = {
        'layout' => 'project',
        'title' => project['name'],
        'description' => project['summary'],
        'permalink' => "/projects/#{slug}/",
        'project' => project,
        'schema_type' => 'CreativeWork',
        'parent_title' => 'Projects',
        'parent_url' => '/projects/'
      }
      self.content = ''
    end
  end

  class ProjectPagesGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      projects = site.data['projects'] || []
      slugs = []
      projects.each do |project|
        %w[slug name category summary].each do |key|
          raise Jekyll::Errors::FatalException, "projects.yml: '#{project['name'] || '?'}' is missing '#{key}'" if project[key].to_s.strip.empty?
        end
        raise Jekyll::Errors::FatalException, "projects.yml: duplicate slug '#{project['slug']}'" if slugs.include?(project['slug'])

        slugs << project['slug']
        site.pages << ProjectPage.new(site, project)
      end
    end
  end
end

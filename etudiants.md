## Informations pour les étudiants de TLS-SEC

### Année scolaire 2024-2025
<ul>
{% for post in site.categories["2024-2025"] %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

### Année scolaire 2023-2024
<ul>
{% for post in site.categories["2023-2024"] %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

### Procédures générales concernant les étudiants
<ul>
{% for post in site.categories.procedures %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

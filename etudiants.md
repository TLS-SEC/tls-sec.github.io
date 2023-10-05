## Informations pour les étudiants de TLS-SEC

### Année scolaire 2022-2023
<ul>
{% for post in site.categories["2022-2023"] %}
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

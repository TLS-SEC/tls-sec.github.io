## Informations pour les étudiants de TLS-SEC

### Année scolaire 2020-2021
<ul>
{% for post in site.categories["2020-2021"] %}
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

# Informations pour les étudiants de TLS-SEC

## Procédures générales concernant les étudiants

<ul class="list-disc">
{% for post in site.categories.procedures %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

## Année scolaire 2022-2023

<ul class="list-disc">
{% for post in site.categories["2022-2023"] %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

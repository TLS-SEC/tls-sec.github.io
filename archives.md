## Archives

### Année scolaire 2018-2019
<ul>
{% for post in site.categories["2018-2019"] %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

### Année scolaire 2017-2018
<ul>
{% for post in site.categories["2017-2018"] %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt }}
</li>
{% endfor %}
</ul>

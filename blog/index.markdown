---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /blog/
---

<style>
.post {
    padding: 5px;
}
</style>

<p><img id="feedicon" src="/assets/images/feedicons/25.png"> <a href="/feed.xml">Subscribe with RSS</a></p>
<script>
document.querySelector("#feedicon").src = `/assets/images/feedicons/${Math.floor(Math.random() * 50) + 1}.png`
</script>

<ul>
  {% for post in site.posts %}
      <li class="highlighter-rouge post">
          <h2>{{ post.title }}</h2>
          {{ post.excerpt }} <a href="{{ post.url }}">Continue reading...</a>
      </li><br><br>
  {% endfor %}
</ul>

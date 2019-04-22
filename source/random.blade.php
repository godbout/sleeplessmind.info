<script>
  let writings = @json($writings->map->getUrl()->values());

  window.location.pathname = writings[Math.floor(Math.random() * writings.length)];
</script>;

<script>
  let writings = @json($writings->map->getUrl()->values());

  window.location = writings[Math.floor(Math.random() * writings.length)];
</script>;

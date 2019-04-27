<script>
  let writings = @json($writings->map(function ($writing) {
    return $writing->getUrl() . '/';
  })->values());

  window.location = writings[Math.floor(Math.random() * writings.length)];
</script>;

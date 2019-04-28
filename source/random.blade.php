<script>
    {{-- let writings = @json($writings->map->getUrl()->values()) --}}
    let writings = ["\/writings\/3","\/writings\/my-gift"];
    window.location = writings[Math.floor(Math.random() * writings.length)];
</script>

<script>
    function diyValine() {
        jinrishici.load(function(result) {
            var jrsc_plac = result.data.content + "\n「" + result.data.origin.title + "」" + result.data.origin.dynasty + " · " + result.data.origin.author
            document.getElementById("veditor").setAttribute("placeholder", jrsc_plac);
        });
    }
    setTimeout(diyValine, 10);
</script>
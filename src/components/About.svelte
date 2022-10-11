<!-- -------------------------------------------------------------- -->
                    <!-- SCRIPT -->
<!-- -------------------------------------------------------------- -->
<script>
    import Button from "./Button.svelte";

    let someText = 'Frontend developer at platzi'
    let count = 0;
    let styles = { darkMode: false }

    function handleClick() {
        count += 1;
    }

    function cambio() {
        styles.darkMode = !styles.darkMode
        window.document.body.classList.toggle("dark-mode");
    }

</script>

<!-- -------------------------------------------------------------- -->
                    <!-- HTML -->
<!-- -------------------------------------------------------------- -->
<div class="About">

    {#if !styles.darkMode}
        <p>{someText}</p>
    {:else}    
        <p><span>Modo darkMode</span></p>
    {/if}
    <br>

    <button on:click={handleClick}>Contador {count === 0 ? '' : count}</button>
    <button on:click={cambio}>Dark Mode</button>

    <Button text="Click" {count} on:click={handleClick}/>
    <Button text="DarkMode B" on:click={cambio} />

</div>

<!-- -------------------------------------------------------------- -->
                    <!-- STYLE -->
<!-- -------------------------------------------------------------- -->
<style>
    p {
        color: var(--theme-color);
    }
</style>
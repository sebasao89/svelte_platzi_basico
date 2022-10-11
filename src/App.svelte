<script>
  export let name;
  export let lastName;
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png"
</script>

<main>
  <div>
    <h1>Hello {name} - {lastName}</h1>
    <p>Frontend Developer</p>
    <img src={svelteLogo} alt="Logo de svelte">
  </div>
  <h1>Vite + Svelte</h1>


</main>

<style>

:global(body) {
  background-color: #f2eee2;
  color: rgb(64, 64, 248);
}

:global(:root) {
  --theme-color: rgb(165, 3, 165);
  font-size: 22px;
}

p {
  color: var(--theme-color);
}

main img {
  width: 30%;
}
</style>

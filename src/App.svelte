<script>
  import About from "./components/About.svelte";
    import Input from "./components/input.svelte";
  import Person from "./components/Person.svelte";
    import Skills from "./components/Skills.svelte";
  import Text from "./components/Text.svelte";

  export let name;
  export let lastName;
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png"

  const data = {
    name: "Andrea",
    lastName: "Cardona",
    age: 29
  }
</script>

<main>
  <div>
    <h1>Hello {name} {lastName}</h1>
    <About/>
    <img src={svelteLogo} alt="Logo de svelte">
  </div>
  <h2>Vite + Svelte</h2>

  <Text anotherText="Hola"/>
  <Text />

  <Person {data}/>
  <Skills/>

  <Input/>

</main>

<style>

:global(body) {
  background-color: #f2eee2;
  color: blue;
}

:global(:root) {
  --theme-color: rgb(165, 3, 165);
}

:global(body.dark-mode) {
  background-color: #1d3040;
  color: #bfc2c7;
}

main img {
  width: 30%;
}

h1 {
  color: red;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}
</style>

<script>
    let skills = [
        {
            id: 1,
            name: "HTML"
        },
        {
            id: 2,
            name: "CSS"
        },
        {
            id: 3,
            name: "JAVASCRIPT"
        }
    ]
</script>

<div class="Skills">
    <h3>Habilidades</h3>
    <ul>
        {#each skills as skill, i}
            <li>{skill.name}</li>
        {/each}
    </ul>
</div>

<style>
    .Skills {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        display: inline;
        margin: 0 0 0 0.4em;
    }
</style>
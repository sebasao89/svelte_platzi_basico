<script>
    import { count } from "../store/store";

    function handleClick() {
        count.update(n => n+1);
    }

</script>


<div>
    <button on:click={handleClick}>
        Click {$count === 0 ? '' : $count}
    </button>
</div>


<style>
    button {
        background-color: #f76027;
        color: aliceblue;
        border: none;
        border-radius: 4px;
        padding: 0.5 em;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
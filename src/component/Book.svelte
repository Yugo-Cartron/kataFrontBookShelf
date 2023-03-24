<script lang="ts">
    import type { IBook }from "../lib/model/IBook";

    export let book : IBook;
</script>

<div class="book">
    <h2 data-selector="title">{book.title}</h2>
    <p>Author : {book.author}</p>
    <p>ISBN : { book.isbn.value}</p>
    <p>Number of pages : {book.pageCount}</p>
</div>

<style>
    .book {
        width: 300px;
        margin: 1rem;
        padding: 1rem 1.5rem;
        backdrop-filter: blur(8px);

        background-image: linear-gradient(62deg,  rgb(244, 215, 255, .6) 90%, rgb(162, 217, 255, .6) 90%);
        border-radius: 10px;
        transition: .1s ease-in-out;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .book p {
        text-align: left;
    }

    .book:hover {
        transition: .1s ease-in-out;
        transform: scale(1.05);
    }
</style>

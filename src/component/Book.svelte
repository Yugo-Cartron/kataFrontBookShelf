<script lang="ts">
    import type { IBook }from "../lib/model/IBook";

    export let book : IBook;
</script>

<div class="book">
    <h2 data-selector="title">{book.title}</h2>
    <p><b>Author</b> : {book.author}</p>
    <p><b>ISBN</b> : { book.isbn.value}</p>
    <p><b>Number of pages</b> : {book.pageCount}</p>
</div>

<style>
    .book {
        width: 300px;
        margin: 1rem;
        padding: 1rem 1.5rem;
        background-image: linear-gradient(62deg, rgb(202, 237, 255, .6) 0%, rgb(254, 235, 255, .5) 90%);
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

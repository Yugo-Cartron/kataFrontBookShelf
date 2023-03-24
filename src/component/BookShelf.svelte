<script lang="ts">
    import { onMount } from 'svelte';
    import { BookService } from "../lib/model/BookService.ts";
    import type { IBook } from "../lib/model/IBook.ts";
    import Book from "./Book.svelte";

    const bookService = new BookService();
    let books : Array<IBook> = [];

    onMount( async () => {
        books = await bookService.getAllBooks();
    })
</script>

<div class="container">
    {#each books as book}
        <Book {book}/>
    {/each}
</div>

<style>
    .container {
        display: flex;
        width: 1200px;
        flex-wrap: wrap;
    }
</style>

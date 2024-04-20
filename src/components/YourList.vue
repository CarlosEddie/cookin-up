<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
    props: {
        ingredients: { type: Array as PropType<string[]>, required: true }
    },
    components: { Tag },
}
</script>

<template>
        <section>
            <span class="subtitle-lg your-list-text">
                Your List:
            </span>

            <ul v-if="ingredients.length" class="your-list-ingredients">
                <li v-for="ingredient in ingredients" :key="ingredient">
                    <Tag :text="ingredient" active />
                </li>
            </ul>
            <p v-else class="paragraph empty-list">
                <img src="../assets/images/icons/empty-list.svg" alt="Search icon">
                Your list is empty, select ingredients to start.
            </p>
        </section>
</template>

<style scoped>
.your-list-text {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.your-list-ingredients {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.empty-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}
</style>
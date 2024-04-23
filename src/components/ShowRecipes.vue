<script lang="ts">
import type { PropType } from 'vue';
import { getRecipes } from '@/http';
import type IRecipe from '@/interfaces/IRecipe';
import MainButton from './MainButton.vue';
import CardRecipe from './CardRecipe.vue';
import { list1ItemsAreInList2 } from '@/operations/lists';

export default {
    props: {
        ingredients: {type: Array as PropType<string[]>, required: true}
    },
    data() {
        return {
            foundRecipes: [] as IRecipe[]
        };
    },
    async created() {
        const recipes = await getRecipes();

        this.foundRecipes = recipes.filter((recipes) => {
            const canDoRecipe = list1ItemsAreInList2(recipes.ingredients, this.ingredients);

            return canDoRecipe;
        })
    },
    components: { MainButton, CardRecipe },
    emits: ['editRecipes']
}
</script>

<template>
    <section class="show-recipes">
        <h1 class="header title-recipes">Recipes</h1>

        <p class="paragraph-lg found-results">
            Found results: {{ foundRecipes.length }}
        </p>

        <div v-if="foundRecipes.length" class="recipes-wrapper">
            <p class="paragraph-lg information">
                See the recipe options we found with the ingredients you have lying around!
            </p>

            <ul class="recipes">
                <li v-for="recipe of foundRecipes" :key="recipe.name">
                    <CardRecipe :recipe="recipe" />
                </li>
            </ul>
        </div>

        <div v-else class="not-found-recipes">
            <p class="paragraph-lg not-found-recipes__info">
                Oops, we didn't find results for your combination. Let's try again?
            </p>

            <img src="../assets/images/no-recipes.png"
                alt="Drawing of a broken egg. The gem has a face with a sad expression.">
        </div>

        <MainButton text="Edit List" @click="$emit('editRecipes')" />
    </section>
</template>

<style scoped>
.show-recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.title-recipes {
    color: var(--medium-green, #3D6D4A);
    margin-bottom: 1.5rem;
}

.found-results {
    color: var(--medium-green, #3D6D4A);
    margin-bottom: 0.5rem;
}

.recipes-wrapper {
    margin-bottom: 3.5rem;
}

.information {
    margin-bottom: 2rem;
}

.recipes {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.not-found-recipes {
    margin-bottom: 2rem;
}

.not-found-recipes__info {
    margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
    .recipes-wrapper {
        margin-bottom: 2rem;
    }
}
</style>

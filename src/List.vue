<template>
    <form>
        <h1>Cities</h1>
        Search city: <input type="text" v-model="searchName"/>
        <label><input type="checkbox" v-model="isCaseInsensitive"> search as case insensitive</label>
        <fieldset>
            <legend>Cities list:</legend>
            <ul>
                <li v-for="name in findCity"> {{ name }}</li>
            </ul>
        </fieldset>
    </form>
</template>

<script>

    import FakerMixin from "./FakerMixin";

    export default {
        name: "List",
        mixins: [FakerMixin],
        props: {
            maxListSize: {
                type: Number,
                default: 5,
            },
        },
        data() {
            return {
                cities: [],
                searchName: '',
                isCaseInsensitive: false,
            }
        },
        computed: {
            findCity() {
                return this.cities.filter((city) => {
                    const searchPattern = this.isCaseInsensitive ? this.searchName.toLocaleLowerCase() : this.searchName;
                    const currentCity = this.isCaseInsensitive ? city.toLocaleLowerCase() : city;
                    return currentCity.indexOf(searchPattern) !== -1;
                });
            },
        },
    }
</script>

<style scoped>
    fieldset > legend {
        font-size: 1.32rem;
        padding: 1rem;
    }
</style>
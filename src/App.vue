<template>
    <div id="app">
        <p v-colored:background.fontSize="'red'">{{ title }}</p>
        <p v-colored:color.delay.fontSize="'red'">{{ title }}</p>
        <p v-rainbow="'blue'">{{ title }}</p>
        <hr>
        <input type="text" v-model="searchName"/> {{ searchName }}
        <hr>
        <label><input type="checkbox" v-model="isCaseInsensitive"> search as case insensitive</label>
        <fieldset>
            <legend>Cities list:</legend>
            <ul>
                <li v-for="name in findCity"> {{ name }}</li>
            </ul>
        </fieldset>
    </div>
</template>

<script>
    import faker from 'faker';
    const fakerCities = [], MAX_FAKER_CITIES = 25;
    export default {
        beforeCreate() {
            for (let i = 0, max = MAX_FAKER_CITIES; i < max; i++) {
                fakerCities.push(faker.address.city())
            }
            console.log(fakerCities);
        },
        name: 'app',
        data() {
            return {
                title: "Hello world",
                cities: fakerCities,
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
        directives: {
            'rainbow': {
                bind(element, bindings) {
                    const initColor = element.style.color;
                    const blinkColor = bindings.value || "red";
                    let count = 0;
                    setInterval(() => {
                        element.style.color = (count % 2) ? initColor : blinkColor;
                        count += 1;
                    }, 1000);

                },
            }
        }
    }
</script>

<style>
</style>

<template>
    <div id="app">
        <p v-colored:background.fontSize="'red'">{{ title }}</p>
        <p v-colored:color.delay.fontSize="'red'">{{ title }}</p>
        <p v-rainbow="'blue'">{{ title }}</p>
        <hr>
        <List :maxListSize="10"></List>
        <List :maxListSize="5"></List>
        <List></List>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                title: "Hello world",
            }
        },
        directives: {
            "rainbow": {
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

import faker from 'faker';

export default {
    created() {
        const max = this.maxListSize || 6;
        for (let i = 0; i < max; i++) {
            this.cities.push(faker.address.city())
        }
    },
    data() {
        return {
            cities: [],
        }
    }
}

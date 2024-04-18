import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const PLANS = [
    { title: 'Anime', value: 'anime' },
    { title: 'Bollywood', value: 'bollywood' },
    { title: 'Hollywood', value: 'hollywood' },
    { title: 'Marathi', value: 'marathi' },
    { title: 'South', value: 'south' },
]

export default defineType({
    name: 'origin',
    title: 'Origin',
    type: 'string',
    options: {
        list: PLANS.map(({ title, value }) => ({ title, value })),
        layout: 'dropdown',
    },
})
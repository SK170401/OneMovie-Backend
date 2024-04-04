import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const PLANS = [
    { title: 'Hindi', value: 'hindi' },
    { title: 'Hollywood', value: 'hollywood' },
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
import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const PLANS = [
    { title: 'English', value: 'English' },
    { title: 'Hindi', value: 'Hindi' },
    { title: 'Marathi', value: 'Marathi' },
    { title: 'Telugu', value: 'Telugu' },
]

export default defineType({
    name: 'language',
    title: 'Language',
    type: 'string',
    options: {
        list: PLANS.map(({ title, value }) => ({ title, value })),
        layout: 'dropdown',
    },
})
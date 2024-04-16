import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const PLANS = [
   { title: 'English', value: 'English' },
    { title: 'Hindi', value: 'Hindi' },
    { title: 'Japanese', value: 'Japanese' },
    { title: 'Korean', value: 'Korean' },
    { title: 'French', value: 'French' },
    { title: 'Spanish', value: 'Spanish' },
    { title: 'Tamil', value: 'Tamil' },
    { title: 'Telugu', value: 'Telugu' },
    { title: 'Malayalam', value: 'Malayalam' },
    { title: 'Kannada', value: 'Kannada' },
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
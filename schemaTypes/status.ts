import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const PLANS = [
    { title: 'Upcoming', value: 'upcoming' },
    { title: 'New', value: 'new' },
    { title: 'Trending', value: 'trending' },
    { title: 'Normal', value: 'normal' },
]

export default defineType({
    name: 'status',
    title: 'Status',
    type: 'string',
    initialValue: 'normal',
    options: {
        list: PLANS.map(({ title, value }) => ({ title, value })),
        layout: 'dropdown',
    },
})
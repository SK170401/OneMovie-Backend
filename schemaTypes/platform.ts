import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const PLANS = [
    { title: 'Amazon Prime', value: 'Amazon Prime' },
    { title: 'Disney+ Hotstar', value: 'Disney+ Hotstar' },
    { title: 'Netflix', value: 'Netflix' },
    { title: 'ZEE5', value: 'ZEE5' },
]

export default defineType({
    name: 'platform',
    title: 'Platform',
    type: 'string',
    options: {
        list: PLANS.map(({ title, value }) => ({ title, value })),
        layout: 'dropdown',
    },
})
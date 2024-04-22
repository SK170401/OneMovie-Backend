// collection.js

export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'origin',
            title: 'Origin',
            type: 'array',
            of: [{ type: 'origin' }],
        },
        {
            name: 'movies',
            title: 'Movies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'movie' } }]
        },
        {
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'subCollection',
            title: 'Sub Collection',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'subCollection' } }]
        }
    ]
}

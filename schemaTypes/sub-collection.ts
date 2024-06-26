// subCollection.js

export default {
    name: 'subCollection',
    title: 'Sub Collection',
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
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'movies',
            title: 'Movies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'movie' } }]
        }
    ]
}
// movieCollection.js

export default {
    name: 'movieCollection',
    title: 'Movie Collection',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'reference',
            to: [{ type: 'movieCollection' }],
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'subCollections',
            title: 'Sub-Collections',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'reference',
                            to: [{ type: 'subCollection' }],
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'movies',
                            title: 'Movies',
                            type: 'array',
                            of: [{ type: 'reference', to: { type: 'movie' } }]
                        }
                    ]
                }
            ]
        }
    ]
}

// collection.js

// export default {
//     name: 'collection',
//     title: 'Collection',
//     type: 'document',
//     fields: [
//         {
//             name: 'name',
//             title: 'Name',
//             type: 'reference',
//             to: [{ type: 'collectionName' }],
//             validation: (Rule: any) => Rule.required(),
//             description: 'Select the name for this collection'
//         },
//         {
//             name: 'parentCollection',
//             title: 'Parent Collection',
//             type: 'reference',
//             to: [{ type: 'collection' }],
//             description: 'Select the parent collection if applicable'
//         },
//         {
//             name: 'subCollections',
//             title: 'Sub-Collections',
//             type: 'array',
//             of: [{ type: 'reference', to: [{ type: 'collection' }] }],
//             description: 'Select the sub-collections for this collection'
//         },
//         {
//             name: 'movies',
//             title: 'Movies',
//             type: 'array',
//             of: [{ type: 'reference', to: [{ type: 'movie' }] }],
//             description: 'Select the movies for this collection'
//         }
//     ]
// }

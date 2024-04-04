export default {
    name: 'mainCollection',
    title: 'Main Collection',
    type: 'document',
    fields: [
        {
            name: 'subCollections',
            title: 'Sub Collections',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'subCollection' }]
                }
            ]
        }
    ]
}
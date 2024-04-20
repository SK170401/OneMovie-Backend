// export default {
//     name: 'subCollection',
//     title: 'Sub Collection',
//     type: 'document',
//     fields: [
//         {
//             name: 'name',
//             title: 'Sub Collection Name',
//             type: 'string',
//         },
//         {
//             name: 'collections',
//             title: 'Collections',
//             type: 'array',
//             of: [
//                 {
//                     type: 'reference',
//                     to: [{ type: 'collection' }]
//                 }
//             ]
//         }
//     ]
// }


// subCollection.js

export default {
    name: 'subCollection',
    title: 'Sub Collection',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }
        // Add more fields as needed
    ]
}

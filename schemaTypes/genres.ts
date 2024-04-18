import { defineType } from 'sanity'

// We need will extend and import these in the custom input component later
export const GENRES = [
    {
        title: "Action",
        value: "action"
    },
    {
        title: "Adventure",
        value: "adventure"
    },
    {
        title: "Animation",
        value: "animation"
    },
    {
        title: "Biography",
        value: "biography"
    },
    {
        title: "Comedy",
        value: "comedy"
    },
    {
        title: "Crime",
        value: "crime"
    },
    {
        title: "Drama",
        value: "drama"
    },
    {
        title: "Fantasy",
        value: "fantasy"
    },
    {
        title: "Horror",
        value: "horror"
    },
    {
        title: "Mystery",
        value: "mystery"
    },
    {
        title: "Romance",
        value: "romance"
    },
    {
        title: "Sci-Fi",
        value: "sci-fi"
    },
    {
        title: "Thriller",
        value: "thriller"
    }
];



export default defineType({
    name: 'genres',
    title: 'Genres',
    type: 'string',
    options: {
        list: GENRES.map(({ title, value }) => ({ title, value })),
        layout: 'dropdown',
    },
})


// genres.js

// export default {
//     name: 'genres',
//     title: 'Genres',
//     type: 'document',
//     fields: [
//         {
//             name: 'title',
//             title: 'Title',
//             type: 'string',
//         },
//         {
//             name: 'value',
//             title: 'Value',
//             type: 'string',
//         },
//     ],
// };

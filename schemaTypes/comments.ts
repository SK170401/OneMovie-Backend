// sanity/schemas/comment.js
export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime', // Define a date field using the 'datetime' type
        },
    ]
}
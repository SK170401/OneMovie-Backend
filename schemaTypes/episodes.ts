// @ts-check
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'episodes',
    title: 'Episodes',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title', // Add the title field here
            type: 'string'
        }),
        defineField(
            {
                name: 'hd',
                title: '720P',
                type: 'array',
                of: [
                    {
                        name: 'ep',
                        title: 'Episode',
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'number',
                                title: 'Episode',
                                type: 'string'
                            }),
                            defineField({
                                name: 'link',
                                title: 'Link',
                                type: 'string'
                            }),
                            defineField({
                                name: 'size',
                                title: 'Size',
                                type: 'string'
                            })
                        ]
                    },
                ],
            }),
        defineField({
            name: 'fhd',
            title: '1080P',
            type: 'array',
            of: [
                {
                    name: 'ep',
                    title: 'Episode',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'number',
                            title: 'Episode',
                            type: 'string'
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'string'
                        }),
                        defineField({
                            name: 'size',
                            title: 'Size',
                            type: 'string'
                        })
                    ]
                },
            ],
        }),
        defineField({
            name: 'uhd',
            title: '4K',
            type: 'array',
            of: [
                {
                    name: 'ep',
                    title: 'Episode',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'number',
                            title: 'Episode',
                            type: 'string'
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'string'
                        }),
                        defineField({
                            name: 'size',
                            title: 'Size',
                            type: 'string'
                        })
                    ]
                },
            ],
        }),
        // defineField({
        //     name: 'uhdzip',
        //     title: '4K ZIP',
        //     type: 'string',
        // }),
        // defineField({
        //     name: 'externalId',
        //     title: 'External ID',
        //     type: 'number',
        // }),
        // defineField({
        //     name: 'externalCreditId',
        //     title: 'External Credit ID',
        //     type: 'string',
        // }),
    ],
})

import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'

export default defineType({
    name: 'south',
    title: 'South',
    type: 'document',
    icon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        }),
        defineField({
            name: 'overview',
            title: 'Overview',
            type: 'string',
        }),
        defineField({
            name: 'releaseDate',
            title: 'Release Date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            }
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
        }),
        defineField({
            name: 'poster',
            title: 'Poster Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField(
            {
                name: 'gallery',
                type: 'array',
                of: [
                    {
                        type: 'image',
                        options: {
                            hotspot: true,
                        }
                    },
                ],
                options: {
                    layout: 'grid',
                },
            }),
        defineField({
            name: 'trailer',
            title: 'Trailer Url',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'externalId',
            title: 'External ID',
            type: 'number',
        }),
        defineField({
            name: 'popularity',
            title: 'Popularity',
            type: 'number',
        }),
        defineField({
            name: 'castMembers',
            title: 'Cast Members',
            type: 'array',
            of: [{ type: 'castMember' }],
        }),
        defineField({
            name: 'download',
            title: 'Download',
            type: 'array',
            of: [{ type: 'download' }],
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'array',
            of: [{ type: 'status' }],
        }),
        defineField({
            name: 'genres',
            title: 'Genres',
            type: 'array',
            of: [{ type: 'genres' }],
        }),
        // {
        //   name: 'genres',
        //   title: 'Genres',
        //   type: 'array',
        //   of: [{ type: 'reference', to: [{ type: 'genres' }] }],
        // },
        defineField({
            name: 'origin',
            title: 'Origin',
            type: 'array',
            of: [{ type: 'origin' }],
        }),
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'array',
            of: [{ type: 'platform' }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'tags' }],
        }),
        defineField({
            name: 'mainCollection',
            title: 'Collection',
            type: 'array',
            of: [{ type: 'mainCollection' }],
        }),
        defineField({
            name: 'language',
            title: 'Languages',
            type: 'array',
            of: [{ type: 'language'}],
          }),
    ],
    orderings: [
        {
            title: 'Release Date, New',
            name: 'releaseDateDesc',
            by: [
                { field: 'releaseDate', direction: 'desc' }
            ]
        },
        {
            title: 'Release Date, Old',
            name: 'releaseDateAsc',
            by: [
                { field: 'releaseDate', direction: 'asc' }
            ]
        },
        {
            title: 'Popularity',
            name: 'popularityDesc',
            by: [
                { field: 'popularity', direction: 'desc' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            date: 'releaseDate',
            media: 'poster',
            subtitle: 'status',

            // download: 'download.title',
            // episodes: 'episodes.title',
        },
        prepare(selection) {
            const year = selection.date && selection.date.split('-')[0]
            // const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

            return {
                title: `${selection.title} ${year ? `(${year})` : ''}`,
                date: selection.date,
                // subtitle: cast,,
                subtitle: selection.subtitle[0],
                media: selection.media,
            }
        },
    },
})

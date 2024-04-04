// @ts-check
// import { defineField, defineType } from 'sanity'

// export default defineType({
//   name: 'download',
//   title: 'Download',
//   type: 'object',
//   fields: [
//     defineField({
//       name: 'hd',
//       title: '720P',
//       type: 'string',
//     }),
//     defineField({
//       name: 'hdzip',
//       title: '720P ZIP',
//       type: 'string',
//     }),
//     defineField({
//       name: 'fhd',
//       title: '1080P',
//       type: 'string',
//     }),
//     defineField({
//       name: 'fhdzip',
//       title: '1080P ZIP',
//       type: 'string',
//     }),
//     defineField({
//       name: 'uhd',
//       title: '4K',
//       type: 'string',
//     }),
//     defineField({
//       name: 'uhdzip',
//       title: '4K ZIP',
//       type: 'string',
//     }),
//     defineField({
//       name: 'externalId',
//       title: 'External ID',
//       type: 'number',
//     }),
//     defineField({
//       name: 'externalCreditId',
//       title: 'External Credit ID',
//       type: 'string',
//     }),
//   ],
//   preview: {
//     select: {
//       name: 'person.name',
//       job: 'job',
//       department: 'department',
//       media: 'person.image',
//     },
//     prepare(selection) {
//       const { name, job, department, media } = selection
//       return {
//         title: name,
//         subtitle: `${job} [${department}]`,
//         media,
//       }
//     },
//   },
// })

// @ts-check
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'download',
  title: 'Download',
  type: 'object',
  fields: [
    defineField({
      name: 'hd',
      title: '720P',
      type: 'array',
      of: [
        {
          name: 'title',
          title: 'Title',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
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
          name: 'title',
          title: 'Title',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
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
          name: 'title',
          title: 'Title',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
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
  ],
})
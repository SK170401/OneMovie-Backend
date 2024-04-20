import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import download from './download'
import episodes from './episodes'
import status from './status'
import genres from './genres'
import profile from './profile'
import origin from './origin'
import series from './series'
import platform from './platform'
import tags from './tags'
import collection from './mainCollection'
import subCollection from './sub-collection'
// import collections from './collections'
import bollywood from './bollywood'
import bollywoodSeries from './bollywoodSeries'
import languages from './languages'
import south from './south'
import anime from './anime'
import marathi from './marathi'
import comments from './comments'

export const schemaTypes = [
  // Document types
  profile,
  movie,
  series,
  bollywood,
  bollywoodSeries,
  south,
  marathi,
  anime,
  person,
  screening,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
  collection,
  comments,
  // colle  ctions,
  subCollection,
  download,
  episodes,
  languages,
  status,
  genres,
  tags,
  platform,
  origin,
]

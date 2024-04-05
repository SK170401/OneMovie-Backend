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
import collections from './collections'
import bollywood from './bollywood'
import bollywoodSeries from './bollywoodSeries'

export const schemaTypes = [
  // Document types
  profile,
  movie,
  bollywood,
  series,
  bollywoodSeries,
  person,
  screening,
  
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
  collection,
  collections,
  subCollection,
  download,
  episodes,
  status,
  genres,
  tags,
  platform,
  origin,
]

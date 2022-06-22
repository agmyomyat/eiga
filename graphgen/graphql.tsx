import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type ComponentTvSeriesEpisodeInput = {
  episodeID: Scalars['Int'];
  freeServer1?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  episodeName?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Time']>;
};

export type ComponentTvSeriesEpisodes = {
  __typename?: 'ComponentTvSeriesEpisodes';
  id: Scalars['ID'];
  episodeID: Scalars['Int'];
  freeServer1?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  episodeName?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Time']>;
};

export type ComponentTvSeriesSeason = {
  __typename?: 'ComponentTvSeriesSeason';
  id: Scalars['ID'];
  episodes?: Maybe<Array<Maybe<ComponentTvSeriesEpisodes>>>;
  seasonID?: Maybe<Scalars['Int']>;
};

export type ComponentTvSeriesSeasonInput = {
  episodes?: Maybe<Array<Maybe<ComponentTvSeriesEpisodeInput>>>;
  seasonID?: Maybe<Scalars['Int']>;
};



export type EmbedUploader = {
  __typename?: 'EmbedUploader';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  verify?: Maybe<Scalars['Boolean']>;
};

export type EmbedUploaderAggregator = {
  __typename?: 'EmbedUploaderAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<EmbedUploaderAggregatorSum>;
  avg?: Maybe<EmbedUploaderAggregatorAvg>;
  min?: Maybe<EmbedUploaderAggregatorMin>;
  max?: Maybe<EmbedUploaderAggregatorMax>;
};

export type EmbedUploaderAggregatorAvg = {
  __typename?: 'EmbedUploaderAggregatorAvg';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type EmbedUploaderAggregatorMax = {
  __typename?: 'EmbedUploaderAggregatorMax';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type EmbedUploaderAggregatorMin = {
  __typename?: 'EmbedUploaderAggregatorMin';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type EmbedUploaderAggregatorSum = {
  __typename?: 'EmbedUploaderAggregatorSum';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type EmbedUploaderConnection = {
  __typename?: 'EmbedUploaderConnection';
  values?: Maybe<Array<Maybe<EmbedUploader>>>;
  groupBy?: Maybe<EmbedUploaderGroupBy>;
  aggregate?: Maybe<EmbedUploaderAggregator>;
};

export type EmbedUploaderConnectionCreated_At = {
  __typename?: 'EmbedUploaderConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderConnectionId = {
  __typename?: 'EmbedUploaderConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderConnectionPassword = {
  __typename?: 'EmbedUploaderConnectionPassword';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderConnectionTokenVersion = {
  __typename?: 'EmbedUploaderConnectionTokenVersion';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderConnectionUpdated_At = {
  __typename?: 'EmbedUploaderConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderConnectionUserName = {
  __typename?: 'EmbedUploaderConnectionUserName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderConnectionVerify = {
  __typename?: 'EmbedUploaderConnectionVerify';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<EmbedUploaderConnection>;
};

export type EmbedUploaderGroupBy = {
  __typename?: 'EmbedUploaderGroupBy';
  id?: Maybe<Array<Maybe<EmbedUploaderConnectionId>>>;
  created_at?: Maybe<Array<Maybe<EmbedUploaderConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<EmbedUploaderConnectionUpdated_At>>>;
  userName?: Maybe<Array<Maybe<EmbedUploaderConnectionUserName>>>;
  password?: Maybe<Array<Maybe<EmbedUploaderConnectionPassword>>>;
  tokenVersion?: Maybe<Array<Maybe<EmbedUploaderConnectionTokenVersion>>>;
  verify?: Maybe<Array<Maybe<EmbedUploaderConnectionVerify>>>;
};

export type EmbedUploaderInput = {
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  verify?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EmbedVideo = {
  __typename?: 'EmbedVideo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  movieName?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  eigaLink?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  eigaLink2?: Maybe<Scalars['String']>;
  mm_sub?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideo2 = {
  __typename?: 'EmbedVideo2';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  embedLink?: Maybe<Scalars['String']>;
  movie_name?: Maybe<Scalars['String']>;
  original_link?: Maybe<Scalars['String']>;
  mm_sub?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  video_size?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  upload_status?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideo2Aggregator = {
  __typename?: 'EmbedVideo2Aggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<EmbedVideo2AggregatorSum>;
  avg?: Maybe<EmbedVideo2AggregatorAvg>;
  min?: Maybe<EmbedVideo2AggregatorMin>;
  max?: Maybe<EmbedVideo2AggregatorMax>;
};

export type EmbedVideo2AggregatorAvg = {
  __typename?: 'EmbedVideo2AggregatorAvg';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2AggregatorMax = {
  __typename?: 'EmbedVideo2AggregatorMax';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2AggregatorMin = {
  __typename?: 'EmbedVideo2AggregatorMin';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2AggregatorSum = {
  __typename?: 'EmbedVideo2AggregatorSum';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2Connection = {
  __typename?: 'EmbedVideo2Connection';
  values?: Maybe<Array<Maybe<EmbedVideo2>>>;
  groupBy?: Maybe<EmbedVideo2GroupBy>;
  aggregate?: Maybe<EmbedVideo2Aggregator>;
};

export type EmbedVideo2ConnectionCreated_At = {
  __typename?: 'EmbedVideo2ConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionEmbedLink = {
  __typename?: 'EmbedVideo2ConnectionEmbedLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionEng_Sub = {
  __typename?: 'EmbedVideo2ConnectionEng_sub';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionEpisode = {
  __typename?: 'EmbedVideo2ConnectionEpisode';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionId = {
  __typename?: 'EmbedVideo2ConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionMm_Sub = {
  __typename?: 'EmbedVideo2ConnectionMm_sub';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionMovie_Name = {
  __typename?: 'EmbedVideo2ConnectionMovie_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionOriginal_Link = {
  __typename?: 'EmbedVideo2ConnectionOriginal_link';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionPublished_At = {
  __typename?: 'EmbedVideo2ConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionSeason = {
  __typename?: 'EmbedVideo2ConnectionSeason';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionUpdated_At = {
  __typename?: 'EmbedVideo2ConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionUpload_Status = {
  __typename?: 'EmbedVideo2ConnectionUpload_status';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionUploader = {
  __typename?: 'EmbedVideo2ConnectionUploader';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2ConnectionVideo_Size = {
  __typename?: 'EmbedVideo2ConnectionVideo_size';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideo2Connection>;
};

export type EmbedVideo2GroupBy = {
  __typename?: 'EmbedVideo2GroupBy';
  id?: Maybe<Array<Maybe<EmbedVideo2ConnectionId>>>;
  created_at?: Maybe<Array<Maybe<EmbedVideo2ConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<EmbedVideo2ConnectionUpdated_At>>>;
  embedLink?: Maybe<Array<Maybe<EmbedVideo2ConnectionEmbedLink>>>;
  movie_name?: Maybe<Array<Maybe<EmbedVideo2ConnectionMovie_Name>>>;
  original_link?: Maybe<Array<Maybe<EmbedVideo2ConnectionOriginal_Link>>>;
  mm_sub?: Maybe<Array<Maybe<EmbedVideo2ConnectionMm_Sub>>>;
  eng_sub?: Maybe<Array<Maybe<EmbedVideo2ConnectionEng_Sub>>>;
  video_size?: Maybe<Array<Maybe<EmbedVideo2ConnectionVideo_Size>>>;
  season?: Maybe<Array<Maybe<EmbedVideo2ConnectionSeason>>>;
  episode?: Maybe<Array<Maybe<EmbedVideo2ConnectionEpisode>>>;
  upload_status?: Maybe<Array<Maybe<EmbedVideo2ConnectionUpload_Status>>>;
  uploader?: Maybe<Array<Maybe<EmbedVideo2ConnectionUploader>>>;
  published_at?: Maybe<Array<Maybe<EmbedVideo2ConnectionPublished_At>>>;
};

export type EmbedVideo2Input = {
  embedLink?: Maybe<Scalars['String']>;
  movie_name?: Maybe<Scalars['String']>;
  original_link?: Maybe<Scalars['String']>;
  mm_sub?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  video_size?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  upload_status?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EmbedVideoAggregator = {
  __typename?: 'EmbedVideoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<EmbedVideoAggregatorSum>;
  avg?: Maybe<EmbedVideoAggregatorAvg>;
  min?: Maybe<EmbedVideoAggregatorMin>;
  max?: Maybe<EmbedVideoAggregatorMax>;
};

export type EmbedVideoAggregatorAvg = {
  __typename?: 'EmbedVideoAggregatorAvg';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideoAggregatorMax = {
  __typename?: 'EmbedVideoAggregatorMax';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideoAggregatorMin = {
  __typename?: 'EmbedVideoAggregatorMin';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideoAggregatorSum = {
  __typename?: 'EmbedVideoAggregatorSum';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type EmbedVideoConnection = {
  __typename?: 'EmbedVideoConnection';
  values?: Maybe<Array<Maybe<EmbedVideo>>>;
  groupBy?: Maybe<EmbedVideoGroupBy>;
  aggregate?: Maybe<EmbedVideoAggregator>;
};

export type EmbedVideoConnectionCreated_At = {
  __typename?: 'EmbedVideoConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionEigaLink = {
  __typename?: 'EmbedVideoConnectionEigaLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionEigaLink2 = {
  __typename?: 'EmbedVideoConnectionEigaLink2';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionEng_Sub = {
  __typename?: 'EmbedVideoConnectionEng_sub';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionEpisode = {
  __typename?: 'EmbedVideoConnectionEpisode';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionFileSize = {
  __typename?: 'EmbedVideoConnectionFileSize';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionId = {
  __typename?: 'EmbedVideoConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionMm_Sub = {
  __typename?: 'EmbedVideoConnectionMm_sub';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionMovieName = {
  __typename?: 'EmbedVideoConnectionMovieName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionOriginalLink = {
  __typename?: 'EmbedVideoConnectionOriginalLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionPublished_At = {
  __typename?: 'EmbedVideoConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionSeason = {
  __typename?: 'EmbedVideoConnectionSeason';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionUpdated_At = {
  __typename?: 'EmbedVideoConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionUploadStatus = {
  __typename?: 'EmbedVideoConnectionUploadStatus';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoConnectionUploader = {
  __typename?: 'EmbedVideoConnectionUploader';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EmbedVideoConnection>;
};

export type EmbedVideoGroupBy = {
  __typename?: 'EmbedVideoGroupBy';
  id?: Maybe<Array<Maybe<EmbedVideoConnectionId>>>;
  created_at?: Maybe<Array<Maybe<EmbedVideoConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<EmbedVideoConnectionUpdated_At>>>;
  movieName?: Maybe<Array<Maybe<EmbedVideoConnectionMovieName>>>;
  season?: Maybe<Array<Maybe<EmbedVideoConnectionSeason>>>;
  episode?: Maybe<Array<Maybe<EmbedVideoConnectionEpisode>>>;
  eigaLink?: Maybe<Array<Maybe<EmbedVideoConnectionEigaLink>>>;
  originalLink?: Maybe<Array<Maybe<EmbedVideoConnectionOriginalLink>>>;
  uploadStatus?: Maybe<Array<Maybe<EmbedVideoConnectionUploadStatus>>>;
  uploader?: Maybe<Array<Maybe<EmbedVideoConnectionUploader>>>;
  fileSize?: Maybe<Array<Maybe<EmbedVideoConnectionFileSize>>>;
  eng_sub?: Maybe<Array<Maybe<EmbedVideoConnectionEng_Sub>>>;
  eigaLink2?: Maybe<Array<Maybe<EmbedVideoConnectionEigaLink2>>>;
  mm_sub?: Maybe<Array<Maybe<EmbedVideoConnectionMm_Sub>>>;
  published_at?: Maybe<Array<Maybe<EmbedVideoConnectionPublished_At>>>;
};

export type EmbedVideoInput = {
  movieName?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  eigaLink?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  eigaLink2?: Maybe<Scalars['String']>;
  mm_sub?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FavouriteMovieInput = {
  movie?: Maybe<Scalars['ID']>;
  user_info?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FavouriteMovies = {
  __typename?: 'FavouriteMovies';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  movie?: Maybe<Movies>;
  user_info?: Maybe<UserData>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type FavouriteMoviesAggregator = {
  __typename?: 'FavouriteMoviesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FavouriteMoviesConnection = {
  __typename?: 'FavouriteMoviesConnection';
  values?: Maybe<Array<Maybe<FavouriteMovies>>>;
  groupBy?: Maybe<FavouriteMoviesGroupBy>;
  aggregate?: Maybe<FavouriteMoviesAggregator>;
};

export type FavouriteMoviesConnectionCreated_At = {
  __typename?: 'FavouriteMoviesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FavouriteMoviesConnection>;
};

export type FavouriteMoviesConnectionId = {
  __typename?: 'FavouriteMoviesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FavouriteMoviesConnection>;
};

export type FavouriteMoviesConnectionMovie = {
  __typename?: 'FavouriteMoviesConnectionMovie';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FavouriteMoviesConnection>;
};

export type FavouriteMoviesConnectionPublished_At = {
  __typename?: 'FavouriteMoviesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FavouriteMoviesConnection>;
};

export type FavouriteMoviesConnectionUpdated_At = {
  __typename?: 'FavouriteMoviesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FavouriteMoviesConnection>;
};

export type FavouriteMoviesConnectionUser_Info = {
  __typename?: 'FavouriteMoviesConnectionUser_info';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FavouriteMoviesConnection>;
};

export type FavouriteMoviesGroupBy = {
  __typename?: 'FavouriteMoviesGroupBy';
  id?: Maybe<Array<Maybe<FavouriteMoviesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<FavouriteMoviesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<FavouriteMoviesConnectionUpdated_At>>>;
  movie?: Maybe<Array<Maybe<FavouriteMoviesConnectionMovie>>>;
  user_info?: Maybe<Array<Maybe<FavouriteMoviesConnectionUser_Info>>>;
  published_at?: Maybe<Array<Maybe<FavouriteMoviesConnectionPublished_At>>>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type GenreInput = {
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Genres = {
  __typename?: 'Genres';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type GenresAggregator = {
  __typename?: 'GenresAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GenresConnection = {
  __typename?: 'GenresConnection';
  values?: Maybe<Array<Maybe<Genres>>>;
  groupBy?: Maybe<GenresGroupBy>;
  aggregate?: Maybe<GenresAggregator>;
};

export type GenresConnectionCreated_At = {
  __typename?: 'GenresConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GenresConnection>;
};

export type GenresConnectionId = {
  __typename?: 'GenresConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GenresConnection>;
};

export type GenresConnectionName = {
  __typename?: 'GenresConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GenresConnection>;
};

export type GenresConnectionPublished_At = {
  __typename?: 'GenresConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GenresConnection>;
};

export type GenresConnectionUpdated_At = {
  __typename?: 'GenresConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GenresConnection>;
};

export type GenresConnectionUuid = {
  __typename?: 'GenresConnectionUuid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GenresConnection>;
};

export type GenresGroupBy = {
  __typename?: 'GenresGroupBy';
  id?: Maybe<Array<Maybe<GenresConnectionId>>>;
  created_at?: Maybe<Array<Maybe<GenresConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<GenresConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<GenresConnectionName>>>;
  uuid?: Maybe<Array<Maybe<GenresConnectionUuid>>>;
  published_at?: Maybe<Array<Maybe<GenresConnectionPublished_At>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | TypeRegisterEmbedUploader | Typeloginembeduploader | VerifyTokenPayload | OptionalMovies | CheckValidReferralCodeResult | Transaction_Status_Response | TransactionPaymentTokenResponse | ReturnSignup | ReturnUserData | UpdateMovieReturn | EmbedUploader | EmbedUploaderConnection | EmbedUploaderAggregator | EmbedUploaderAggregatorSum | EmbedUploaderAggregatorAvg | EmbedUploaderAggregatorMin | EmbedUploaderAggregatorMax | EmbedUploaderGroupBy | EmbedUploaderConnectionId | EmbedUploaderConnectionCreated_At | EmbedUploaderConnectionUpdated_At | EmbedUploaderConnectionUserName | EmbedUploaderConnectionPassword | EmbedUploaderConnectionTokenVersion | EmbedUploaderConnectionVerify | CreateEmbedUploaderPayload | UpdateEmbedUploaderPayload | DeleteEmbedUploaderPayload | EmbedVideo | EmbedVideoConnection | EmbedVideoAggregator | EmbedVideoAggregatorSum | EmbedVideoAggregatorAvg | EmbedVideoAggregatorMin | EmbedVideoAggregatorMax | EmbedVideoGroupBy | EmbedVideoConnectionId | EmbedVideoConnectionCreated_At | EmbedVideoConnectionUpdated_At | EmbedVideoConnectionMovieName | EmbedVideoConnectionSeason | EmbedVideoConnectionEpisode | EmbedVideoConnectionEigaLink | EmbedVideoConnectionOriginalLink | EmbedVideoConnectionUploadStatus | EmbedVideoConnectionUploader | EmbedVideoConnectionFileSize | EmbedVideoConnectionEng_Sub | EmbedVideoConnectionEigaLink2 | EmbedVideoConnectionMm_Sub | EmbedVideoConnectionPublished_At | CreateEmbedVideoPayload | UpdateEmbedVideoPayload | DeleteEmbedVideoPayload | EmbedVideo2 | EmbedVideo2Connection | EmbedVideo2Aggregator | EmbedVideo2AggregatorSum | EmbedVideo2AggregatorAvg | EmbedVideo2AggregatorMin | EmbedVideo2AggregatorMax | EmbedVideo2GroupBy | EmbedVideo2ConnectionId | EmbedVideo2ConnectionCreated_At | EmbedVideo2ConnectionUpdated_At | EmbedVideo2ConnectionEmbedLink | EmbedVideo2ConnectionMovie_Name | EmbedVideo2ConnectionOriginal_Link | EmbedVideo2ConnectionMm_Sub | EmbedVideo2ConnectionEng_Sub | EmbedVideo2ConnectionVideo_Size | EmbedVideo2ConnectionSeason | EmbedVideo2ConnectionEpisode | EmbedVideo2ConnectionUpload_Status | EmbedVideo2ConnectionUploader | EmbedVideo2ConnectionPublished_At | CreateEmbedVideo2Payload | UpdateEmbedVideo2Payload | DeleteEmbedVideo2Payload | FavouriteMovies | FavouriteMoviesConnection | FavouriteMoviesAggregator | FavouriteMoviesGroupBy | FavouriteMoviesConnectionId | FavouriteMoviesConnectionCreated_At | FavouriteMoviesConnectionUpdated_At | FavouriteMoviesConnectionMovie | FavouriteMoviesConnectionUser_Info | FavouriteMoviesConnectionPublished_At | CreateFavouriteMoviePayload | UpdateFavouriteMoviePayload | DeleteFavouriteMoviePayload | Genres | GenresConnection | GenresAggregator | GenresGroupBy | GenresConnectionId | GenresConnectionCreated_At | GenresConnectionUpdated_At | GenresConnectionName | GenresConnectionUuid | GenresConnectionPublished_At | CreateGenrePayload | UpdateGenrePayload | DeleteGenrePayload | Movies | MoviesConnection | MoviesAggregator | MoviesAggregatorSum | MoviesAggregatorAvg | MoviesAggregatorMin | MoviesAggregatorMax | MoviesGroupBy | MoviesConnectionId | MoviesConnectionCreated_At | MoviesConnectionUpdated_At | MoviesConnectionName | MoviesConnectionBody | MoviesConnectionUuid | MoviesConnectionFreeServer1 | MoviesConnectionPhoto_Url | MoviesConnectionFreeServer2 | MoviesConnectionVipServer1 | MoviesConnectionVipServer2 | MoviesConnectionPremiumOnly | MoviesConnectionRecommend | MoviesConnectionTv_Sery | MoviesConnectionQuality | MoviesConnectionViews | MoviesConnectionRelease_Date | MoviesConnectionDuration | MoviesConnectionIsSeries | MoviesConnectionImdb | MoviesConnectionAll_Time_Views | MoviesConnectionMmsub | MoviesConnectionSevendaysago | MoviesConnectionWide_Poster | MoviesConnectionPublished_At | CreateMoviePayload | UpdateMoviePayload | DeleteMoviePayload | ReferralCode | ReferralCodeConnection | ReferralCodeAggregator | ReferralCodeAggregatorSum | ReferralCodeAggregatorAvg | ReferralCodeAggregatorMin | ReferralCodeAggregatorMax | ReferralCodeGroupBy | ReferralCodeConnectionId | ReferralCodeConnectionCreated_At | ReferralCodeConnectionUpdated_At | ReferralCodeConnectionCode | ReferralCodeConnectionMonth | ReferralCodeConnectionUsed_Client_Uuid | ReferralCodeConnectionPublished_At | CreateReferralCodePayload | UpdateReferralCodePayload | DeleteReferralCodePayload | Transactions | TransactionsConnection | TransactionsAggregator | TransactionsGroupBy | TransactionsConnectionId | TransactionsConnectionCreated_At | TransactionsConnectionUpdated_At | TransactionsConnectionTotalAmount | TransactionsConnectionCreatedAt | TransactionsConnectionTransactionStatus | TransactionsConnectionMethodName | TransactionsConnectionMerchantOrderId | TransactionsConnectionTransactionId | TransactionsConnectionCustomerName | TransactionsConnectionProviderName | TransactionsConnectionQuantity | TransactionsConnectionPublished_At | CreateTransactionPayload | UpdateTransactionPayload | DeleteTransactionPayload | TvSeries | TvSeriesConnection | TvSeriesAggregator | TvSeriesGroupBy | TvSeriesConnectionId | TvSeriesConnectionCreated_At | TvSeriesConnectionUpdated_At | TvSeriesConnectionName | TvSeriesConnectionPublished_At | CreateTvSeryPayload | UpdateTvSeryPayload | DeleteTvSeryPayload | UserData | UserDataConnection | UserDataAggregator | UserDataAggregatorSum | UserDataAggregatorAvg | UserDataAggregatorMin | UserDataAggregatorMax | UserDataGroupBy | UserDataConnectionId | UserDataConnectionCreated_At | UserDataConnectionUpdated_At | UserDataConnectionUuid | UserDataConnectionVerify | UserDataConnectionExpire | UserDataConnectionTokenVersion | UserDataConnectionFuuid | UserDataConnectionPublished_At | CreateUserDatumPayload | UpdateUserDatumPayload | DeleteUserDatumPayload | WatchHistory | WatchHistoryConnection | WatchHistoryAggregator | WatchHistoryAggregatorSum | WatchHistoryAggregatorAvg | WatchHistoryAggregatorMin | WatchHistoryAggregatorMax | WatchHistoryGroupBy | WatchHistoryConnectionId | WatchHistoryConnectionCreated_At | WatchHistoryConnectionUpdated_At | WatchHistoryConnectionMovieName | WatchHistoryConnectionEpisode | WatchHistoryConnectionSeason | WatchHistoryConnectionUser_Data | WatchHistoryConnectionMovie | WatchHistoryConnectionLast_Updated | WatchHistoryConnectionCurrent_Time | WatchHistoryConnectionPublished_At | CreateWatchHistoryPayload | UpdateWatchHistoryPayload | DeleteWatchHistoryPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentTvSeriesEpisodes | ComponentTvSeriesSeason;

export type MovieInput = {
  name: Scalars['String'];
  body: Scalars['String'];
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  photo_url: Scalars['String'];
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly?: Maybe<Scalars['Boolean']>;
  recommend?: Maybe<Scalars['Boolean']>;
  tv_sery?: Maybe<Scalars['ID']>;
  quality: Scalars['String'];
  views?: Maybe<Scalars['Long']>;
  genres?: Maybe<Array<Maybe<Scalars['ID']>>>;
  release_date: Scalars['Int'];
  duration: Scalars['Time'];
  isSeries: Scalars['Boolean'];
  Imdb: Scalars['Float'];
  all_time_views?: Maybe<Scalars['Long']>;
  mmsub?: Maybe<Scalars['Boolean']>;
  sevendaysago?: Maybe<Scalars['String']>;
  wide_poster?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Movies = {
  __typename?: 'Movies';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  body: Scalars['String'];
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  photo_url: Scalars['String'];
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly: Scalars['Boolean'];
  recommend?: Maybe<Scalars['Boolean']>;
  tv_sery?: Maybe<TvSeries>;
  quality: Scalars['String'];
  views?: Maybe<Scalars['Long']>;
  release_date: Scalars['Int'];
  duration: Scalars['Time'];
  isSeries: Scalars['Boolean'];
  Imdb: Scalars['Float'];
  all_time_views?: Maybe<Scalars['Long']>;
  mmsub?: Maybe<Scalars['Boolean']>;
  sevendaysago?: Maybe<Scalars['String']>;
  wide_poster?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
};


export type MoviesGenresArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MoviesAggregator = {
  __typename?: 'MoviesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MoviesAggregatorSum>;
  avg?: Maybe<MoviesAggregatorAvg>;
  min?: Maybe<MoviesAggregatorMin>;
  max?: Maybe<MoviesAggregatorMax>;
};

export type MoviesAggregatorAvg = {
  __typename?: 'MoviesAggregatorAvg';
  release_date?: Maybe<Scalars['Float']>;
  Imdb?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorMax = {
  __typename?: 'MoviesAggregatorMax';
  release_date?: Maybe<Scalars['Float']>;
  Imdb?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorMin = {
  __typename?: 'MoviesAggregatorMin';
  release_date?: Maybe<Scalars['Float']>;
  Imdb?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorSum = {
  __typename?: 'MoviesAggregatorSum';
  release_date?: Maybe<Scalars['Float']>;
  Imdb?: Maybe<Scalars['Float']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  values?: Maybe<Array<Maybe<Movies>>>;
  groupBy?: Maybe<MoviesGroupBy>;
  aggregate?: Maybe<MoviesAggregator>;
};

export type MoviesConnectionAll_Time_Views = {
  __typename?: 'MoviesConnectionAll_time_views';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionBody = {
  __typename?: 'MoviesConnectionBody';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionCreated_At = {
  __typename?: 'MoviesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionDuration = {
  __typename?: 'MoviesConnectionDuration';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionFreeServer1 = {
  __typename?: 'MoviesConnectionFreeServer1';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionFreeServer2 = {
  __typename?: 'MoviesConnectionFreeServer2';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionId = {
  __typename?: 'MoviesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionImdb = {
  __typename?: 'MoviesConnectionImdb';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionIsSeries = {
  __typename?: 'MoviesConnectionIsSeries';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionMmsub = {
  __typename?: 'MoviesConnectionMmsub';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionName = {
  __typename?: 'MoviesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionPhoto_Url = {
  __typename?: 'MoviesConnectionPhoto_url';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionPremiumOnly = {
  __typename?: 'MoviesConnectionPremiumOnly';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionPublished_At = {
  __typename?: 'MoviesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionQuality = {
  __typename?: 'MoviesConnectionQuality';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionRecommend = {
  __typename?: 'MoviesConnectionRecommend';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionRelease_Date = {
  __typename?: 'MoviesConnectionRelease_date';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionSevendaysago = {
  __typename?: 'MoviesConnectionSevendaysago';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionTv_Sery = {
  __typename?: 'MoviesConnectionTv_sery';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionUpdated_At = {
  __typename?: 'MoviesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionUuid = {
  __typename?: 'MoviesConnectionUuid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionViews = {
  __typename?: 'MoviesConnectionViews';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionVipServer1 = {
  __typename?: 'MoviesConnectionVipServer1';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionVipServer2 = {
  __typename?: 'MoviesConnectionVipServer2';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesConnectionWide_Poster = {
  __typename?: 'MoviesConnectionWide_poster';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MoviesConnection>;
};

export type MoviesGroupBy = {
  __typename?: 'MoviesGroupBy';
  id?: Maybe<Array<Maybe<MoviesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MoviesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MoviesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<MoviesConnectionName>>>;
  body?: Maybe<Array<Maybe<MoviesConnectionBody>>>;
  uuid?: Maybe<Array<Maybe<MoviesConnectionUuid>>>;
  freeServer1?: Maybe<Array<Maybe<MoviesConnectionFreeServer1>>>;
  photo_url?: Maybe<Array<Maybe<MoviesConnectionPhoto_Url>>>;
  freeServer2?: Maybe<Array<Maybe<MoviesConnectionFreeServer2>>>;
  vipServer1?: Maybe<Array<Maybe<MoviesConnectionVipServer1>>>;
  vipServer2?: Maybe<Array<Maybe<MoviesConnectionVipServer2>>>;
  premiumOnly?: Maybe<Array<Maybe<MoviesConnectionPremiumOnly>>>;
  recommend?: Maybe<Array<Maybe<MoviesConnectionRecommend>>>;
  tv_sery?: Maybe<Array<Maybe<MoviesConnectionTv_Sery>>>;
  quality?: Maybe<Array<Maybe<MoviesConnectionQuality>>>;
  views?: Maybe<Array<Maybe<MoviesConnectionViews>>>;
  release_date?: Maybe<Array<Maybe<MoviesConnectionRelease_Date>>>;
  duration?: Maybe<Array<Maybe<MoviesConnectionDuration>>>;
  isSeries?: Maybe<Array<Maybe<MoviesConnectionIsSeries>>>;
  Imdb?: Maybe<Array<Maybe<MoviesConnectionImdb>>>;
  all_time_views?: Maybe<Array<Maybe<MoviesConnectionAll_Time_Views>>>;
  mmsub?: Maybe<Array<Maybe<MoviesConnectionMmsub>>>;
  sevendaysago?: Maybe<Array<Maybe<MoviesConnectionSevendaysago>>>;
  wide_poster?: Maybe<Array<Maybe<MoviesConnectionWide_Poster>>>;
  published_at?: Maybe<Array<Maybe<MoviesConnectionPublished_At>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmbedUploader?: Maybe<CreateEmbedUploaderPayload>;
  updateEmbedUploader?: Maybe<UpdateEmbedUploaderPayload>;
  deleteEmbedUploader?: Maybe<DeleteEmbedUploaderPayload>;
  createEmbedVideo?: Maybe<CreateEmbedVideoPayload>;
  updateEmbedVideo?: Maybe<UpdateEmbedVideoPayload>;
  deleteEmbedVideo?: Maybe<DeleteEmbedVideoPayload>;
  createEmbedVideo2?: Maybe<CreateEmbedVideo2Payload>;
  updateEmbedVideo2?: Maybe<UpdateEmbedVideo2Payload>;
  deleteEmbedVideo2?: Maybe<DeleteEmbedVideo2Payload>;
  createFavouriteMovie?: Maybe<CreateFavouriteMoviePayload>;
  updateFavouriteMovie?: Maybe<UpdateFavouriteMoviePayload>;
  deleteFavouriteMovie?: Maybe<DeleteFavouriteMoviePayload>;
  createGenre?: Maybe<CreateGenrePayload>;
  updateGenre?: Maybe<UpdateGenrePayload>;
  deleteGenre?: Maybe<DeleteGenrePayload>;
  createMovie?: Maybe<CreateMoviePayload>;
  updateMovie?: Maybe<UpdateMoviePayload>;
  deleteMovie?: Maybe<DeleteMoviePayload>;
  createReferralCode?: Maybe<CreateReferralCodePayload>;
  updateReferralCode?: Maybe<UpdateReferralCodePayload>;
  deleteReferralCode?: Maybe<DeleteReferralCodePayload>;
  createTransaction?: Maybe<CreateTransactionPayload>;
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  createTvSery?: Maybe<CreateTvSeryPayload>;
  updateTvSery?: Maybe<UpdateTvSeryPayload>;
  deleteTvSery?: Maybe<DeleteTvSeryPayload>;
  createUserDatum?: Maybe<CreateUserDatumPayload>;
  updateUserDatum?: Maybe<UpdateUserDatumPayload>;
  deleteUserDatum?: Maybe<DeleteUserDatumPayload>;
  createWatchHistory?: Maybe<CreateWatchHistoryPayload>;
  updateWatchHistory?: Maybe<UpdateWatchHistoryPayload>;
  deleteWatchHistory?: Maybe<DeleteWatchHistoryPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  loginEmbedUploader?: Maybe<Typeloginembeduploader>;
  verifyToken?: Maybe<VerifyTokenPayload>;
  embedRegister?: Maybe<TypeRegisterEmbedUploader>;
  updateMovieView?: Maybe<Movies>;
  signupClient?: Maybe<ReturnSignup>;
  updateHistory?: Maybe<UpdateMovieReturn>;
};


export type MutationCreateEmbedUploaderArgs = {
  input?: Maybe<CreateEmbedUploaderInput>;
};


export type MutationUpdateEmbedUploaderArgs = {
  input?: Maybe<UpdateEmbedUploaderInput>;
};


export type MutationDeleteEmbedUploaderArgs = {
  input?: Maybe<DeleteEmbedUploaderInput>;
};


export type MutationCreateEmbedVideoArgs = {
  input?: Maybe<CreateEmbedVideoInput>;
};


export type MutationUpdateEmbedVideoArgs = {
  input?: Maybe<UpdateEmbedVideoInput>;
};


export type MutationDeleteEmbedVideoArgs = {
  input?: Maybe<DeleteEmbedVideoInput>;
};


export type MutationCreateEmbedVideo2Args = {
  input?: Maybe<CreateEmbedVideo2Input>;
};


export type MutationUpdateEmbedVideo2Args = {
  input?: Maybe<UpdateEmbedVideo2Input>;
};


export type MutationDeleteEmbedVideo2Args = {
  input?: Maybe<DeleteEmbedVideo2Input>;
};


export type MutationCreateFavouriteMovieArgs = {
  input?: Maybe<CreateFavouriteMovieInput>;
};


export type MutationUpdateFavouriteMovieArgs = {
  input?: Maybe<UpdateFavouriteMovieInput>;
};


export type MutationDeleteFavouriteMovieArgs = {
  input?: Maybe<DeleteFavouriteMovieInput>;
};


export type MutationCreateGenreArgs = {
  input?: Maybe<CreateGenreInput>;
};


export type MutationUpdateGenreArgs = {
  input?: Maybe<UpdateGenreInput>;
};


export type MutationDeleteGenreArgs = {
  input?: Maybe<DeleteGenreInput>;
};


export type MutationCreateMovieArgs = {
  input?: Maybe<CreateMovieInput>;
};


export type MutationUpdateMovieArgs = {
  input?: Maybe<UpdateMovieInput>;
};


export type MutationDeleteMovieArgs = {
  input?: Maybe<DeleteMovieInput>;
};


export type MutationCreateReferralCodeArgs = {
  input?: Maybe<CreateReferralCodeInput>;
};


export type MutationUpdateReferralCodeArgs = {
  input?: Maybe<UpdateReferralCodeInput>;
};


export type MutationDeleteReferralCodeArgs = {
  input?: Maybe<DeleteReferralCodeInput>;
};


export type MutationCreateTransactionArgs = {
  input?: Maybe<CreateTransactionInput>;
};


export type MutationUpdateTransactionArgs = {
  input?: Maybe<UpdateTransactionInput>;
};


export type MutationDeleteTransactionArgs = {
  input?: Maybe<DeleteTransactionInput>;
};


export type MutationCreateTvSeryArgs = {
  input?: Maybe<CreateTvSeryInput>;
};


export type MutationUpdateTvSeryArgs = {
  input?: Maybe<UpdateTvSeryInput>;
};


export type MutationDeleteTvSeryArgs = {
  input?: Maybe<DeleteTvSeryInput>;
};


export type MutationCreateUserDatumArgs = {
  input?: Maybe<CreateUserDatumInput>;
};


export type MutationUpdateUserDatumArgs = {
  input?: Maybe<UpdateUserDatumInput>;
};


export type MutationDeleteUserDatumArgs = {
  input?: Maybe<DeleteUserDatumInput>;
};


export type MutationCreateWatchHistoryArgs = {
  input?: Maybe<CreateWatchHistoryInput>;
};


export type MutationUpdateWatchHistoryArgs = {
  input?: Maybe<UpdateWatchHistoryInput>;
};


export type MutationDeleteWatchHistoryArgs = {
  input?: Maybe<DeleteWatchHistoryInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationLoginEmbedUploaderArgs = {
  input?: Maybe<LoginEmbedInput>;
};


export type MutationEmbedRegisterArgs = {
  input?: Maybe<LoginEmbedInput>;
};


export type MutationUpdateMovieViewArgs = {
  uuid: Scalars['ID'];
};


export type MutationSignupClientArgs = {
  uuid?: Maybe<Scalars['String']>;
  fuuid?: Maybe<Scalars['String']>;
};


export type MutationUpdateHistoryArgs = {
  input?: Maybe<UpdateHistoryInput>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  embedUploader?: Maybe<EmbedUploader>;
  embedUploaders?: Maybe<Array<Maybe<EmbedUploader>>>;
  embedUploadersConnection?: Maybe<EmbedUploaderConnection>;
  embedVideo?: Maybe<EmbedVideo>;
  embedVideos?: Maybe<Array<Maybe<EmbedVideo>>>;
  embedVideosConnection?: Maybe<EmbedVideoConnection>;
  embedVideo2?: Maybe<EmbedVideo2>;
  embedVideo2s?: Maybe<Array<Maybe<EmbedVideo2>>>;
  embedVideo2sConnection?: Maybe<EmbedVideo2Connection>;
  favouriteMovie?: Maybe<FavouriteMovies>;
  favouriteMovies?: Maybe<Array<Maybe<FavouriteMovies>>>;
  favouriteMoviesConnection?: Maybe<FavouriteMoviesConnection>;
  genre?: Maybe<Genres>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  genresConnection?: Maybe<GenresConnection>;
  movie?: Maybe<Movies>;
  movies?: Maybe<Array<Maybe<Movies>>>;
  moviesConnection?: Maybe<MoviesConnection>;
  referralCode?: Maybe<ReferralCode>;
  referralCodes?: Maybe<Array<Maybe<ReferralCode>>>;
  referralCodesConnection?: Maybe<ReferralCodeConnection>;
  transaction?: Maybe<Transactions>;
  transactions?: Maybe<Array<Maybe<Transactions>>>;
  transactionsConnection?: Maybe<TransactionsConnection>;
  tvSery?: Maybe<TvSeries>;
  tvSeries?: Maybe<Array<Maybe<TvSeries>>>;
  tvSeriesConnection?: Maybe<TvSeriesConnection>;
  userDatum?: Maybe<UserData>;
  userData?: Maybe<Array<Maybe<UserData>>>;
  userDataConnection?: Maybe<UserDataConnection>;
  watchHistory?: Maybe<WatchHistory>;
  watchHistories?: Maybe<Array<Maybe<WatchHistory>>>;
  watchHistoriesConnection?: Maybe<WatchHistoryConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
  search?: Maybe<Array<Maybe<OptionalMovies>>>;
  getMovie?: Maybe<Movies>;
  checkValidReferralCode?: Maybe<CheckValidReferralCodeResult>;
  transactionPaymentToken?: Maybe<TransactionPaymentTokenResponse>;
  transaction_status?: Maybe<Transaction_Status_Response>;
  getUserData?: Maybe<ReturnUserData>;
};


export type QueryEmbedUploaderArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmbedUploadersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmbedUploadersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEmbedVideoArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmbedVideosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmbedVideosConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEmbedVideo2Args = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmbedVideo2sArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEmbedVideo2sConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFavouriteMovieArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryFavouriteMoviesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFavouriteMoviesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGenreArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGenresArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGenresConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMoviesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMoviesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryReferralCodeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryReferralCodesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryReferralCodesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTransactionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTransactionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTvSeryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTvSeriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTvSeriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserDatumArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUserDataArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUserDataConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWatchHistoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWatchHistoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryWatchHistoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySearchArgs = {
  q?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetMovieArgs = {
  uuid?: Maybe<Scalars['String']>;
};


export type QueryCheckValidReferralCodeArgs = {
  input?: Maybe<ReferralQueryInput>;
};


export type QueryTransactionPaymentTokenArgs = {
  input?: Maybe<TransactionPaymentTokenQueryInput>;
};


export type QueryTransaction_StatusArgs = {
  input?: Maybe<Transaction_Status_Input>;
};

export type ReferralCode = {
  __typename?: 'ReferralCode';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  code?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  used_client_uuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ReferralCodeAggregator = {
  __typename?: 'ReferralCodeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ReferralCodeAggregatorSum>;
  avg?: Maybe<ReferralCodeAggregatorAvg>;
  min?: Maybe<ReferralCodeAggregatorMin>;
  max?: Maybe<ReferralCodeAggregatorMax>;
};

export type ReferralCodeAggregatorAvg = {
  __typename?: 'ReferralCodeAggregatorAvg';
  month?: Maybe<Scalars['Float']>;
};

export type ReferralCodeAggregatorMax = {
  __typename?: 'ReferralCodeAggregatorMax';
  month?: Maybe<Scalars['Float']>;
};

export type ReferralCodeAggregatorMin = {
  __typename?: 'ReferralCodeAggregatorMin';
  month?: Maybe<Scalars['Float']>;
};

export type ReferralCodeAggregatorSum = {
  __typename?: 'ReferralCodeAggregatorSum';
  month?: Maybe<Scalars['Float']>;
};

export type ReferralCodeConnection = {
  __typename?: 'ReferralCodeConnection';
  values?: Maybe<Array<Maybe<ReferralCode>>>;
  groupBy?: Maybe<ReferralCodeGroupBy>;
  aggregate?: Maybe<ReferralCodeAggregator>;
};

export type ReferralCodeConnectionCode = {
  __typename?: 'ReferralCodeConnectionCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeConnectionCreated_At = {
  __typename?: 'ReferralCodeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeConnectionId = {
  __typename?: 'ReferralCodeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeConnectionMonth = {
  __typename?: 'ReferralCodeConnectionMonth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeConnectionPublished_At = {
  __typename?: 'ReferralCodeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeConnectionUpdated_At = {
  __typename?: 'ReferralCodeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeConnectionUsed_Client_Uuid = {
  __typename?: 'ReferralCodeConnectionUsed_client_uuid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReferralCodeConnection>;
};

export type ReferralCodeGroupBy = {
  __typename?: 'ReferralCodeGroupBy';
  id?: Maybe<Array<Maybe<ReferralCodeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ReferralCodeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ReferralCodeConnectionUpdated_At>>>;
  code?: Maybe<Array<Maybe<ReferralCodeConnectionCode>>>;
  month?: Maybe<Array<Maybe<ReferralCodeConnectionMonth>>>;
  used_client_uuid?: Maybe<Array<Maybe<ReferralCodeConnectionUsed_Client_Uuid>>>;
  published_at?: Maybe<Array<Maybe<ReferralCodeConnectionPublished_At>>>;
};

export type ReferralCodeInput = {
  code?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  used_client_uuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type TransactionInput = {
  totalAmount: Scalars['String'];
  createdAt: Scalars['String'];
  transactionStatus: Scalars['String'];
  methodName: Scalars['String'];
  merchantOrderId: Scalars['String'];
  transactionId: Scalars['String'];
  customerName: Scalars['String'];
  providerName: Scalars['String'];
  quantity?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Transactions = {
  __typename?: 'Transactions';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  totalAmount: Scalars['String'];
  createdAt: Scalars['String'];
  transactionStatus: Scalars['String'];
  methodName: Scalars['String'];
  merchantOrderId: Scalars['String'];
  transactionId: Scalars['String'];
  customerName: Scalars['String'];
  providerName: Scalars['String'];
  quantity?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TransactionsAggregator = {
  __typename?: 'TransactionsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TransactionsConnection = {
  __typename?: 'TransactionsConnection';
  values?: Maybe<Array<Maybe<Transactions>>>;
  groupBy?: Maybe<TransactionsGroupBy>;
  aggregate?: Maybe<TransactionsAggregator>;
};

export type TransactionsConnectionCreatedAt = {
  __typename?: 'TransactionsConnectionCreatedAt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionCreated_At = {
  __typename?: 'TransactionsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionCustomerName = {
  __typename?: 'TransactionsConnectionCustomerName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionId = {
  __typename?: 'TransactionsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionMerchantOrderId = {
  __typename?: 'TransactionsConnectionMerchantOrderId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionMethodName = {
  __typename?: 'TransactionsConnectionMethodName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionProviderName = {
  __typename?: 'TransactionsConnectionProviderName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionPublished_At = {
  __typename?: 'TransactionsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionQuantity = {
  __typename?: 'TransactionsConnectionQuantity';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionTotalAmount = {
  __typename?: 'TransactionsConnectionTotalAmount';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionTransactionId = {
  __typename?: 'TransactionsConnectionTransactionId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionTransactionStatus = {
  __typename?: 'TransactionsConnectionTransactionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsConnectionUpdated_At = {
  __typename?: 'TransactionsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionsConnection>;
};

export type TransactionsGroupBy = {
  __typename?: 'TransactionsGroupBy';
  id?: Maybe<Array<Maybe<TransactionsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TransactionsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TransactionsConnectionUpdated_At>>>;
  totalAmount?: Maybe<Array<Maybe<TransactionsConnectionTotalAmount>>>;
  createdAt?: Maybe<Array<Maybe<TransactionsConnectionCreatedAt>>>;
  transactionStatus?: Maybe<Array<Maybe<TransactionsConnectionTransactionStatus>>>;
  methodName?: Maybe<Array<Maybe<TransactionsConnectionMethodName>>>;
  merchantOrderId?: Maybe<Array<Maybe<TransactionsConnectionMerchantOrderId>>>;
  transactionId?: Maybe<Array<Maybe<TransactionsConnectionTransactionId>>>;
  customerName?: Maybe<Array<Maybe<TransactionsConnectionCustomerName>>>;
  providerName?: Maybe<Array<Maybe<TransactionsConnectionProviderName>>>;
  quantity?: Maybe<Array<Maybe<TransactionsConnectionQuantity>>>;
  published_at?: Maybe<Array<Maybe<TransactionsConnectionPublished_At>>>;
};

export type TvSeries = {
  __typename?: 'TvSeries';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Array<Maybe<ComponentTvSeriesSeason>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TvSeriesAggregator = {
  __typename?: 'TvSeriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TvSeriesConnection = {
  __typename?: 'TvSeriesConnection';
  values?: Maybe<Array<Maybe<TvSeries>>>;
  groupBy?: Maybe<TvSeriesGroupBy>;
  aggregate?: Maybe<TvSeriesAggregator>;
};

export type TvSeriesConnectionCreated_At = {
  __typename?: 'TvSeriesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TvSeriesConnection>;
};

export type TvSeriesConnectionId = {
  __typename?: 'TvSeriesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TvSeriesConnection>;
};

export type TvSeriesConnectionName = {
  __typename?: 'TvSeriesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TvSeriesConnection>;
};

export type TvSeriesConnectionPublished_At = {
  __typename?: 'TvSeriesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TvSeriesConnection>;
};

export type TvSeriesConnectionUpdated_At = {
  __typename?: 'TvSeriesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TvSeriesConnection>;
};

export type TvSeriesGroupBy = {
  __typename?: 'TvSeriesGroupBy';
  id?: Maybe<Array<Maybe<TvSeriesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TvSeriesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TvSeriesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TvSeriesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TvSeriesConnectionPublished_At>>>;
};

export type TvSeryInput = {
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Array<ComponentTvSeriesSeasonInput>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMovieReturn = {
  __typename?: 'UpdateMovieReturn';
  status?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  current_time?: Maybe<Scalars['String']>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserData = {
  __typename?: 'UserData';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  uuid?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  expire?: Maybe<Scalars['DateTime']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  fuuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  watch_histories?: Maybe<Array<Maybe<WatchHistory>>>;
  favourite_movies?: Maybe<Array<Maybe<FavouriteMovies>>>;
};


export type UserDataWatch_HistoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UserDataFavourite_MoviesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UserDataAggregator = {
  __typename?: 'UserDataAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UserDataAggregatorSum>;
  avg?: Maybe<UserDataAggregatorAvg>;
  min?: Maybe<UserDataAggregatorMin>;
  max?: Maybe<UserDataAggregatorMax>;
};

export type UserDataAggregatorAvg = {
  __typename?: 'UserDataAggregatorAvg';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type UserDataAggregatorMax = {
  __typename?: 'UserDataAggregatorMax';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type UserDataAggregatorMin = {
  __typename?: 'UserDataAggregatorMin';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type UserDataAggregatorSum = {
  __typename?: 'UserDataAggregatorSum';
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type UserDataConnection = {
  __typename?: 'UserDataConnection';
  values?: Maybe<Array<Maybe<UserData>>>;
  groupBy?: Maybe<UserDataGroupBy>;
  aggregate?: Maybe<UserDataAggregator>;
};

export type UserDataConnectionCreated_At = {
  __typename?: 'UserDataConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionExpire = {
  __typename?: 'UserDataConnectionExpire';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionFuuid = {
  __typename?: 'UserDataConnectionFuuid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionId = {
  __typename?: 'UserDataConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionPublished_At = {
  __typename?: 'UserDataConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionTokenVersion = {
  __typename?: 'UserDataConnectionTokenVersion';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionUpdated_At = {
  __typename?: 'UserDataConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionUuid = {
  __typename?: 'UserDataConnectionUuid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataConnectionVerify = {
  __typename?: 'UserDataConnectionVerify';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UserDataConnection>;
};

export type UserDataGroupBy = {
  __typename?: 'UserDataGroupBy';
  id?: Maybe<Array<Maybe<UserDataConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UserDataConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UserDataConnectionUpdated_At>>>;
  uuid?: Maybe<Array<Maybe<UserDataConnectionUuid>>>;
  verify?: Maybe<Array<Maybe<UserDataConnectionVerify>>>;
  expire?: Maybe<Array<Maybe<UserDataConnectionExpire>>>;
  tokenVersion?: Maybe<Array<Maybe<UserDataConnectionTokenVersion>>>;
  fuuid?: Maybe<Array<Maybe<UserDataConnectionFuuid>>>;
  published_at?: Maybe<Array<Maybe<UserDataConnectionPublished_At>>>;
};

export type UserDatumInput = {
  uuid?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  expire?: Maybe<Scalars['DateTime']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  watch_histories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  favourite_movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  fuuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type WatchHistory = {
  __typename?: 'WatchHistory';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  movieName?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  user_data?: Maybe<UserData>;
  movie?: Maybe<Movies>;
  last_updated?: Maybe<Scalars['String']>;
  current_time?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type WatchHistoryAggregator = {
  __typename?: 'WatchHistoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<WatchHistoryAggregatorSum>;
  avg?: Maybe<WatchHistoryAggregatorAvg>;
  min?: Maybe<WatchHistoryAggregatorMin>;
  max?: Maybe<WatchHistoryAggregatorMax>;
};

export type WatchHistoryAggregatorAvg = {
  __typename?: 'WatchHistoryAggregatorAvg';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type WatchHistoryAggregatorMax = {
  __typename?: 'WatchHistoryAggregatorMax';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type WatchHistoryAggregatorMin = {
  __typename?: 'WatchHistoryAggregatorMin';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type WatchHistoryAggregatorSum = {
  __typename?: 'WatchHistoryAggregatorSum';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type WatchHistoryConnection = {
  __typename?: 'WatchHistoryConnection';
  values?: Maybe<Array<Maybe<WatchHistory>>>;
  groupBy?: Maybe<WatchHistoryGroupBy>;
  aggregate?: Maybe<WatchHistoryAggregator>;
};

export type WatchHistoryConnectionCreated_At = {
  __typename?: 'WatchHistoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionCurrent_Time = {
  __typename?: 'WatchHistoryConnectionCurrent_time';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionEpisode = {
  __typename?: 'WatchHistoryConnectionEpisode';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionId = {
  __typename?: 'WatchHistoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionLast_Updated = {
  __typename?: 'WatchHistoryConnectionLast_updated';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionMovie = {
  __typename?: 'WatchHistoryConnectionMovie';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionMovieName = {
  __typename?: 'WatchHistoryConnectionMovieName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionPublished_At = {
  __typename?: 'WatchHistoryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionSeason = {
  __typename?: 'WatchHistoryConnectionSeason';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionUpdated_At = {
  __typename?: 'WatchHistoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryConnectionUser_Data = {
  __typename?: 'WatchHistoryConnectionUser_data';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WatchHistoryConnection>;
};

export type WatchHistoryGroupBy = {
  __typename?: 'WatchHistoryGroupBy';
  id?: Maybe<Array<Maybe<WatchHistoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<WatchHistoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<WatchHistoryConnectionUpdated_At>>>;
  movieName?: Maybe<Array<Maybe<WatchHistoryConnectionMovieName>>>;
  episode?: Maybe<Array<Maybe<WatchHistoryConnectionEpisode>>>;
  season?: Maybe<Array<Maybe<WatchHistoryConnectionSeason>>>;
  user_data?: Maybe<Array<Maybe<WatchHistoryConnectionUser_Data>>>;
  movie?: Maybe<Array<Maybe<WatchHistoryConnectionMovie>>>;
  last_updated?: Maybe<Array<Maybe<WatchHistoryConnectionLast_Updated>>>;
  current_time?: Maybe<Array<Maybe<WatchHistoryConnectionCurrent_Time>>>;
  published_at?: Maybe<Array<Maybe<WatchHistoryConnectionPublished_At>>>;
};

export type WatchHistoryInput = {
  movieName?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  user_data?: Maybe<Scalars['ID']>;
  movie?: Maybe<Scalars['ID']>;
  last_updated?: Maybe<Scalars['String']>;
  current_time?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CheckValidReferralCodeResult = {
  __typename?: 'checkValidReferralCodeResult';
  ok?: Maybe<Scalars['Boolean']>;
  jwtRenewToken?: Maybe<Scalars['String']>;
};

export type CreateEmbedUploaderInput = {
  data?: Maybe<EmbedUploaderInput>;
};

export type CreateEmbedUploaderPayload = {
  __typename?: 'createEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
};

export type CreateEmbedVideo2Input = {
  data?: Maybe<EmbedVideo2Input>;
};

export type CreateEmbedVideo2Payload = {
  __typename?: 'createEmbedVideo2Payload';
  embedVideo2?: Maybe<EmbedVideo2>;
};

export type CreateEmbedVideoInput = {
  data?: Maybe<EmbedVideoInput>;
};

export type CreateEmbedVideoPayload = {
  __typename?: 'createEmbedVideoPayload';
  embedVideo?: Maybe<EmbedVideo>;
};

export type CreateFavouriteMovieInput = {
  data?: Maybe<FavouriteMovieInput>;
};

export type CreateFavouriteMoviePayload = {
  __typename?: 'createFavouriteMoviePayload';
  favouriteMovie?: Maybe<FavouriteMovies>;
  status?: Maybe<Scalars['String']>;
};

export type CreateGenreInput = {
  data?: Maybe<GenreInput>;
};

export type CreateGenrePayload = {
  __typename?: 'createGenrePayload';
  genre?: Maybe<Genres>;
};

export type CreateMovieInput = {
  data?: Maybe<MovieInput>;
};

export type CreateMoviePayload = {
  __typename?: 'createMoviePayload';
  movie?: Maybe<Movies>;
};

export type CreateReferralCodeInput = {
  data?: Maybe<ReferralCodeInput>;
};

export type CreateReferralCodePayload = {
  __typename?: 'createReferralCodePayload';
  referralCode?: Maybe<ReferralCode>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTransactionInput = {
  data?: Maybe<TransactionInput>;
};

export type CreateTransactionPayload = {
  __typename?: 'createTransactionPayload';
  transaction?: Maybe<Transactions>;
};

export type CreateTvSeryInput = {
  data?: Maybe<TvSeryInput>;
};

export type CreateTvSeryPayload = {
  __typename?: 'createTvSeryPayload';
  tvSery?: Maybe<TvSeries>;
};

export type CreateUserDatumInput = {
  data?: Maybe<UserDatumInput>;
};

export type CreateUserDatumPayload = {
  __typename?: 'createUserDatumPayload';
  userDatum?: Maybe<UserData>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateWatchHistoryInput = {
  data?: Maybe<WatchHistoryInput>;
};

export type CreateWatchHistoryPayload = {
  __typename?: 'createWatchHistoryPayload';
  watchHistory?: Maybe<WatchHistory>;
};

export type DeleteEmbedUploaderInput = {
  where?: Maybe<InputId>;
};

export type DeleteEmbedUploaderPayload = {
  __typename?: 'deleteEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
};

export type DeleteEmbedVideo2Input = {
  where?: Maybe<InputId>;
};

export type DeleteEmbedVideo2Payload = {
  __typename?: 'deleteEmbedVideo2Payload';
  embedVideo2?: Maybe<EmbedVideo2>;
};

export type DeleteEmbedVideoInput = {
  where?: Maybe<InputId>;
};

export type DeleteEmbedVideoPayload = {
  __typename?: 'deleteEmbedVideoPayload';
  embedVideo?: Maybe<EmbedVideo>;
};

export type DeleteFavouriteMovieInput = {
  where?: Maybe<InputId>;
};

export type DeleteFavouriteMoviePayload = {
  __typename?: 'deleteFavouriteMoviePayload';
  favouriteMovie?: Maybe<FavouriteMovies>;
  status?: Maybe<Scalars['String']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGenreInput = {
  where?: Maybe<InputId>;
};

export type DeleteGenrePayload = {
  __typename?: 'deleteGenrePayload';
  genre?: Maybe<Genres>;
};

export type DeleteMovieInput = {
  where?: Maybe<InputId>;
};

export type DeleteMoviePayload = {
  __typename?: 'deleteMoviePayload';
  movie?: Maybe<Movies>;
};

export type DeleteReferralCodeInput = {
  where?: Maybe<InputId>;
};

export type DeleteReferralCodePayload = {
  __typename?: 'deleteReferralCodePayload';
  referralCode?: Maybe<ReferralCode>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTransactionInput = {
  where?: Maybe<InputId>;
};

export type DeleteTransactionPayload = {
  __typename?: 'deleteTransactionPayload';
  transaction?: Maybe<Transactions>;
};

export type DeleteTvSeryInput = {
  where?: Maybe<InputId>;
};

export type DeleteTvSeryPayload = {
  __typename?: 'deleteTvSeryPayload';
  tvSery?: Maybe<TvSeries>;
};

export type DeleteUserDatumInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserDatumPayload = {
  __typename?: 'deleteUserDatumPayload';
  userDatum?: Maybe<UserData>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWatchHistoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteWatchHistoryPayload = {
  __typename?: 'deleteWatchHistoryPayload';
  watchHistory?: Maybe<WatchHistory>;
};

export type EditComponentTvSeriesEpisodeInput = {
  id?: Maybe<Scalars['ID']>;
  episodeID?: Maybe<Scalars['Int']>;
  freeServer1?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  episodeName?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Time']>;
};

export type EditComponentTvSeriesSeasonInput = {
  id?: Maybe<Scalars['ID']>;
  episodes?: Maybe<Array<Maybe<EditComponentTvSeriesEpisodeInput>>>;
  seasonID?: Maybe<Scalars['Int']>;
};

export type EditEmbedUploaderInput = {
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  verify?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEmbedVideo2Input = {
  embedLink?: Maybe<Scalars['String']>;
  movie_name?: Maybe<Scalars['String']>;
  original_link?: Maybe<Scalars['String']>;
  mm_sub?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  video_size?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  upload_status?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEmbedVideoInput = {
  movieName?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  eigaLink?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  eigaLink2?: Maybe<Scalars['String']>;
  mm_sub?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFavouriteMovieInput = {
  movie?: Maybe<Scalars['ID']>;
  user_info?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGenreInput = {
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMovieInput = {
  name?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly?: Maybe<Scalars['Boolean']>;
  recommend?: Maybe<Scalars['Boolean']>;
  tv_sery?: Maybe<Scalars['ID']>;
  quality?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Long']>;
  genres?: Maybe<Array<Maybe<Scalars['ID']>>>;
  release_date?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Time']>;
  isSeries?: Maybe<Scalars['Boolean']>;
  Imdb?: Maybe<Scalars['Float']>;
  all_time_views?: Maybe<Scalars['Long']>;
  mmsub?: Maybe<Scalars['Boolean']>;
  sevendaysago?: Maybe<Scalars['String']>;
  wide_poster?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditReferralCodeInput = {
  code?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  used_client_uuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTransactionInput = {
  totalAmount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  transactionStatus?: Maybe<Scalars['String']>;
  methodName?: Maybe<Scalars['String']>;
  merchantOrderId?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  providerName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTvSeryInput = {
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Array<Maybe<EditComponentTvSeriesSeasonInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserDatumInput = {
  uuid?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  expire?: Maybe<Scalars['DateTime']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  watch_histories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  favourite_movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  fuuid?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditWatchHistoryInput = {
  movieName?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  user_data?: Maybe<Scalars['ID']>;
  movie?: Maybe<Scalars['ID']>;
  last_updated?: Maybe<Scalars['String']>;
  current_time?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type LoginEmbedInput = {
  userName: Scalars['String'];
  password: Scalars['String'];
};

export type OptionalMovies = {
  __typename?: 'optionalMovies';
  id?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly?: Maybe<Scalars['Boolean']>;
  recommend?: Maybe<Scalars['Boolean']>;
  tv_sery?: Maybe<TvSeries>;
  quality?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Long']>;
  release_date?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Time']>;
  isSeries?: Maybe<Scalars['Boolean']>;
  Imdb?: Maybe<Scalars['Float']>;
  all_time_views?: Maybe<Scalars['Long']>;
  mmsub?: Maybe<Scalars['Boolean']>;
  sevendaysago?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
};


export type OptionalMoviesGenresArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ReferralQueryInput = {
  code?: Maybe<Scalars['String']>;
};

export type ReturnSignup = {
  __typename?: 'returnSignup';
  ok?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type ReturnUserData = {
  __typename?: 'returnUserData';
  premium?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  expire?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
};

export type TransactionPaymentTokenQueryInput = {
  paymentMethod: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type TransactionPaymentTokenResponse = {
  __typename?: 'transactionPaymentTokenResponse';
  qrCode?: Maybe<Scalars['String']>;
  PwaToken?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type Transaction_Status_Input = {
  transactionId: Scalars['String'];
  orderId: Scalars['String'];
};

export type Transaction_Status_Response = {
  __typename?: 'transaction_status_response';
  transactionStatus?: Maybe<Scalars['String']>;
};

export type TypeRegisterEmbedUploader = {
  __typename?: 'typeRegisterEmbedUploader';
  success?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  alreadyCreated?: Maybe<Scalars['Boolean']>;
};

export type Typeloginembeduploader = {
  __typename?: 'typeloginembeduploader';
  statusCode?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  jwt?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  bnet2?: Maybe<Scalars['String']>;
  bnet?: Maybe<Scalars['String']>;
};

export type UpdateEmbedUploaderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEmbedUploaderInput>;
};

export type UpdateEmbedUploaderPayload = {
  __typename?: 'updateEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
};

export type UpdateEmbedVideo2Input = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEmbedVideo2Input>;
};

export type UpdateEmbedVideo2Payload = {
  __typename?: 'updateEmbedVideo2Payload';
  embedVideo2?: Maybe<EmbedVideo2>;
};

export type UpdateEmbedVideoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEmbedVideoInput>;
};

export type UpdateEmbedVideoPayload = {
  __typename?: 'updateEmbedVideoPayload';
  embedVideo?: Maybe<EmbedVideo>;
};

export type UpdateFavouriteMovieInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFavouriteMovieInput>;
};

export type UpdateFavouriteMoviePayload = {
  __typename?: 'updateFavouriteMoviePayload';
  favouriteMovie?: Maybe<FavouriteMovies>;
};

export type UpdateGenreInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGenreInput>;
};

export type UpdateGenrePayload = {
  __typename?: 'updateGenrePayload';
  genre?: Maybe<Genres>;
};

export type UpdateHistoryInput = {
  movieId: Scalars['Int'];
  movieUuid: Scalars['String'];
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  current_time?: Maybe<Scalars['String']>;
};

export type UpdateMovieInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMovieInput>;
};

export type UpdateMoviePayload = {
  __typename?: 'updateMoviePayload';
  movie?: Maybe<Movies>;
};

export type UpdateReferralCodeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditReferralCodeInput>;
};

export type UpdateReferralCodePayload = {
  __typename?: 'updateReferralCodePayload';
  referralCode?: Maybe<ReferralCode>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTransactionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTransactionInput>;
};

export type UpdateTransactionPayload = {
  __typename?: 'updateTransactionPayload';
  transaction?: Maybe<Transactions>;
};

export type UpdateTvSeryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTvSeryInput>;
};

export type UpdateTvSeryPayload = {
  __typename?: 'updateTvSeryPayload';
  tvSery?: Maybe<TvSeries>;
};

export type UpdateUserDatumInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserDatumInput>;
};

export type UpdateUserDatumPayload = {
  __typename?: 'updateUserDatumPayload';
  userDatum?: Maybe<UserData>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWatchHistoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditWatchHistoryInput>;
};

export type UpdateWatchHistoryPayload = {
  __typename?: 'updateWatchHistoryPayload';
  watchHistory?: Maybe<WatchHistory>;
};

export type VerifyTokenPayload = {
  __typename?: 'verifyTokenPayload';
  verify?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  bnet?: Maybe<Scalars['String']>;
  bnet2?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type CheckValidReferralCodeQueryVariables = Exact<{
  code?: Maybe<Scalars['String']>;
}>;


export type CheckValidReferralCodeQuery = { __typename?: 'Query', checkValidReferralCode?: Maybe<{ __typename?: 'checkValidReferralCodeResult', ok?: Maybe<boolean>, jwtRenewToken?: Maybe<string> }> };

export type CreateFavouriteMovieMutationVariables = Exact<{
  movieId: Scalars['ID'];
  userId: Scalars['ID'];
}>;


export type CreateFavouriteMovieMutation = { __typename?: 'Mutation', createFavouriteMovie?: Maybe<{ __typename?: 'createFavouriteMoviePayload', status?: Maybe<string> }> };

export type DeleteFavouriteMovieMutationVariables = Exact<{
  movieId: Scalars['ID'];
}>;


export type DeleteFavouriteMovieMutation = { __typename?: 'Mutation', deleteFavouriteMovie?: Maybe<{ __typename?: 'deleteFavouriteMoviePayload', status?: Maybe<string> }> };

export type GetAllMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMoviesQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: Maybe<boolean>, Imdb: number }>>> };

export type GetFavouriteMovieQueryVariables = Exact<{
  userId: Scalars['ID'];
  movieId?: Maybe<Scalars['ID']>;
}>;


export type GetFavouriteMovieQuery = { __typename?: 'Query', favouriteMovies?: Maybe<Array<Maybe<{ __typename?: 'FavouriteMovies', id: string, movie?: Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean }> }>>> };

export type GetFavouriteMoviesQueryVariables = Exact<{
  userId: Scalars['ID'];
  start?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetFavouriteMoviesQuery = { __typename?: 'Query', favouriteMovies?: Maybe<Array<Maybe<{ __typename?: 'FavouriteMovies', id: string, movie?: Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: Maybe<boolean>, Imdb: number }> }>>> };

export type WatchHistoriesQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
  user: Scalars['ID'];
}>;


export type WatchHistoriesQuery = { __typename?: 'Query', watchHistories?: Maybe<Array<Maybe<{ __typename?: 'WatchHistory', movie?: Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: Maybe<boolean>, Imdb: number }> }>>> };

export type GetWatchHistoryQueryVariables = Exact<{
  user: Scalars['ID'];
  movieUuid: Scalars['String'];
}>;


export type GetWatchHistoryQuery = { __typename?: 'Query', watchHistories?: Maybe<Array<Maybe<{ __typename?: 'WatchHistory', id: string, season?: Maybe<number>, episode?: Maybe<number>, current_time?: Maybe<string> }>>> };

export type GetLastestMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastestMoviesQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: Maybe<boolean>, Imdb: number }>>> };

export type GetMovieQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: Maybe<{ __typename?: 'Movies', id: string, freeServer1?: Maybe<string>, uuid?: Maybe<string>, freeServer2?: Maybe<string>, vipServer1?: Maybe<string>, vipServer2?: Maybe<string>, name: string, release_date: number, body: string, duration: any, wide_poster?: Maybe<string>, Imdb: number, isSeries: boolean, mmsub?: Maybe<boolean>, premiumOnly: boolean, genres?: Maybe<Array<Maybe<{ __typename?: 'Genres', name?: Maybe<string> }>>> }> };

export type GetRelatedMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRelatedMoviesQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: Maybe<boolean>, Imdb: number }>>> };

export type GetSeriesQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetSeriesQuery = { __typename?: 'Query', getMovie?: Maybe<{ __typename?: 'Movies', id: string, uuid?: Maybe<string>, name: string, release_date: number, body: string, duration: any, Imdb: number, isSeries: boolean, mmsub?: Maybe<boolean>, premiumOnly: boolean, genres?: Maybe<Array<Maybe<{ __typename?: 'Genres', name?: Maybe<string> }>>>, tv_sery?: Maybe<{ __typename?: 'TvSeries', season?: Maybe<Array<Maybe<{ __typename?: 'ComponentTvSeriesSeason', seasonID?: Maybe<number>, episodes?: Maybe<Array<Maybe<{ __typename?: 'ComponentTvSeriesEpisodes', duration?: Maybe<any>, episodeID: number, freeServer1?: Maybe<string>, freeServer2?: Maybe<string>, vipServer1?: Maybe<string>, vipServer2?: Maybe<string> }>>> }>>> }> }> };

export type GetTransactionTokenQueryVariables = Exact<{
  paymentMethod: Scalars['Int'];
  quantity: Scalars['Int'];
}>;


export type GetTransactionTokenQuery = { __typename?: 'Query', transactionPaymentToken?: Maybe<{ __typename?: 'transactionPaymentTokenResponse', qrCode?: Maybe<string>, PwaToken?: Maybe<string>, orderId?: Maybe<string>, transactionId?: Maybe<string>, userId?: Maybe<string> }> };

export type GetTrendingMoviesQueryVariables = Exact<{
  last7day?: Maybe<Scalars['String']>;
}>;


export type GetTrendingMoviesQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: Maybe<boolean>, Imdb: number }>>> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUserData?: Maybe<{ __typename?: 'returnUserData', userId?: Maybe<string>, userName?: Maybe<string>, premium?: Maybe<boolean>, expire?: Maybe<string>, verify?: Maybe<boolean> }> };

export type SignUpMutationVariables = Exact<{
  uuid: Scalars['String'];
  fuuid: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signupClient?: Maybe<{ __typename?: 'returnSignup', ok?: Maybe<boolean>, status?: Maybe<string>, accessToken?: Maybe<string>, refreshToken?: Maybe<string> }> };

export type Transaction_StatusQueryVariables = Exact<{
  transactionId: Scalars['String'];
  orderId: Scalars['String'];
}>;


export type Transaction_StatusQuery = { __typename?: 'Query', transaction_status?: Maybe<{ __typename?: 'transaction_status_response', transactionStatus?: Maybe<string> }> };

export type UpdateHistoryMutationVariables = Exact<{
  movieId: Scalars['Int'];
  movieUuid: Scalars['String'];
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  current_time?: Maybe<Scalars['String']>;
}>;


export type UpdateHistoryMutation = { __typename?: 'Mutation', updateHistory?: Maybe<{ __typename?: 'UpdateMovieReturn', status?: Maybe<string>, ok?: Maybe<boolean>, current_time?: Maybe<string> }> };

export type UpdateMovieViewMutationVariables = Exact<{
  uuid: Scalars['ID'];
}>;


export type UpdateMovieViewMutation = { __typename?: 'Mutation', updateMovieView?: Maybe<{ __typename?: 'Movies', name: string }> };


export const CheckValidReferralCodeDocument = gql`
    query CheckValidReferralCode($code: String) {
  checkValidReferralCode(input: {code: $code}) {
    ok
    jwtRenewToken
  }
}
    `;

/**
 * __useCheckValidReferralCodeQuery__
 *
 * To run a query within a React component, call `useCheckValidReferralCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckValidReferralCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckValidReferralCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCheckValidReferralCodeQuery(baseOptions?: Apollo.QueryHookOptions<CheckValidReferralCodeQuery, CheckValidReferralCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckValidReferralCodeQuery, CheckValidReferralCodeQueryVariables>(CheckValidReferralCodeDocument, options);
      }
export function useCheckValidReferralCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckValidReferralCodeQuery, CheckValidReferralCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckValidReferralCodeQuery, CheckValidReferralCodeQueryVariables>(CheckValidReferralCodeDocument, options);
        }
export type CheckValidReferralCodeQueryHookResult = ReturnType<typeof useCheckValidReferralCodeQuery>;
export type CheckValidReferralCodeLazyQueryHookResult = ReturnType<typeof useCheckValidReferralCodeLazyQuery>;
export type CheckValidReferralCodeQueryResult = Apollo.QueryResult<CheckValidReferralCodeQuery, CheckValidReferralCodeQueryVariables>;
export const CreateFavouriteMovieDocument = gql`
    mutation createFavouriteMovie($movieId: ID!, $userId: ID!) {
  createFavouriteMovie(input: {data: {movie: $movieId, user_info: $userId}}) {
    status
  }
}
    `;
export type CreateFavouriteMovieMutationFn = Apollo.MutationFunction<CreateFavouriteMovieMutation, CreateFavouriteMovieMutationVariables>;

/**
 * __useCreateFavouriteMovieMutation__
 *
 * To run a mutation, you first call `useCreateFavouriteMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFavouriteMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFavouriteMovieMutation, { data, loading, error }] = useCreateFavouriteMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateFavouriteMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateFavouriteMovieMutation, CreateFavouriteMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFavouriteMovieMutation, CreateFavouriteMovieMutationVariables>(CreateFavouriteMovieDocument, options);
      }
export type CreateFavouriteMovieMutationHookResult = ReturnType<typeof useCreateFavouriteMovieMutation>;
export type CreateFavouriteMovieMutationResult = Apollo.MutationResult<CreateFavouriteMovieMutation>;
export type CreateFavouriteMovieMutationOptions = Apollo.BaseMutationOptions<CreateFavouriteMovieMutation, CreateFavouriteMovieMutationVariables>;
export const DeleteFavouriteMovieDocument = gql`
    mutation deleteFavouriteMovie($movieId: ID!) {
  deleteFavouriteMovie(input: {where: {id: $movieId}}) {
    status
  }
}
    `;
export type DeleteFavouriteMovieMutationFn = Apollo.MutationFunction<DeleteFavouriteMovieMutation, DeleteFavouriteMovieMutationVariables>;

/**
 * __useDeleteFavouriteMovieMutation__
 *
 * To run a mutation, you first call `useDeleteFavouriteMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFavouriteMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFavouriteMovieMutation, { data, loading, error }] = useDeleteFavouriteMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useDeleteFavouriteMovieMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFavouriteMovieMutation, DeleteFavouriteMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFavouriteMovieMutation, DeleteFavouriteMovieMutationVariables>(DeleteFavouriteMovieDocument, options);
      }
export type DeleteFavouriteMovieMutationHookResult = ReturnType<typeof useDeleteFavouriteMovieMutation>;
export type DeleteFavouriteMovieMutationResult = Apollo.MutationResult<DeleteFavouriteMovieMutation>;
export type DeleteFavouriteMovieMutationOptions = Apollo.BaseMutationOptions<DeleteFavouriteMovieMutation, DeleteFavouriteMovieMutationVariables>;
export const GetAllMoviesDocument = gql`
    query getAllMovies {
  movies(where: {recommend: true}, sort: "created_at:desc", limit: 12) {
    name
    uuid
    id
    release_date
    quality
    photo_url
    isSeries
    mmsub
    Imdb
  }
}
    `;

/**
 * __useGetAllMoviesQuery__
 *
 * To run a query within a React component, call `useGetAllMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMoviesQuery, GetAllMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMoviesQuery, GetAllMoviesQueryVariables>(GetAllMoviesDocument, options);
      }
export function useGetAllMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMoviesQuery, GetAllMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMoviesQuery, GetAllMoviesQueryVariables>(GetAllMoviesDocument, options);
        }
export type GetAllMoviesQueryHookResult = ReturnType<typeof useGetAllMoviesQuery>;
export type GetAllMoviesLazyQueryHookResult = ReturnType<typeof useGetAllMoviesLazyQuery>;
export type GetAllMoviesQueryResult = Apollo.QueryResult<GetAllMoviesQuery, GetAllMoviesQueryVariables>;
export const GetFavouriteMovieDocument = gql`
    query getFavouriteMovie($userId: ID!, $movieId: ID) {
  favouriteMovies(where: {user_info: $userId, movie: $movieId}, limit: 1) {
    id
    movie {
      name
      uuid
      id
      release_date
      quality
      photo_url
      isSeries
    }
  }
}
    `;

/**
 * __useGetFavouriteMovieQuery__
 *
 * To run a query within a React component, call `useGetFavouriteMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavouriteMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavouriteMovieQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetFavouriteMovieQuery(baseOptions: Apollo.QueryHookOptions<GetFavouriteMovieQuery, GetFavouriteMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavouriteMovieQuery, GetFavouriteMovieQueryVariables>(GetFavouriteMovieDocument, options);
      }
export function useGetFavouriteMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavouriteMovieQuery, GetFavouriteMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavouriteMovieQuery, GetFavouriteMovieQueryVariables>(GetFavouriteMovieDocument, options);
        }
export type GetFavouriteMovieQueryHookResult = ReturnType<typeof useGetFavouriteMovieQuery>;
export type GetFavouriteMovieLazyQueryHookResult = ReturnType<typeof useGetFavouriteMovieLazyQuery>;
export type GetFavouriteMovieQueryResult = Apollo.QueryResult<GetFavouriteMovieQuery, GetFavouriteMovieQueryVariables>;
export const GetFavouriteMoviesDocument = gql`
    query getFavouriteMovies($userId: ID!, $start: Int, $limit: Int) {
  favouriteMovies(
    where: {user_info: $userId}
    start: $start
    limit: $limit
    sort: "updated_at:desc"
  ) {
    id
    movie {
      name
      uuid
      id
      release_date
      quality
      photo_url
      isSeries
      mmsub
      Imdb
    }
  }
}
    `;

/**
 * __useGetFavouriteMoviesQuery__
 *
 * To run a query within a React component, call `useGetFavouriteMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavouriteMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavouriteMoviesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetFavouriteMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetFavouriteMoviesQuery, GetFavouriteMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavouriteMoviesQuery, GetFavouriteMoviesQueryVariables>(GetFavouriteMoviesDocument, options);
      }
export function useGetFavouriteMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavouriteMoviesQuery, GetFavouriteMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavouriteMoviesQuery, GetFavouriteMoviesQueryVariables>(GetFavouriteMoviesDocument, options);
        }
export type GetFavouriteMoviesQueryHookResult = ReturnType<typeof useGetFavouriteMoviesQuery>;
export type GetFavouriteMoviesLazyQueryHookResult = ReturnType<typeof useGetFavouriteMoviesLazyQuery>;
export type GetFavouriteMoviesQueryResult = Apollo.QueryResult<GetFavouriteMoviesQuery, GetFavouriteMoviesQueryVariables>;
export const WatchHistoriesDocument = gql`
    query watchHistories($limit: Int!, $start: Int!, $user: ID!) {
  watchHistories(
    where: {user_data: $user}
    start: $start
    limit: $limit
    sort: "updated_at:desc"
  ) {
    movie {
      name
      uuid
      id
      release_date
      quality
      photo_url
      isSeries
      mmsub
      Imdb
    }
  }
}
    `;

/**
 * __useWatchHistoriesQuery__
 *
 * To run a query within a React component, call `useWatchHistoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchHistoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchHistoriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useWatchHistoriesQuery(baseOptions: Apollo.QueryHookOptions<WatchHistoriesQuery, WatchHistoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchHistoriesQuery, WatchHistoriesQueryVariables>(WatchHistoriesDocument, options);
      }
export function useWatchHistoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchHistoriesQuery, WatchHistoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchHistoriesQuery, WatchHistoriesQueryVariables>(WatchHistoriesDocument, options);
        }
export type WatchHistoriesQueryHookResult = ReturnType<typeof useWatchHistoriesQuery>;
export type WatchHistoriesLazyQueryHookResult = ReturnType<typeof useWatchHistoriesLazyQuery>;
export type WatchHistoriesQueryResult = Apollo.QueryResult<WatchHistoriesQuery, WatchHistoriesQueryVariables>;
export const GetWatchHistoryDocument = gql`
    query getWatchHistory($user: ID!, $movieUuid: String!) {
  watchHistories(where: {user_data: $user, movieName: $movieUuid}, limit: 1) {
    id
    season
    episode
    current_time
  }
}
    `;

/**
 * __useGetWatchHistoryQuery__
 *
 * To run a query within a React component, call `useGetWatchHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWatchHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWatchHistoryQuery({
 *   variables: {
 *      user: // value for 'user'
 *      movieUuid: // value for 'movieUuid'
 *   },
 * });
 */
export function useGetWatchHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetWatchHistoryQuery, GetWatchHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWatchHistoryQuery, GetWatchHistoryQueryVariables>(GetWatchHistoryDocument, options);
      }
export function useGetWatchHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWatchHistoryQuery, GetWatchHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWatchHistoryQuery, GetWatchHistoryQueryVariables>(GetWatchHistoryDocument, options);
        }
export type GetWatchHistoryQueryHookResult = ReturnType<typeof useGetWatchHistoryQuery>;
export type GetWatchHistoryLazyQueryHookResult = ReturnType<typeof useGetWatchHistoryLazyQuery>;
export type GetWatchHistoryQueryResult = Apollo.QueryResult<GetWatchHistoryQuery, GetWatchHistoryQueryVariables>;
export const GetLastestMoviesDocument = gql`
    query getLastestMovies {
  movies(sort: "created_at:desc", limit: 12) {
    name
    uuid
    id
    release_date
    quality
    photo_url
    isSeries
    mmsub
    Imdb
  }
}
    `;

/**
 * __useGetLastestMoviesQuery__
 *
 * To run a query within a React component, call `useGetLastestMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastestMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastestMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLastestMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetLastestMoviesQuery, GetLastestMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastestMoviesQuery, GetLastestMoviesQueryVariables>(GetLastestMoviesDocument, options);
      }
export function useGetLastestMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastestMoviesQuery, GetLastestMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastestMoviesQuery, GetLastestMoviesQueryVariables>(GetLastestMoviesDocument, options);
        }
export type GetLastestMoviesQueryHookResult = ReturnType<typeof useGetLastestMoviesQuery>;
export type GetLastestMoviesLazyQueryHookResult = ReturnType<typeof useGetLastestMoviesLazyQuery>;
export type GetLastestMoviesQueryResult = Apollo.QueryResult<GetLastestMoviesQuery, GetLastestMoviesQueryVariables>;
export const GetMovieDocument = gql`
    query getMovie($uuid: String!) {
  getMovie(uuid: $uuid) {
    id
    freeServer1
    uuid
    freeServer2
    vipServer1
    vipServer2
    name
    release_date
    body
    duration
    wide_poster
    Imdb
    isSeries
    mmsub
    premiumOnly
    genres {
      name
    }
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const GetRelatedMoviesDocument = gql`
    query getRelatedMovies {
  movies(limit: 6) {
    name
    uuid
    id
    release_date
    quality
    photo_url
    isSeries
    mmsub
    Imdb
  }
}
    `;

/**
 * __useGetRelatedMoviesQuery__
 *
 * To run a query within a React component, call `useGetRelatedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelatedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelatedMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRelatedMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetRelatedMoviesQuery, GetRelatedMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelatedMoviesQuery, GetRelatedMoviesQueryVariables>(GetRelatedMoviesDocument, options);
      }
export function useGetRelatedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelatedMoviesQuery, GetRelatedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelatedMoviesQuery, GetRelatedMoviesQueryVariables>(GetRelatedMoviesDocument, options);
        }
export type GetRelatedMoviesQueryHookResult = ReturnType<typeof useGetRelatedMoviesQuery>;
export type GetRelatedMoviesLazyQueryHookResult = ReturnType<typeof useGetRelatedMoviesLazyQuery>;
export type GetRelatedMoviesQueryResult = Apollo.QueryResult<GetRelatedMoviesQuery, GetRelatedMoviesQueryVariables>;
export const GetSeriesDocument = gql`
    query getSeries($uuid: String!) {
  getMovie(uuid: $uuid) {
    id
    uuid
    name
    release_date
    body
    duration
    Imdb
    isSeries
    mmsub
    premiumOnly
    genres {
      name
    }
    tv_sery {
      season {
        seasonID
        episodes {
          duration
          episodeID
          freeServer1
          freeServer2
          vipServer1
          vipServer2
        }
      }
    }
  }
}
    `;

/**
 * __useGetSeriesQuery__
 *
 * To run a query within a React component, call `useGetSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeriesQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetSeriesQuery(baseOptions: Apollo.QueryHookOptions<GetSeriesQuery, GetSeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeriesQuery, GetSeriesQueryVariables>(GetSeriesDocument, options);
      }
export function useGetSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeriesQuery, GetSeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeriesQuery, GetSeriesQueryVariables>(GetSeriesDocument, options);
        }
export type GetSeriesQueryHookResult = ReturnType<typeof useGetSeriesQuery>;
export type GetSeriesLazyQueryHookResult = ReturnType<typeof useGetSeriesLazyQuery>;
export type GetSeriesQueryResult = Apollo.QueryResult<GetSeriesQuery, GetSeriesQueryVariables>;
export const GetTransactionTokenDocument = gql`
    query GetTransactionToken($paymentMethod: Int!, $quantity: Int!) {
  transactionPaymentToken(
    input: {paymentMethod: $paymentMethod, quantity: $quantity}
  ) {
    qrCode
    PwaToken
    orderId
    transactionId
    userId
  }
}
    `;

/**
 * __useGetTransactionTokenQuery__
 *
 * To run a query within a React component, call `useGetTransactionTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionTokenQuery({
 *   variables: {
 *      paymentMethod: // value for 'paymentMethod'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useGetTransactionTokenQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionTokenQuery, GetTransactionTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionTokenQuery, GetTransactionTokenQueryVariables>(GetTransactionTokenDocument, options);
      }
export function useGetTransactionTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionTokenQuery, GetTransactionTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionTokenQuery, GetTransactionTokenQueryVariables>(GetTransactionTokenDocument, options);
        }
export type GetTransactionTokenQueryHookResult = ReturnType<typeof useGetTransactionTokenQuery>;
export type GetTransactionTokenLazyQueryHookResult = ReturnType<typeof useGetTransactionTokenLazyQuery>;
export type GetTransactionTokenQueryResult = Apollo.QueryResult<GetTransactionTokenQuery, GetTransactionTokenQueryVariables>;
export const GetTrendingMoviesDocument = gql`
    query getTrendingMovies($last7day: String) {
  movies(sort: "views:desc", limit: 10, where: {updated_at_gte: $last7day}) {
    name
    uuid
    id
    release_date
    quality
    photo_url
    isSeries
    mmsub
    Imdb
  }
}
    `;

/**
 * __useGetTrendingMoviesQuery__
 *
 * To run a query within a React component, call `useGetTrendingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingMoviesQuery({
 *   variables: {
 *      last7day: // value for 'last7day'
 *   },
 * });
 */
export function useGetTrendingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>(GetTrendingMoviesDocument, options);
      }
export function useGetTrendingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>(GetTrendingMoviesDocument, options);
        }
export type GetTrendingMoviesQueryHookResult = ReturnType<typeof useGetTrendingMoviesQuery>;
export type GetTrendingMoviesLazyQueryHookResult = ReturnType<typeof useGetTrendingMoviesLazyQuery>;
export type GetTrendingMoviesQueryResult = Apollo.QueryResult<GetTrendingMoviesQuery, GetTrendingMoviesQueryVariables>;
export const GetUserDocument = gql`
    query getUser {
  getUserData {
    userId
    userName
    premium
    expire
    verify
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SignUpDocument = gql`
    mutation signUp($uuid: String!, $fuuid: String!) {
  signupClient(uuid: $uuid, fuuid: $fuuid) {
    ok
    status
    accessToken
    refreshToken
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      fuuid: // value for 'fuuid'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const Transaction_StatusDocument = gql`
    query Transaction_status($transactionId: String!, $orderId: String!) {
  transaction_status(input: {transactionId: $transactionId, orderId: $orderId}) {
    transactionStatus
  }
}
    `;

/**
 * __useTransaction_StatusQuery__
 *
 * To run a query within a React component, call `useTransaction_StatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransaction_StatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransaction_StatusQuery({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useTransaction_StatusQuery(baseOptions: Apollo.QueryHookOptions<Transaction_StatusQuery, Transaction_StatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Transaction_StatusQuery, Transaction_StatusQueryVariables>(Transaction_StatusDocument, options);
      }
export function useTransaction_StatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Transaction_StatusQuery, Transaction_StatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Transaction_StatusQuery, Transaction_StatusQueryVariables>(Transaction_StatusDocument, options);
        }
export type Transaction_StatusQueryHookResult = ReturnType<typeof useTransaction_StatusQuery>;
export type Transaction_StatusLazyQueryHookResult = ReturnType<typeof useTransaction_StatusLazyQuery>;
export type Transaction_StatusQueryResult = Apollo.QueryResult<Transaction_StatusQuery, Transaction_StatusQueryVariables>;
export const UpdateHistoryDocument = gql`
    mutation updateHistory($movieId: Int!, $movieUuid: String!, $season: Int, $episode: Int, $current_time: String) {
  updateHistory(
    input: {movieId: $movieId, movieUuid: $movieUuid, season: $season, episode: $episode, current_time: $current_time}
  ) {
    status
    ok
    current_time
  }
}
    `;
export type UpdateHistoryMutationFn = Apollo.MutationFunction<UpdateHistoryMutation, UpdateHistoryMutationVariables>;

/**
 * __useUpdateHistoryMutation__
 *
 * To run a mutation, you first call `useUpdateHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHistoryMutation, { data, loading, error }] = useUpdateHistoryMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      movieUuid: // value for 'movieUuid'
 *      season: // value for 'season'
 *      episode: // value for 'episode'
 *      current_time: // value for 'current_time'
 *   },
 * });
 */
export function useUpdateHistoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHistoryMutation, UpdateHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHistoryMutation, UpdateHistoryMutationVariables>(UpdateHistoryDocument, options);
      }
export type UpdateHistoryMutationHookResult = ReturnType<typeof useUpdateHistoryMutation>;
export type UpdateHistoryMutationResult = Apollo.MutationResult<UpdateHistoryMutation>;
export type UpdateHistoryMutationOptions = Apollo.BaseMutationOptions<UpdateHistoryMutation, UpdateHistoryMutationVariables>;
export const UpdateMovieViewDocument = gql`
    mutation UpdateMovieView($uuid: ID!) {
  updateMovieView(uuid: $uuid) {
    name
  }
}
    `;
export type UpdateMovieViewMutationFn = Apollo.MutationFunction<UpdateMovieViewMutation, UpdateMovieViewMutationVariables>;

/**
 * __useUpdateMovieViewMutation__
 *
 * To run a mutation, you first call `useUpdateMovieViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieViewMutation, { data, loading, error }] = useUpdateMovieViewMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useUpdateMovieViewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieViewMutation, UpdateMovieViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMovieViewMutation, UpdateMovieViewMutationVariables>(UpdateMovieViewDocument, options);
      }
export type UpdateMovieViewMutationHookResult = ReturnType<typeof useUpdateMovieViewMutation>;
export type UpdateMovieViewMutationResult = Apollo.MutationResult<UpdateMovieViewMutation>;
export type UpdateMovieViewMutationOptions = Apollo.BaseMutationOptions<UpdateMovieViewMutation, UpdateMovieViewMutationVariables>;
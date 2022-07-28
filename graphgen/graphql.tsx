import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type ComponentTvSeriesEpisodeInput = {
  duration?: InputMaybe<Scalars['Time']>;
  episodeID: Scalars['Int'];
  episodeName?: InputMaybe<Scalars['String']>;
  freeServer1?: InputMaybe<Scalars['String']>;
  freeServer2?: InputMaybe<Scalars['String']>;
  vipServer1?: InputMaybe<Scalars['String']>;
  vipServer2?: InputMaybe<Scalars['String']>;
};

export type ComponentTvSeriesEpisodes = {
  __typename?: 'ComponentTvSeriesEpisodes';
  duration?: Maybe<Scalars['Time']>;
  episodeID: Scalars['Int'];
  episodeName?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
};

export type ComponentTvSeriesSeason = {
  __typename?: 'ComponentTvSeriesSeason';
  episodes?: Maybe<Array<Maybe<ComponentTvSeriesEpisodes>>>;
  id: Scalars['ID'];
  seasonID?: Maybe<Scalars['Int']>;
};

export type ComponentTvSeriesSeasonInput = {
  episodes?: InputMaybe<Array<InputMaybe<ComponentTvSeriesEpisodeInput>>>;
  seasonID?: InputMaybe<Scalars['Int']>;
};

export type EmbedUploader = {
  __typename?: 'EmbedUploader';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  userName?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
};

export type EmbedUploaderAggregator = {
  __typename?: 'EmbedUploaderAggregator';
  avg?: Maybe<EmbedUploaderAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EmbedUploaderAggregatorMax>;
  min?: Maybe<EmbedUploaderAggregatorMin>;
  sum?: Maybe<EmbedUploaderAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
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
  aggregate?: Maybe<EmbedUploaderAggregator>;
  groupBy?: Maybe<EmbedUploaderGroupBy>;
  values?: Maybe<Array<Maybe<EmbedUploader>>>;
};

export type EmbedUploaderConnectionCreated_At = {
  __typename?: 'EmbedUploaderConnectionCreated_at';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedUploaderConnectionId = {
  __typename?: 'EmbedUploaderConnectionId';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmbedUploaderConnectionPassword = {
  __typename?: 'EmbedUploaderConnectionPassword';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedUploaderConnectionTokenVersion = {
  __typename?: 'EmbedUploaderConnectionTokenVersion';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EmbedUploaderConnectionUpdated_At = {
  __typename?: 'EmbedUploaderConnectionUpdated_at';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedUploaderConnectionUserName = {
  __typename?: 'EmbedUploaderConnectionUserName';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedUploaderConnectionVerify = {
  __typename?: 'EmbedUploaderConnectionVerify';
  connection?: Maybe<EmbedUploaderConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type EmbedUploaderGroupBy = {
  __typename?: 'EmbedUploaderGroupBy';
  created_at?: Maybe<Array<Maybe<EmbedUploaderConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<EmbedUploaderConnectionId>>>;
  password?: Maybe<Array<Maybe<EmbedUploaderConnectionPassword>>>;
  tokenVersion?: Maybe<Array<Maybe<EmbedUploaderConnectionTokenVersion>>>;
  updated_at?: Maybe<Array<Maybe<EmbedUploaderConnectionUpdated_At>>>;
  userName?: Maybe<Array<Maybe<EmbedUploaderConnectionUserName>>>;
  verify?: Maybe<Array<Maybe<EmbedUploaderConnectionVerify>>>;
};

export type EmbedUploaderInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  tokenVersion?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  userName?: InputMaybe<Scalars['String']>;
  verify?: InputMaybe<Scalars['Boolean']>;
};

export type EmbedVideo = {
  __typename?: 'EmbedVideo';
  created_at: Scalars['DateTime'];
  eigaLink?: Maybe<Scalars['String']>;
  eigaLink2?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  fileSize?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mm_sub?: Maybe<Scalars['String']>;
  movieName?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  uploadStatus?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
};

export type EmbedVideo2 = {
  __typename?: 'EmbedVideo2';
  created_at: Scalars['DateTime'];
  embedLink?: Maybe<Scalars['String']>;
  eng_sub?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mm_sub?: Maybe<Scalars['String']>;
  movie_name?: Maybe<Scalars['String']>;
  original_link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  upload_status?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  video_size?: Maybe<Scalars['String']>;
};

export type EmbedVideo2Aggregator = {
  __typename?: 'EmbedVideo2Aggregator';
  avg?: Maybe<EmbedVideo2AggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EmbedVideo2AggregatorMax>;
  min?: Maybe<EmbedVideo2AggregatorMin>;
  sum?: Maybe<EmbedVideo2AggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EmbedVideo2AggregatorAvg = {
  __typename?: 'EmbedVideo2AggregatorAvg';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2AggregatorMax = {
  __typename?: 'EmbedVideo2AggregatorMax';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2AggregatorMin = {
  __typename?: 'EmbedVideo2AggregatorMin';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2AggregatorSum = {
  __typename?: 'EmbedVideo2AggregatorSum';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideo2Connection = {
  __typename?: 'EmbedVideo2Connection';
  aggregate?: Maybe<EmbedVideo2Aggregator>;
  groupBy?: Maybe<EmbedVideo2GroupBy>;
  values?: Maybe<Array<Maybe<EmbedVideo2>>>;
};

export type EmbedVideo2ConnectionCreated_At = {
  __typename?: 'EmbedVideo2ConnectionCreated_at';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideo2ConnectionEmbedLink = {
  __typename?: 'EmbedVideo2ConnectionEmbedLink';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2ConnectionEng_Sub = {
  __typename?: 'EmbedVideo2ConnectionEng_sub';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2ConnectionEpisode = {
  __typename?: 'EmbedVideo2ConnectionEpisode';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['Int']>;
};

export type EmbedVideo2ConnectionId = {
  __typename?: 'EmbedVideo2ConnectionId';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmbedVideo2ConnectionMm_Sub = {
  __typename?: 'EmbedVideo2ConnectionMm_sub';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2ConnectionMovie_Name = {
  __typename?: 'EmbedVideo2ConnectionMovie_name';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2ConnectionOriginal_Link = {
  __typename?: 'EmbedVideo2ConnectionOriginal_link';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2ConnectionPublished_At = {
  __typename?: 'EmbedVideo2ConnectionPublished_at';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideo2ConnectionSeason = {
  __typename?: 'EmbedVideo2ConnectionSeason';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['Int']>;
};

export type EmbedVideo2ConnectionUpdated_At = {
  __typename?: 'EmbedVideo2ConnectionUpdated_at';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideo2ConnectionUpload_Status = {
  __typename?: 'EmbedVideo2ConnectionUpload_status';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type EmbedVideo2ConnectionUploader = {
  __typename?: 'EmbedVideo2ConnectionUploader';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2ConnectionVideo_Size = {
  __typename?: 'EmbedVideo2ConnectionVideo_size';
  connection?: Maybe<EmbedVideo2Connection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideo2GroupBy = {
  __typename?: 'EmbedVideo2GroupBy';
  created_at?: Maybe<Array<Maybe<EmbedVideo2ConnectionCreated_At>>>;
  embedLink?: Maybe<Array<Maybe<EmbedVideo2ConnectionEmbedLink>>>;
  eng_sub?: Maybe<Array<Maybe<EmbedVideo2ConnectionEng_Sub>>>;
  episode?: Maybe<Array<Maybe<EmbedVideo2ConnectionEpisode>>>;
  id?: Maybe<Array<Maybe<EmbedVideo2ConnectionId>>>;
  mm_sub?: Maybe<Array<Maybe<EmbedVideo2ConnectionMm_Sub>>>;
  movie_name?: Maybe<Array<Maybe<EmbedVideo2ConnectionMovie_Name>>>;
  original_link?: Maybe<Array<Maybe<EmbedVideo2ConnectionOriginal_Link>>>;
  published_at?: Maybe<Array<Maybe<EmbedVideo2ConnectionPublished_At>>>;
  season?: Maybe<Array<Maybe<EmbedVideo2ConnectionSeason>>>;
  updated_at?: Maybe<Array<Maybe<EmbedVideo2ConnectionUpdated_At>>>;
  upload_status?: Maybe<Array<Maybe<EmbedVideo2ConnectionUpload_Status>>>;
  uploader?: Maybe<Array<Maybe<EmbedVideo2ConnectionUploader>>>;
  video_size?: Maybe<Array<Maybe<EmbedVideo2ConnectionVideo_Size>>>;
};

export type EmbedVideo2Input = {
  created_by?: InputMaybe<Scalars['ID']>;
  embedLink?: InputMaybe<Scalars['String']>;
  eng_sub?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  mm_sub?: InputMaybe<Scalars['String']>;
  movie_name?: InputMaybe<Scalars['String']>;
  original_link?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  upload_status?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['String']>;
  video_size?: InputMaybe<Scalars['String']>;
};

export type EmbedVideoAggregator = {
  __typename?: 'EmbedVideoAggregator';
  avg?: Maybe<EmbedVideoAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EmbedVideoAggregatorMax>;
  min?: Maybe<EmbedVideoAggregatorMin>;
  sum?: Maybe<EmbedVideoAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EmbedVideoAggregatorAvg = {
  __typename?: 'EmbedVideoAggregatorAvg';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideoAggregatorMax = {
  __typename?: 'EmbedVideoAggregatorMax';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideoAggregatorMin = {
  __typename?: 'EmbedVideoAggregatorMin';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideoAggregatorSum = {
  __typename?: 'EmbedVideoAggregatorSum';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type EmbedVideoConnection = {
  __typename?: 'EmbedVideoConnection';
  aggregate?: Maybe<EmbedVideoAggregator>;
  groupBy?: Maybe<EmbedVideoGroupBy>;
  values?: Maybe<Array<Maybe<EmbedVideo>>>;
};

export type EmbedVideoConnectionCreated_At = {
  __typename?: 'EmbedVideoConnectionCreated_at';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideoConnectionEigaLink = {
  __typename?: 'EmbedVideoConnectionEigaLink';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionEigaLink2 = {
  __typename?: 'EmbedVideoConnectionEigaLink2';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionEng_Sub = {
  __typename?: 'EmbedVideoConnectionEng_sub';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionEpisode = {
  __typename?: 'EmbedVideoConnectionEpisode';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EmbedVideoConnectionFileSize = {
  __typename?: 'EmbedVideoConnectionFileSize';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionId = {
  __typename?: 'EmbedVideoConnectionId';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmbedVideoConnectionMm_Sub = {
  __typename?: 'EmbedVideoConnectionMm_sub';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionMovieName = {
  __typename?: 'EmbedVideoConnectionMovieName';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionOriginalLink = {
  __typename?: 'EmbedVideoConnectionOriginalLink';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoConnectionPublished_At = {
  __typename?: 'EmbedVideoConnectionPublished_at';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideoConnectionSeason = {
  __typename?: 'EmbedVideoConnectionSeason';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EmbedVideoConnectionUpdated_At = {
  __typename?: 'EmbedVideoConnectionUpdated_at';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmbedVideoConnectionUploadStatus = {
  __typename?: 'EmbedVideoConnectionUploadStatus';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type EmbedVideoConnectionUploader = {
  __typename?: 'EmbedVideoConnectionUploader';
  connection?: Maybe<EmbedVideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmbedVideoGroupBy = {
  __typename?: 'EmbedVideoGroupBy';
  created_at?: Maybe<Array<Maybe<EmbedVideoConnectionCreated_At>>>;
  eigaLink?: Maybe<Array<Maybe<EmbedVideoConnectionEigaLink>>>;
  eigaLink2?: Maybe<Array<Maybe<EmbedVideoConnectionEigaLink2>>>;
  eng_sub?: Maybe<Array<Maybe<EmbedVideoConnectionEng_Sub>>>;
  episode?: Maybe<Array<Maybe<EmbedVideoConnectionEpisode>>>;
  fileSize?: Maybe<Array<Maybe<EmbedVideoConnectionFileSize>>>;
  id?: Maybe<Array<Maybe<EmbedVideoConnectionId>>>;
  mm_sub?: Maybe<Array<Maybe<EmbedVideoConnectionMm_Sub>>>;
  movieName?: Maybe<Array<Maybe<EmbedVideoConnectionMovieName>>>;
  originalLink?: Maybe<Array<Maybe<EmbedVideoConnectionOriginalLink>>>;
  published_at?: Maybe<Array<Maybe<EmbedVideoConnectionPublished_At>>>;
  season?: Maybe<Array<Maybe<EmbedVideoConnectionSeason>>>;
  updated_at?: Maybe<Array<Maybe<EmbedVideoConnectionUpdated_At>>>;
  uploadStatus?: Maybe<Array<Maybe<EmbedVideoConnectionUploadStatus>>>;
  uploader?: Maybe<Array<Maybe<EmbedVideoConnectionUploader>>>;
};

export type EmbedVideoInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  eigaLink?: InputMaybe<Scalars['String']>;
  eigaLink2?: InputMaybe<Scalars['String']>;
  eng_sub?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  fileSize?: InputMaybe<Scalars['String']>;
  mm_sub?: InputMaybe<Scalars['String']>;
  movieName?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uploadStatus?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['String']>;
};

export type FavouriteMovieInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  movie?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_info?: InputMaybe<Scalars['ID']>;
};

export type FavouriteMovies = {
  __typename?: 'FavouriteMovies';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  movie?: Maybe<Movies>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  user_info?: Maybe<UserData>;
};

export type FavouriteMoviesAggregator = {
  __typename?: 'FavouriteMoviesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FavouriteMoviesConnection = {
  __typename?: 'FavouriteMoviesConnection';
  aggregate?: Maybe<FavouriteMoviesAggregator>;
  groupBy?: Maybe<FavouriteMoviesGroupBy>;
  values?: Maybe<Array<Maybe<FavouriteMovies>>>;
};

export type FavouriteMoviesConnectionCreated_At = {
  __typename?: 'FavouriteMoviesConnectionCreated_at';
  connection?: Maybe<FavouriteMoviesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FavouriteMoviesConnectionId = {
  __typename?: 'FavouriteMoviesConnectionId';
  connection?: Maybe<FavouriteMoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FavouriteMoviesConnectionMovie = {
  __typename?: 'FavouriteMoviesConnectionMovie';
  connection?: Maybe<FavouriteMoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FavouriteMoviesConnectionPublished_At = {
  __typename?: 'FavouriteMoviesConnectionPublished_at';
  connection?: Maybe<FavouriteMoviesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FavouriteMoviesConnectionUpdated_At = {
  __typename?: 'FavouriteMoviesConnectionUpdated_at';
  connection?: Maybe<FavouriteMoviesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FavouriteMoviesConnectionUser_Info = {
  __typename?: 'FavouriteMoviesConnectionUser_info';
  connection?: Maybe<FavouriteMoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FavouriteMoviesGroupBy = {
  __typename?: 'FavouriteMoviesGroupBy';
  created_at?: Maybe<Array<Maybe<FavouriteMoviesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<FavouriteMoviesConnectionId>>>;
  movie?: Maybe<Array<Maybe<FavouriteMoviesConnectionMovie>>>;
  published_at?: Maybe<Array<Maybe<FavouriteMoviesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<FavouriteMoviesConnectionUpdated_At>>>;
  user_info?: Maybe<Array<Maybe<FavouriteMoviesConnectionUser_Info>>>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type GenreInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Genres = {
  __typename?: 'Genres';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  uuid?: Maybe<Scalars['String']>;
};

export type GenresAggregator = {
  __typename?: 'GenresAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GenresConnection = {
  __typename?: 'GenresConnection';
  aggregate?: Maybe<GenresAggregator>;
  groupBy?: Maybe<GenresGroupBy>;
  values?: Maybe<Array<Maybe<Genres>>>;
};

export type GenresConnectionCreated_At = {
  __typename?: 'GenresConnectionCreated_at';
  connection?: Maybe<GenresConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GenresConnectionId = {
  __typename?: 'GenresConnectionId';
  connection?: Maybe<GenresConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GenresConnectionName = {
  __typename?: 'GenresConnectionName';
  connection?: Maybe<GenresConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GenresConnectionPublished_At = {
  __typename?: 'GenresConnectionPublished_at';
  connection?: Maybe<GenresConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GenresConnectionUpdated_At = {
  __typename?: 'GenresConnectionUpdated_at';
  connection?: Maybe<GenresConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GenresConnectionUuid = {
  __typename?: 'GenresConnectionUuid';
  connection?: Maybe<GenresConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GenresGroupBy = {
  __typename?: 'GenresGroupBy';
  created_at?: Maybe<Array<Maybe<GenresConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<GenresConnectionId>>>;
  name?: Maybe<Array<Maybe<GenresConnectionName>>>;
  published_at?: Maybe<Array<Maybe<GenresConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<GenresConnectionUpdated_At>>>;
  uuid?: Maybe<Array<Maybe<GenresConnectionUuid>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = ComponentTvSeriesEpisodes | ComponentTvSeriesSeason | EmbedUploader | EmbedUploaderAggregator | EmbedUploaderAggregatorAvg | EmbedUploaderAggregatorMax | EmbedUploaderAggregatorMin | EmbedUploaderAggregatorSum | EmbedUploaderConnection | EmbedUploaderConnectionCreated_At | EmbedUploaderConnectionId | EmbedUploaderConnectionPassword | EmbedUploaderConnectionTokenVersion | EmbedUploaderConnectionUpdated_At | EmbedUploaderConnectionUserName | EmbedUploaderConnectionVerify | EmbedUploaderGroupBy | EmbedVideo | EmbedVideo2 | EmbedVideo2Aggregator | EmbedVideo2AggregatorAvg | EmbedVideo2AggregatorMax | EmbedVideo2AggregatorMin | EmbedVideo2AggregatorSum | EmbedVideo2Connection | EmbedVideo2ConnectionCreated_At | EmbedVideo2ConnectionEmbedLink | EmbedVideo2ConnectionEng_Sub | EmbedVideo2ConnectionEpisode | EmbedVideo2ConnectionId | EmbedVideo2ConnectionMm_Sub | EmbedVideo2ConnectionMovie_Name | EmbedVideo2ConnectionOriginal_Link | EmbedVideo2ConnectionPublished_At | EmbedVideo2ConnectionSeason | EmbedVideo2ConnectionUpdated_At | EmbedVideo2ConnectionUpload_Status | EmbedVideo2ConnectionUploader | EmbedVideo2ConnectionVideo_Size | EmbedVideo2GroupBy | EmbedVideoAggregator | EmbedVideoAggregatorAvg | EmbedVideoAggregatorMax | EmbedVideoAggregatorMin | EmbedVideoAggregatorSum | EmbedVideoConnection | EmbedVideoConnectionCreated_At | EmbedVideoConnectionEigaLink | EmbedVideoConnectionEigaLink2 | EmbedVideoConnectionEng_Sub | EmbedVideoConnectionEpisode | EmbedVideoConnectionFileSize | EmbedVideoConnectionId | EmbedVideoConnectionMm_Sub | EmbedVideoConnectionMovieName | EmbedVideoConnectionOriginalLink | EmbedVideoConnectionPublished_At | EmbedVideoConnectionSeason | EmbedVideoConnectionUpdated_At | EmbedVideoConnectionUploadStatus | EmbedVideoConnectionUploader | EmbedVideoGroupBy | FavouriteMovies | FavouriteMoviesAggregator | FavouriteMoviesConnection | FavouriteMoviesConnectionCreated_At | FavouriteMoviesConnectionId | FavouriteMoviesConnectionMovie | FavouriteMoviesConnectionPublished_At | FavouriteMoviesConnectionUpdated_At | FavouriteMoviesConnectionUser_Info | FavouriteMoviesGroupBy | Genres | GenresAggregator | GenresConnection | GenresConnectionCreated_At | GenresConnectionId | GenresConnectionName | GenresConnectionPublished_At | GenresConnectionUpdated_At | GenresConnectionUuid | GenresGroupBy | I18NLocale | Movies | MoviesAggregator | MoviesAggregatorAvg | MoviesAggregatorMax | MoviesAggregatorMin | MoviesAggregatorSum | MoviesConnection | MoviesConnectionAll_Time_Views | MoviesConnectionBody | MoviesConnectionCreated_At | MoviesConnectionDuration | MoviesConnectionFreeServer1 | MoviesConnectionFreeServer2 | MoviesConnectionId | MoviesConnectionImdb | MoviesConnectionIsSeries | MoviesConnectionMmsub | MoviesConnectionName | MoviesConnectionPhoto_Url | MoviesConnectionPremiumOnly | MoviesConnectionPublished_At | MoviesConnectionQuality | MoviesConnectionRecommend | MoviesConnectionRelease_Date | MoviesConnectionSevendaysago | MoviesConnectionTv_Sery | MoviesConnectionUpdated_At | MoviesConnectionUuid | MoviesConnectionViews | MoviesConnectionVipServer1 | MoviesConnectionVipServer2 | MoviesConnectionWide_Poster | MoviesGroupBy | ReferralCode | ReferralCodeAggregator | ReferralCodeAggregatorAvg | ReferralCodeAggregatorMax | ReferralCodeAggregatorMin | ReferralCodeAggregatorSum | ReferralCodeConnection | ReferralCodeConnectionCode | ReferralCodeConnectionCreated_At | ReferralCodeConnectionId | ReferralCodeConnectionMonth | ReferralCodeConnectionPublished_At | ReferralCodeConnectionUpdated_At | ReferralCodeConnectionUsed_Client_Uuid | ReferralCodeGroupBy | Transactions | TransactionsAggregator | TransactionsConnection | TransactionsConnectionCreatedAt | TransactionsConnectionCreated_At | TransactionsConnectionCustomerName | TransactionsConnectionId | TransactionsConnectionMerchantOrderId | TransactionsConnectionMethodName | TransactionsConnectionProviderName | TransactionsConnectionPublished_At | TransactionsConnectionQuantity | TransactionsConnectionTotalAmount | TransactionsConnectionTransactionId | TransactionsConnectionTransactionStatus | TransactionsConnectionUpdated_At | TransactionsGroupBy | TvSeries | TvSeriesAggregator | TvSeriesConnection | TvSeriesConnectionCreated_At | TvSeriesConnectionId | TvSeriesConnectionName | TvSeriesConnectionPublished_At | TvSeriesConnectionUpdated_At | TvSeriesGroupBy | UpdateMovieReturn | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserData | UserDataAggregator | UserDataAggregatorAvg | UserDataAggregatorMax | UserDataAggregatorMin | UserDataAggregatorSum | UserDataConnection | UserDataConnectionCreated_At | UserDataConnectionExpire | UserDataConnectionFuuid | UserDataConnectionId | UserDataConnectionPublished_At | UserDataConnectionTokenVersion | UserDataConnectionUpdated_At | UserDataConnectionUuid | UserDataConnectionVerify | UserDataGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | WatchHistory | WatchHistoryAggregator | WatchHistoryAggregatorAvg | WatchHistoryAggregatorMax | WatchHistoryAggregatorMin | WatchHistoryAggregatorSum | WatchHistoryConnection | WatchHistoryConnectionCreated_At | WatchHistoryConnectionCurrent_Time | WatchHistoryConnectionEpisode | WatchHistoryConnectionId | WatchHistoryConnectionLast_Updated | WatchHistoryConnectionMovie | WatchHistoryConnectionMovieName | WatchHistoryConnectionPublished_At | WatchHistoryConnectionSeason | WatchHistoryConnectionUpdated_At | WatchHistoryConnectionUser_Data | WatchHistoryGroupBy | CheckValidReferralCodeResult | CreateEmbedUploaderPayload | CreateEmbedVideo2Payload | CreateEmbedVideoPayload | CreateFavouriteMoviePayload | CreateGenrePayload | CreateMoviePayload | CreateReferralCodePayload | CreateRolePayload | CreateTransactionPayload | CreateTvSeryPayload | CreateUserDatumPayload | CreateUserPayload | CreateWatchHistoryPayload | DeleteEmbedUploaderPayload | DeleteEmbedVideo2Payload | DeleteEmbedVideoPayload | DeleteFavouriteMoviePayload | DeleteFilePayload | DeleteGenrePayload | DeleteMoviePayload | DeleteReferralCodePayload | DeleteRolePayload | DeleteTransactionPayload | DeleteTvSeryPayload | DeleteUserDatumPayload | DeleteUserPayload | DeleteWatchHistoryPayload | GetSuggestedMoviesResult | OptionalMovies | ReturnSignup | ReturnUserData | TransactionPaymentTokenResponse | Transaction_Status_Response | TypeRegisterEmbedUploader | Typeloginembeduploader | UpdateEmbedUploaderPayload | UpdateEmbedVideo2Payload | UpdateEmbedVideoPayload | UpdateFavouriteMoviePayload | UpdateGenrePayload | UpdateMoviePayload | UpdateReferralCodePayload | UpdateRolePayload | UpdateTransactionPayload | UpdateTvSeryPayload | UpdateUserDatumPayload | UpdateUserPayload | UpdateWatchHistoryPayload | VerifyTokenPayload;

export type MovieInput = {
  Imdb: Scalars['Float'];
  all_time_views?: InputMaybe<Scalars['Long']>;
  body: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  duration: Scalars['Time'];
  freeServer1?: InputMaybe<Scalars['String']>;
  freeServer2?: InputMaybe<Scalars['String']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isSeries: Scalars['Boolean'];
  mmsub?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  photo_url: Scalars['String'];
  premiumOnly?: InputMaybe<Scalars['Boolean']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  quality: Scalars['String'];
  recommend?: InputMaybe<Scalars['Boolean']>;
  release_date: Scalars['Int'];
  sevendaysago?: InputMaybe<Scalars['String']>;
  tv_sery?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uuid?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Long']>;
  vipServer1?: InputMaybe<Scalars['String']>;
  vipServer2?: InputMaybe<Scalars['String']>;
  wide_poster?: InputMaybe<Scalars['String']>;
};

export type Movies = {
  __typename?: 'Movies';
  Imdb: Scalars['Float'];
  all_time_views?: Maybe<Scalars['Long']>;
  body: Scalars['String'];
  created_at: Scalars['DateTime'];
  duration: Scalars['Time'];
  freeServer1?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  id: Scalars['ID'];
  isSeries: Scalars['Boolean'];
  mmsub?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  photo_url: Scalars['String'];
  premiumOnly: Scalars['Boolean'];
  published_at?: Maybe<Scalars['DateTime']>;
  quality: Scalars['String'];
  recommend?: Maybe<Scalars['Boolean']>;
  release_date: Scalars['Int'];
  sevendaysago?: Maybe<Scalars['String']>;
  tv_sery?: Maybe<TvSeries>;
  updated_at: Scalars['DateTime'];
  uuid?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Long']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  wide_poster?: Maybe<Scalars['String']>;
};


export type MoviesGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type MoviesAggregator = {
  __typename?: 'MoviesAggregator';
  avg?: Maybe<MoviesAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<MoviesAggregatorMax>;
  min?: Maybe<MoviesAggregatorMin>;
  sum?: Maybe<MoviesAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MoviesAggregatorAvg = {
  __typename?: 'MoviesAggregatorAvg';
  Imdb?: Maybe<Scalars['Float']>;
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorMax = {
  __typename?: 'MoviesAggregatorMax';
  Imdb?: Maybe<Scalars['Float']>;
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorMin = {
  __typename?: 'MoviesAggregatorMin';
  Imdb?: Maybe<Scalars['Float']>;
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorSum = {
  __typename?: 'MoviesAggregatorSum';
  Imdb?: Maybe<Scalars['Float']>;
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  aggregate?: Maybe<MoviesAggregator>;
  groupBy?: Maybe<MoviesGroupBy>;
  values?: Maybe<Array<Maybe<Movies>>>;
};

export type MoviesConnectionAll_Time_Views = {
  __typename?: 'MoviesConnectionAll_time_views';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MoviesConnectionBody = {
  __typename?: 'MoviesConnectionBody';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionCreated_At = {
  __typename?: 'MoviesConnectionCreated_at';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MoviesConnectionDuration = {
  __typename?: 'MoviesConnectionDuration';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MoviesConnectionFreeServer1 = {
  __typename?: 'MoviesConnectionFreeServer1';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionFreeServer2 = {
  __typename?: 'MoviesConnectionFreeServer2';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionId = {
  __typename?: 'MoviesConnectionId';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MoviesConnectionImdb = {
  __typename?: 'MoviesConnectionImdb';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type MoviesConnectionIsSeries = {
  __typename?: 'MoviesConnectionIsSeries';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type MoviesConnectionMmsub = {
  __typename?: 'MoviesConnectionMmsub';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type MoviesConnectionName = {
  __typename?: 'MoviesConnectionName';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionPhoto_Url = {
  __typename?: 'MoviesConnectionPhoto_url';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionPremiumOnly = {
  __typename?: 'MoviesConnectionPremiumOnly';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type MoviesConnectionPublished_At = {
  __typename?: 'MoviesConnectionPublished_at';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MoviesConnectionQuality = {
  __typename?: 'MoviesConnectionQuality';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionRecommend = {
  __typename?: 'MoviesConnectionRecommend';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type MoviesConnectionRelease_Date = {
  __typename?: 'MoviesConnectionRelease_date';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type MoviesConnectionSevendaysago = {
  __typename?: 'MoviesConnectionSevendaysago';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionTv_Sery = {
  __typename?: 'MoviesConnectionTv_sery';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MoviesConnectionUpdated_At = {
  __typename?: 'MoviesConnectionUpdated_at';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MoviesConnectionUuid = {
  __typename?: 'MoviesConnectionUuid';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionViews = {
  __typename?: 'MoviesConnectionViews';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MoviesConnectionVipServer1 = {
  __typename?: 'MoviesConnectionVipServer1';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionVipServer2 = {
  __typename?: 'MoviesConnectionVipServer2';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesConnectionWide_Poster = {
  __typename?: 'MoviesConnectionWide_poster';
  connection?: Maybe<MoviesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MoviesGroupBy = {
  __typename?: 'MoviesGroupBy';
  Imdb?: Maybe<Array<Maybe<MoviesConnectionImdb>>>;
  all_time_views?: Maybe<Array<Maybe<MoviesConnectionAll_Time_Views>>>;
  body?: Maybe<Array<Maybe<MoviesConnectionBody>>>;
  created_at?: Maybe<Array<Maybe<MoviesConnectionCreated_At>>>;
  duration?: Maybe<Array<Maybe<MoviesConnectionDuration>>>;
  freeServer1?: Maybe<Array<Maybe<MoviesConnectionFreeServer1>>>;
  freeServer2?: Maybe<Array<Maybe<MoviesConnectionFreeServer2>>>;
  id?: Maybe<Array<Maybe<MoviesConnectionId>>>;
  isSeries?: Maybe<Array<Maybe<MoviesConnectionIsSeries>>>;
  mmsub?: Maybe<Array<Maybe<MoviesConnectionMmsub>>>;
  name?: Maybe<Array<Maybe<MoviesConnectionName>>>;
  photo_url?: Maybe<Array<Maybe<MoviesConnectionPhoto_Url>>>;
  premiumOnly?: Maybe<Array<Maybe<MoviesConnectionPremiumOnly>>>;
  published_at?: Maybe<Array<Maybe<MoviesConnectionPublished_At>>>;
  quality?: Maybe<Array<Maybe<MoviesConnectionQuality>>>;
  recommend?: Maybe<Array<Maybe<MoviesConnectionRecommend>>>;
  release_date?: Maybe<Array<Maybe<MoviesConnectionRelease_Date>>>;
  sevendaysago?: Maybe<Array<Maybe<MoviesConnectionSevendaysago>>>;
  tv_sery?: Maybe<Array<Maybe<MoviesConnectionTv_Sery>>>;
  updated_at?: Maybe<Array<Maybe<MoviesConnectionUpdated_At>>>;
  uuid?: Maybe<Array<Maybe<MoviesConnectionUuid>>>;
  views?: Maybe<Array<Maybe<MoviesConnectionViews>>>;
  vipServer1?: Maybe<Array<Maybe<MoviesConnectionVipServer1>>>;
  vipServer2?: Maybe<Array<Maybe<MoviesConnectionVipServer2>>>;
  wide_poster?: Maybe<Array<Maybe<MoviesConnectionWide_Poster>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmbedUploader?: Maybe<CreateEmbedUploaderPayload>;
  createEmbedVideo?: Maybe<CreateEmbedVideoPayload>;
  createEmbedVideo2?: Maybe<CreateEmbedVideo2Payload>;
  createFavouriteMovie?: Maybe<CreateFavouriteMoviePayload>;
  createGenre?: Maybe<CreateGenrePayload>;
  createMovie?: Maybe<CreateMoviePayload>;
  createReferralCode?: Maybe<CreateReferralCodePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTransaction?: Maybe<CreateTransactionPayload>;
  createTvSery?: Maybe<CreateTvSeryPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createUserDatum?: Maybe<CreateUserDatumPayload>;
  createWatchHistory?: Maybe<CreateWatchHistoryPayload>;
  deleteEmbedUploader?: Maybe<DeleteEmbedUploaderPayload>;
  deleteEmbedVideo?: Maybe<DeleteEmbedVideoPayload>;
  deleteEmbedVideo2?: Maybe<DeleteEmbedVideo2Payload>;
  deleteFavouriteMovie?: Maybe<DeleteFavouriteMoviePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGenre?: Maybe<DeleteGenrePayload>;
  deleteMovie?: Maybe<DeleteMoviePayload>;
  deleteReferralCode?: Maybe<DeleteReferralCodePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  deleteTvSery?: Maybe<DeleteTvSeryPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserDatum?: Maybe<DeleteUserDatumPayload>;
  deleteWatchHistory?: Maybe<DeleteWatchHistoryPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  embedRegister?: Maybe<TypeRegisterEmbedUploader>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  loginEmbedUploader?: Maybe<Typeloginembeduploader>;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  signupClient?: Maybe<ReturnSignup>;
  updateEmbedUploader?: Maybe<UpdateEmbedUploaderPayload>;
  updateEmbedVideo?: Maybe<UpdateEmbedVideoPayload>;
  updateEmbedVideo2?: Maybe<UpdateEmbedVideo2Payload>;
  updateFavouriteMovie?: Maybe<UpdateFavouriteMoviePayload>;
  updateFileInfo: UploadFile;
  updateGenre?: Maybe<UpdateGenrePayload>;
  updateHistory?: Maybe<UpdateMovieReturn>;
  updateMovie?: Maybe<UpdateMoviePayload>;
  updateMovieView?: Maybe<Movies>;
  updateReferralCode?: Maybe<UpdateReferralCodePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  updateTvSery?: Maybe<UpdateTvSeryPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserDatum?: Maybe<UpdateUserDatumPayload>;
  updateWatchHistory?: Maybe<UpdateWatchHistoryPayload>;
  upload: UploadFile;
  verifyToken?: Maybe<VerifyTokenPayload>;
};


export type MutationCreateEmbedUploaderArgs = {
  input?: InputMaybe<CreateEmbedUploaderInput>;
};


export type MutationCreateEmbedVideoArgs = {
  input?: InputMaybe<CreateEmbedVideoInput>;
};


export type MutationCreateEmbedVideo2Args = {
  input?: InputMaybe<CreateEmbedVideo2Input>;
};


export type MutationCreateFavouriteMovieArgs = {
  input?: InputMaybe<CreateFavouriteMovieInput>;
};


export type MutationCreateGenreArgs = {
  input?: InputMaybe<CreateGenreInput>;
};


export type MutationCreateMovieArgs = {
  input?: InputMaybe<CreateMovieInput>;
};


export type MutationCreateReferralCodeArgs = {
  input?: InputMaybe<CreateReferralCodeInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTransactionArgs = {
  input?: InputMaybe<CreateTransactionInput>;
};


export type MutationCreateTvSeryArgs = {
  input?: InputMaybe<CreateTvSeryInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateUserDatumArgs = {
  input?: InputMaybe<CreateUserDatumInput>;
};


export type MutationCreateWatchHistoryArgs = {
  input?: InputMaybe<CreateWatchHistoryInput>;
};


export type MutationDeleteEmbedUploaderArgs = {
  input?: InputMaybe<DeleteEmbedUploaderInput>;
};


export type MutationDeleteEmbedVideoArgs = {
  input?: InputMaybe<DeleteEmbedVideoInput>;
};


export type MutationDeleteEmbedVideo2Args = {
  input?: InputMaybe<DeleteEmbedVideo2Input>;
};


export type MutationDeleteFavouriteMovieArgs = {
  input?: InputMaybe<DeleteFavouriteMovieInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteGenreArgs = {
  input?: InputMaybe<DeleteGenreInput>;
};


export type MutationDeleteMovieArgs = {
  input?: InputMaybe<DeleteMovieInput>;
};


export type MutationDeleteReferralCodeArgs = {
  input?: InputMaybe<DeleteReferralCodeInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteTransactionArgs = {
  input?: InputMaybe<DeleteTransactionInput>;
};


export type MutationDeleteTvSeryArgs = {
  input?: InputMaybe<DeleteTvSeryInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteUserDatumArgs = {
  input?: InputMaybe<DeleteUserDatumInput>;
};


export type MutationDeleteWatchHistoryArgs = {
  input?: InputMaybe<DeleteWatchHistoryInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationEmbedRegisterArgs = {
  input?: InputMaybe<LoginEmbedInput>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationLoginEmbedUploaderArgs = {
  input?: InputMaybe<LoginEmbedInput>;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationSignupClientArgs = {
  fuuid?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmbedUploaderArgs = {
  input?: InputMaybe<UpdateEmbedUploaderInput>;
};


export type MutationUpdateEmbedVideoArgs = {
  input?: InputMaybe<UpdateEmbedVideoInput>;
};


export type MutationUpdateEmbedVideo2Args = {
  input?: InputMaybe<UpdateEmbedVideo2Input>;
};


export type MutationUpdateFavouriteMovieArgs = {
  input?: InputMaybe<UpdateFavouriteMovieInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGenreArgs = {
  input?: InputMaybe<UpdateGenreInput>;
};


export type MutationUpdateHistoryArgs = {
  input?: InputMaybe<UpdateHistoryInput>;
};


export type MutationUpdateMovieArgs = {
  input?: InputMaybe<UpdateMovieInput>;
};


export type MutationUpdateMovieViewArgs = {
  uuid: Scalars['ID'];
};


export type MutationUpdateReferralCodeArgs = {
  input?: InputMaybe<UpdateReferralCodeInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateTransactionArgs = {
  input?: InputMaybe<UpdateTransactionInput>;
};


export type MutationUpdateTvSeryArgs = {
  input?: InputMaybe<UpdateTvSeryInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateUserDatumArgs = {
  input?: InputMaybe<UpdateUserDatumInput>;
};


export type MutationUpdateWatchHistoryArgs = {
  input?: InputMaybe<UpdateWatchHistoryInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  checkValidReferralCode?: Maybe<CheckValidReferralCodeResult>;
  embedUploader?: Maybe<EmbedUploader>;
  embedUploaders?: Maybe<Array<Maybe<EmbedUploader>>>;
  embedUploadersConnection?: Maybe<EmbedUploaderConnection>;
  embedVideo?: Maybe<EmbedVideo>;
  embedVideo2?: Maybe<EmbedVideo2>;
  embedVideo2s?: Maybe<Array<Maybe<EmbedVideo2>>>;
  embedVideo2sConnection?: Maybe<EmbedVideo2Connection>;
  embedVideos?: Maybe<Array<Maybe<EmbedVideo>>>;
  embedVideosConnection?: Maybe<EmbedVideoConnection>;
  favouriteMovie?: Maybe<FavouriteMovies>;
  favouriteMovies?: Maybe<Array<Maybe<FavouriteMovies>>>;
  favouriteMoviesConnection?: Maybe<FavouriteMoviesConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  genre?: Maybe<Genres>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  genresConnection?: Maybe<GenresConnection>;
  getMovie?: Maybe<Movies>;
  getSuggestedMovies?: Maybe<Array<Maybe<GetSuggestedMoviesResult>>>;
  getUserData?: Maybe<ReturnUserData>;
  me?: Maybe<UsersPermissionsMe>;
  movie?: Maybe<Movies>;
  movies?: Maybe<Array<Maybe<Movies>>>;
  moviesConnection?: Maybe<MoviesConnection>;
  referralCode?: Maybe<ReferralCode>;
  referralCodes?: Maybe<Array<Maybe<ReferralCode>>>;
  referralCodesConnection?: Maybe<ReferralCodeConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  search?: Maybe<Array<Maybe<OptionalMovies>>>;
  transaction?: Maybe<Transactions>;
  transactionPaymentToken?: Maybe<TransactionPaymentTokenResponse>;
  transaction_status?: Maybe<Transaction_Status_Response>;
  transactions?: Maybe<Array<Maybe<Transactions>>>;
  transactionsConnection?: Maybe<TransactionsConnection>;
  tvSeries?: Maybe<Array<Maybe<TvSeries>>>;
  tvSeriesConnection?: Maybe<TvSeriesConnection>;
  tvSery?: Maybe<TvSeries>;
  user?: Maybe<UsersPermissionsUser>;
  userData?: Maybe<Array<Maybe<UserData>>>;
  userDataConnection?: Maybe<UserDataConnection>;
  userDatum?: Maybe<UserData>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  watchHistories?: Maybe<Array<Maybe<WatchHistory>>>;
  watchHistoriesConnection?: Maybe<WatchHistoryConnection>;
  watchHistory?: Maybe<WatchHistory>;
};


export type QueryCheckValidReferralCodeArgs = {
  input?: InputMaybe<ReferralQueryInput>;
};


export type QueryEmbedUploaderArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEmbedUploadersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmbedUploadersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmbedVideoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEmbedVideo2Args = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEmbedVideo2sArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmbedVideo2sConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmbedVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmbedVideosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFavouriteMovieArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFavouriteMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFavouriteMoviesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGenreArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGenresConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGetMovieArgs = {
  uuid?: InputMaybe<Scalars['String']>;
};


export type QueryGetSuggestedMoviesArgs = {
  genres_limit: Scalars['Int'];
  movies_limit: Scalars['Int'];
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMoviesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryReferralCodeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryReferralCodesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryReferralCodesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySearchArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTransactionPaymentTokenArgs = {
  input?: InputMaybe<TransactionPaymentTokenQueryInput>;
};


export type QueryTransaction_StatusArgs = {
  input?: InputMaybe<Transaction_Status_Input>;
};


export type QueryTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTransactionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTvSeriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTvSeriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTvSeryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUserDataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserDataConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserDatumArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWatchHistoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWatchHistoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWatchHistoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type ReferralCode = {
  __typename?: 'ReferralCode';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  month?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  used_client_uuid?: Maybe<Scalars['String']>;
};

export type ReferralCodeAggregator = {
  __typename?: 'ReferralCodeAggregator';
  avg?: Maybe<ReferralCodeAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ReferralCodeAggregatorMax>;
  min?: Maybe<ReferralCodeAggregatorMin>;
  sum?: Maybe<ReferralCodeAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
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
  aggregate?: Maybe<ReferralCodeAggregator>;
  groupBy?: Maybe<ReferralCodeGroupBy>;
  values?: Maybe<Array<Maybe<ReferralCode>>>;
};

export type ReferralCodeConnectionCode = {
  __typename?: 'ReferralCodeConnectionCode';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ReferralCodeConnectionCreated_At = {
  __typename?: 'ReferralCodeConnectionCreated_at';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ReferralCodeConnectionId = {
  __typename?: 'ReferralCodeConnectionId';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ReferralCodeConnectionMonth = {
  __typename?: 'ReferralCodeConnectionMonth';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReferralCodeConnectionPublished_At = {
  __typename?: 'ReferralCodeConnectionPublished_at';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ReferralCodeConnectionUpdated_At = {
  __typename?: 'ReferralCodeConnectionUpdated_at';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ReferralCodeConnectionUsed_Client_Uuid = {
  __typename?: 'ReferralCodeConnectionUsed_client_uuid';
  connection?: Maybe<ReferralCodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ReferralCodeGroupBy = {
  __typename?: 'ReferralCodeGroupBy';
  code?: Maybe<Array<Maybe<ReferralCodeConnectionCode>>>;
  created_at?: Maybe<Array<Maybe<ReferralCodeConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<ReferralCodeConnectionId>>>;
  month?: Maybe<Array<Maybe<ReferralCodeConnectionMonth>>>;
  published_at?: Maybe<Array<Maybe<ReferralCodeConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ReferralCodeConnectionUpdated_At>>>;
  used_client_uuid?: Maybe<Array<Maybe<ReferralCodeConnectionUsed_Client_Uuid>>>;
};

export type ReferralCodeInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  used_client_uuid?: InputMaybe<Scalars['String']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TransactionInput = {
  createdAt: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  customerName: Scalars['String'];
  merchantOrderId: Scalars['String'];
  methodName: Scalars['String'];
  providerName: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  quantity?: InputMaybe<Scalars['String']>;
  totalAmount: Scalars['String'];
  transactionId: Scalars['String'];
  transactionStatus: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Transactions = {
  __typename?: 'Transactions';
  createdAt: Scalars['String'];
  created_at: Scalars['DateTime'];
  customerName: Scalars['String'];
  id: Scalars['ID'];
  merchantOrderId: Scalars['String'];
  methodName: Scalars['String'];
  providerName: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['String']>;
  totalAmount: Scalars['String'];
  transactionId: Scalars['String'];
  transactionStatus: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TransactionsAggregator = {
  __typename?: 'TransactionsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TransactionsConnection = {
  __typename?: 'TransactionsConnection';
  aggregate?: Maybe<TransactionsAggregator>;
  groupBy?: Maybe<TransactionsGroupBy>;
  values?: Maybe<Array<Maybe<Transactions>>>;
};

export type TransactionsConnectionCreatedAt = {
  __typename?: 'TransactionsConnectionCreatedAt';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionCreated_At = {
  __typename?: 'TransactionsConnectionCreated_at';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TransactionsConnectionCustomerName = {
  __typename?: 'TransactionsConnectionCustomerName';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionId = {
  __typename?: 'TransactionsConnectionId';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TransactionsConnectionMerchantOrderId = {
  __typename?: 'TransactionsConnectionMerchantOrderId';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionMethodName = {
  __typename?: 'TransactionsConnectionMethodName';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionProviderName = {
  __typename?: 'TransactionsConnectionProviderName';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionPublished_At = {
  __typename?: 'TransactionsConnectionPublished_at';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TransactionsConnectionQuantity = {
  __typename?: 'TransactionsConnectionQuantity';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionTotalAmount = {
  __typename?: 'TransactionsConnectionTotalAmount';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionTransactionId = {
  __typename?: 'TransactionsConnectionTransactionId';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionTransactionStatus = {
  __typename?: 'TransactionsConnectionTransactionStatus';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TransactionsConnectionUpdated_At = {
  __typename?: 'TransactionsConnectionUpdated_at';
  connection?: Maybe<TransactionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TransactionsGroupBy = {
  __typename?: 'TransactionsGroupBy';
  createdAt?: Maybe<Array<Maybe<TransactionsConnectionCreatedAt>>>;
  created_at?: Maybe<Array<Maybe<TransactionsConnectionCreated_At>>>;
  customerName?: Maybe<Array<Maybe<TransactionsConnectionCustomerName>>>;
  id?: Maybe<Array<Maybe<TransactionsConnectionId>>>;
  merchantOrderId?: Maybe<Array<Maybe<TransactionsConnectionMerchantOrderId>>>;
  methodName?: Maybe<Array<Maybe<TransactionsConnectionMethodName>>>;
  providerName?: Maybe<Array<Maybe<TransactionsConnectionProviderName>>>;
  published_at?: Maybe<Array<Maybe<TransactionsConnectionPublished_At>>>;
  quantity?: Maybe<Array<Maybe<TransactionsConnectionQuantity>>>;
  totalAmount?: Maybe<Array<Maybe<TransactionsConnectionTotalAmount>>>;
  transactionId?: Maybe<Array<Maybe<TransactionsConnectionTransactionId>>>;
  transactionStatus?: Maybe<Array<Maybe<TransactionsConnectionTransactionStatus>>>;
  updated_at?: Maybe<Array<Maybe<TransactionsConnectionUpdated_At>>>;
};

export type TvSeries = {
  __typename?: 'TvSeries';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season?: Maybe<Array<Maybe<ComponentTvSeriesSeason>>>;
  updated_at: Scalars['DateTime'];
};

export type TvSeriesAggregator = {
  __typename?: 'TvSeriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TvSeriesConnection = {
  __typename?: 'TvSeriesConnection';
  aggregate?: Maybe<TvSeriesAggregator>;
  groupBy?: Maybe<TvSeriesGroupBy>;
  values?: Maybe<Array<Maybe<TvSeries>>>;
};

export type TvSeriesConnectionCreated_At = {
  __typename?: 'TvSeriesConnectionCreated_at';
  connection?: Maybe<TvSeriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TvSeriesConnectionId = {
  __typename?: 'TvSeriesConnectionId';
  connection?: Maybe<TvSeriesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TvSeriesConnectionName = {
  __typename?: 'TvSeriesConnectionName';
  connection?: Maybe<TvSeriesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TvSeriesConnectionPublished_At = {
  __typename?: 'TvSeriesConnectionPublished_at';
  connection?: Maybe<TvSeriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TvSeriesConnectionUpdated_At = {
  __typename?: 'TvSeriesConnectionUpdated_at';
  connection?: Maybe<TvSeriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TvSeriesGroupBy = {
  __typename?: 'TvSeriesGroupBy';
  created_at?: Maybe<Array<Maybe<TvSeriesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TvSeriesConnectionId>>>;
  name?: Maybe<Array<Maybe<TvSeriesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TvSeriesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<TvSeriesConnectionUpdated_At>>>;
};

export type TvSeryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Array<ComponentTvSeriesSeasonInput>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UpdateMovieReturn = {
  __typename?: 'UpdateMovieReturn';
  current_time?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserData = {
  __typename?: 'UserData';
  created_at: Scalars['DateTime'];
  expire?: Maybe<Scalars['DateTime']>;
  favourite_movies?: Maybe<Array<Maybe<FavouriteMovies>>>;
  fuuid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  uuid?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  watch_histories?: Maybe<Array<Maybe<WatchHistory>>>;
};


export type UserDataFavourite_MoviesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UserDataWatch_HistoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UserDataAggregator = {
  __typename?: 'UserDataAggregator';
  avg?: Maybe<UserDataAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserDataAggregatorMax>;
  min?: Maybe<UserDataAggregatorMin>;
  sum?: Maybe<UserDataAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
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
  aggregate?: Maybe<UserDataAggregator>;
  groupBy?: Maybe<UserDataGroupBy>;
  values?: Maybe<Array<Maybe<UserData>>>;
};

export type UserDataConnectionCreated_At = {
  __typename?: 'UserDataConnectionCreated_at';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserDataConnectionExpire = {
  __typename?: 'UserDataConnectionExpire';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserDataConnectionFuuid = {
  __typename?: 'UserDataConnectionFuuid';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UserDataConnectionId = {
  __typename?: 'UserDataConnectionId';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserDataConnectionPublished_At = {
  __typename?: 'UserDataConnectionPublished_at';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserDataConnectionTokenVersion = {
  __typename?: 'UserDataConnectionTokenVersion';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UserDataConnectionUpdated_At = {
  __typename?: 'UserDataConnectionUpdated_at';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserDataConnectionUuid = {
  __typename?: 'UserDataConnectionUuid';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UserDataConnectionVerify = {
  __typename?: 'UserDataConnectionVerify';
  connection?: Maybe<UserDataConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UserDataGroupBy = {
  __typename?: 'UserDataGroupBy';
  created_at?: Maybe<Array<Maybe<UserDataConnectionCreated_At>>>;
  expire?: Maybe<Array<Maybe<UserDataConnectionExpire>>>;
  fuuid?: Maybe<Array<Maybe<UserDataConnectionFuuid>>>;
  id?: Maybe<Array<Maybe<UserDataConnectionId>>>;
  published_at?: Maybe<Array<Maybe<UserDataConnectionPublished_At>>>;
  tokenVersion?: Maybe<Array<Maybe<UserDataConnectionTokenVersion>>>;
  updated_at?: Maybe<Array<Maybe<UserDataConnectionUpdated_At>>>;
  uuid?: Maybe<Array<Maybe<UserDataConnectionUuid>>>;
  verify?: Maybe<Array<Maybe<UserDataConnectionVerify>>>;
};

export type UserDatumInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  expire?: InputMaybe<Scalars['DateTime']>;
  favourite_movies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fuuid?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  tokenVersion?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uuid?: InputMaybe<Scalars['String']>;
  verify?: InputMaybe<Scalars['Boolean']>;
  watch_histories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type WatchHistory = {
  __typename?: 'WatchHistory';
  created_at: Scalars['DateTime'];
  current_time?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  last_updated?: Maybe<Scalars['String']>;
  movie?: Maybe<Movies>;
  movieName?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  user_data?: Maybe<UserData>;
};

export type WatchHistoryAggregator = {
  __typename?: 'WatchHistoryAggregator';
  avg?: Maybe<WatchHistoryAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<WatchHistoryAggregatorMax>;
  min?: Maybe<WatchHistoryAggregatorMin>;
  sum?: Maybe<WatchHistoryAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
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
  aggregate?: Maybe<WatchHistoryAggregator>;
  groupBy?: Maybe<WatchHistoryGroupBy>;
  values?: Maybe<Array<Maybe<WatchHistory>>>;
};

export type WatchHistoryConnectionCreated_At = {
  __typename?: 'WatchHistoryConnectionCreated_at';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WatchHistoryConnectionCurrent_Time = {
  __typename?: 'WatchHistoryConnectionCurrent_time';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WatchHistoryConnectionEpisode = {
  __typename?: 'WatchHistoryConnectionEpisode';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type WatchHistoryConnectionId = {
  __typename?: 'WatchHistoryConnectionId';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WatchHistoryConnectionLast_Updated = {
  __typename?: 'WatchHistoryConnectionLast_updated';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WatchHistoryConnectionMovie = {
  __typename?: 'WatchHistoryConnectionMovie';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WatchHistoryConnectionMovieName = {
  __typename?: 'WatchHistoryConnectionMovieName';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WatchHistoryConnectionPublished_At = {
  __typename?: 'WatchHistoryConnectionPublished_at';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WatchHistoryConnectionSeason = {
  __typename?: 'WatchHistoryConnectionSeason';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type WatchHistoryConnectionUpdated_At = {
  __typename?: 'WatchHistoryConnectionUpdated_at';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WatchHistoryConnectionUser_Data = {
  __typename?: 'WatchHistoryConnectionUser_data';
  connection?: Maybe<WatchHistoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WatchHistoryGroupBy = {
  __typename?: 'WatchHistoryGroupBy';
  created_at?: Maybe<Array<Maybe<WatchHistoryConnectionCreated_At>>>;
  current_time?: Maybe<Array<Maybe<WatchHistoryConnectionCurrent_Time>>>;
  episode?: Maybe<Array<Maybe<WatchHistoryConnectionEpisode>>>;
  id?: Maybe<Array<Maybe<WatchHistoryConnectionId>>>;
  last_updated?: Maybe<Array<Maybe<WatchHistoryConnectionLast_Updated>>>;
  movie?: Maybe<Array<Maybe<WatchHistoryConnectionMovie>>>;
  movieName?: Maybe<Array<Maybe<WatchHistoryConnectionMovieName>>>;
  published_at?: Maybe<Array<Maybe<WatchHistoryConnectionPublished_At>>>;
  season?: Maybe<Array<Maybe<WatchHistoryConnectionSeason>>>;
  updated_at?: Maybe<Array<Maybe<WatchHistoryConnectionUpdated_At>>>;
  user_data?: Maybe<Array<Maybe<WatchHistoryConnectionUser_Data>>>;
};

export type WatchHistoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  current_time?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  last_updated?: InputMaybe<Scalars['String']>;
  movie?: InputMaybe<Scalars['ID']>;
  movieName?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_data?: InputMaybe<Scalars['ID']>;
};

export type CheckValidReferralCodeResult = {
  __typename?: 'checkValidReferralCodeResult';
  jwtRenewToken?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateEmbedUploaderInput = {
  data?: InputMaybe<EmbedUploaderInput>;
};

export type CreateEmbedUploaderPayload = {
  __typename?: 'createEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
};

export type CreateEmbedVideo2Input = {
  data?: InputMaybe<EmbedVideo2Input>;
};

export type CreateEmbedVideo2Payload = {
  __typename?: 'createEmbedVideo2Payload';
  embedVideo2?: Maybe<EmbedVideo2>;
};

export type CreateEmbedVideoInput = {
  data?: InputMaybe<EmbedVideoInput>;
};

export type CreateEmbedVideoPayload = {
  __typename?: 'createEmbedVideoPayload';
  embedVideo?: Maybe<EmbedVideo>;
};

export type CreateFavouriteMovieInput = {
  data?: InputMaybe<FavouriteMovieInput>;
};

export type CreateFavouriteMoviePayload = {
  __typename?: 'createFavouriteMoviePayload';
  favouriteMovie?: Maybe<FavouriteMovies>;
  status?: Maybe<Scalars['String']>;
};

export type CreateGenreInput = {
  data?: InputMaybe<GenreInput>;
};

export type CreateGenrePayload = {
  __typename?: 'createGenrePayload';
  genre?: Maybe<Genres>;
};

export type CreateMovieInput = {
  data?: InputMaybe<MovieInput>;
};

export type CreateMoviePayload = {
  __typename?: 'createMoviePayload';
  movie?: Maybe<Movies>;
};

export type CreateReferralCodeInput = {
  data?: InputMaybe<ReferralCodeInput>;
};

export type CreateReferralCodePayload = {
  __typename?: 'createReferralCodePayload';
  referralCode?: Maybe<ReferralCode>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTransactionInput = {
  data?: InputMaybe<TransactionInput>;
};

export type CreateTransactionPayload = {
  __typename?: 'createTransactionPayload';
  transaction?: Maybe<Transactions>;
};

export type CreateTvSeryInput = {
  data?: InputMaybe<TvSeryInput>;
};

export type CreateTvSeryPayload = {
  __typename?: 'createTvSeryPayload';
  tvSery?: Maybe<TvSeries>;
};

export type CreateUserDatumInput = {
  data?: InputMaybe<UserDatumInput>;
};

export type CreateUserDatumPayload = {
  __typename?: 'createUserDatumPayload';
  userDatum?: Maybe<UserData>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateWatchHistoryInput = {
  data?: InputMaybe<WatchHistoryInput>;
};

export type CreateWatchHistoryPayload = {
  __typename?: 'createWatchHistoryPayload';
  watchHistory?: Maybe<WatchHistory>;
};

export type DeleteEmbedUploaderInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEmbedUploaderPayload = {
  __typename?: 'deleteEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
};

export type DeleteEmbedVideo2Input = {
  where?: InputMaybe<InputId>;
};

export type DeleteEmbedVideo2Payload = {
  __typename?: 'deleteEmbedVideo2Payload';
  embedVideo2?: Maybe<EmbedVideo2>;
};

export type DeleteEmbedVideoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEmbedVideoPayload = {
  __typename?: 'deleteEmbedVideoPayload';
  embedVideo?: Maybe<EmbedVideo>;
};

export type DeleteFavouriteMovieInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFavouriteMoviePayload = {
  __typename?: 'deleteFavouriteMoviePayload';
  favouriteMovie?: Maybe<FavouriteMovies>;
  status?: Maybe<Scalars['String']>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGenreInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteGenrePayload = {
  __typename?: 'deleteGenrePayload';
  genre?: Maybe<Genres>;
};

export type DeleteMovieInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteMoviePayload = {
  __typename?: 'deleteMoviePayload';
  movie?: Maybe<Movies>;
};

export type DeleteReferralCodeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteReferralCodePayload = {
  __typename?: 'deleteReferralCodePayload';
  referralCode?: Maybe<ReferralCode>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTransactionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTransactionPayload = {
  __typename?: 'deleteTransactionPayload';
  transaction?: Maybe<Transactions>;
};

export type DeleteTvSeryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTvSeryPayload = {
  __typename?: 'deleteTvSeryPayload';
  tvSery?: Maybe<TvSeries>;
};

export type DeleteUserDatumInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserDatumPayload = {
  __typename?: 'deleteUserDatumPayload';
  userDatum?: Maybe<UserData>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWatchHistoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteWatchHistoryPayload = {
  __typename?: 'deleteWatchHistoryPayload';
  watchHistory?: Maybe<WatchHistory>;
};

export type EditComponentTvSeriesEpisodeInput = {
  duration?: InputMaybe<Scalars['Time']>;
  episodeID?: InputMaybe<Scalars['Int']>;
  episodeName?: InputMaybe<Scalars['String']>;
  freeServer1?: InputMaybe<Scalars['String']>;
  freeServer2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  vipServer1?: InputMaybe<Scalars['String']>;
  vipServer2?: InputMaybe<Scalars['String']>;
};

export type EditComponentTvSeriesSeasonInput = {
  episodes?: InputMaybe<Array<InputMaybe<EditComponentTvSeriesEpisodeInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  seasonID?: InputMaybe<Scalars['Int']>;
};

export type EditEmbedUploaderInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  tokenVersion?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  userName?: InputMaybe<Scalars['String']>;
  verify?: InputMaybe<Scalars['Boolean']>;
};

export type EditEmbedVideo2Input = {
  created_by?: InputMaybe<Scalars['ID']>;
  embedLink?: InputMaybe<Scalars['String']>;
  eng_sub?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  mm_sub?: InputMaybe<Scalars['String']>;
  movie_name?: InputMaybe<Scalars['String']>;
  original_link?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  upload_status?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['String']>;
  video_size?: InputMaybe<Scalars['String']>;
};

export type EditEmbedVideoInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  eigaLink?: InputMaybe<Scalars['String']>;
  eigaLink2?: InputMaybe<Scalars['String']>;
  eng_sub?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  fileSize?: InputMaybe<Scalars['String']>;
  mm_sub?: InputMaybe<Scalars['String']>;
  movieName?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uploadStatus?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['String']>;
};

export type EditFavouriteMovieInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  movie?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_info?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGenreInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditMovieInput = {
  Imdb?: InputMaybe<Scalars['Float']>;
  all_time_views?: InputMaybe<Scalars['Long']>;
  body?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  duration?: InputMaybe<Scalars['Time']>;
  freeServer1?: InputMaybe<Scalars['String']>;
  freeServer2?: InputMaybe<Scalars['String']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isSeries?: InputMaybe<Scalars['Boolean']>;
  mmsub?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
  premiumOnly?: InputMaybe<Scalars['Boolean']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  quality?: InputMaybe<Scalars['String']>;
  recommend?: InputMaybe<Scalars['Boolean']>;
  release_date?: InputMaybe<Scalars['Int']>;
  sevendaysago?: InputMaybe<Scalars['String']>;
  tv_sery?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uuid?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Long']>;
  vipServer1?: InputMaybe<Scalars['String']>;
  vipServer2?: InputMaybe<Scalars['String']>;
  wide_poster?: InputMaybe<Scalars['String']>;
};

export type EditReferralCodeInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  used_client_uuid?: InputMaybe<Scalars['String']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditTransactionInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  customerName?: InputMaybe<Scalars['String']>;
  merchantOrderId?: InputMaybe<Scalars['String']>;
  methodName?: InputMaybe<Scalars['String']>;
  providerName?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  quantity?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['String']>;
  transactionStatus?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTvSeryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Array<InputMaybe<EditComponentTvSeriesSeasonInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserDatumInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  expire?: InputMaybe<Scalars['DateTime']>;
  favourite_movies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fuuid?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  tokenVersion?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  uuid?: InputMaybe<Scalars['String']>;
  verify?: InputMaybe<Scalars['Boolean']>;
  watch_histories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditWatchHistoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  current_time?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  last_updated?: InputMaybe<Scalars['String']>;
  movie?: InputMaybe<Scalars['ID']>;
  movieName?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  season?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user_data?: InputMaybe<Scalars['ID']>;
};

export type GetSuggestedMoviesResult = {
  __typename?: 'getSuggestedMoviesResult';
  genreName?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Maybe<OptionalMovies>>>;
};

export type LoginEmbedInput = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type OptionalMovies = {
  __typename?: 'optionalMovies';
  Imdb?: Maybe<Scalars['Float']>;
  all_time_views?: Maybe<Scalars['Long']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Time']>;
  freeServer1?: Maybe<Scalars['String']>;
  freeServer2?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  id?: Maybe<Scalars['ID']>;
  isSeries?: Maybe<Scalars['Boolean']>;
  mmsub?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  premiumOnly?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  quality?: Maybe<Scalars['String']>;
  recommend?: Maybe<Scalars['Boolean']>;
  release_date?: Maybe<Scalars['Int']>;
  sevendaysago?: Maybe<Scalars['String']>;
  tv_sery?: Maybe<TvSeries>;
  updated_at?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Long']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
};


export type OptionalMoviesGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ReferralQueryInput = {
  code?: InputMaybe<Scalars['String']>;
};

export type ReturnSignup = {
  __typename?: 'returnSignup';
  accessToken?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ReturnUserData = {
  __typename?: 'returnUserData';
  expire?: Maybe<Scalars['String']>;
  premium?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
};

export type TransactionPaymentTokenQueryInput = {
  paymentMethod: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type TransactionPaymentTokenResponse = {
  __typename?: 'transactionPaymentTokenResponse';
  PwaToken?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  qrCode?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type Transaction_Status_Input = {
  orderId: Scalars['String'];
  transactionId: Scalars['String'];
};

export type Transaction_Status_Response = {
  __typename?: 'transaction_status_response';
  accessToken?: Maybe<Scalars['String']>;
  transactionStatus?: Maybe<Scalars['String']>;
};

export type TypeRegisterEmbedUploader = {
  __typename?: 'typeRegisterEmbedUploader';
  alreadyCreated?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Typeloginembeduploader = {
  __typename?: 'typeloginembeduploader';
  bnet?: Maybe<Scalars['String']>;
  bnet2?: Maybe<Scalars['String']>;
  jwt?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
};

export type UpdateEmbedUploaderInput = {
  data?: InputMaybe<EditEmbedUploaderInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEmbedUploaderPayload = {
  __typename?: 'updateEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
};

export type UpdateEmbedVideo2Input = {
  data?: InputMaybe<EditEmbedVideo2Input>;
  where?: InputMaybe<InputId>;
};

export type UpdateEmbedVideo2Payload = {
  __typename?: 'updateEmbedVideo2Payload';
  embedVideo2?: Maybe<EmbedVideo2>;
};

export type UpdateEmbedVideoInput = {
  data?: InputMaybe<EditEmbedVideoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEmbedVideoPayload = {
  __typename?: 'updateEmbedVideoPayload';
  embedVideo?: Maybe<EmbedVideo>;
};

export type UpdateFavouriteMovieInput = {
  data?: InputMaybe<EditFavouriteMovieInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFavouriteMoviePayload = {
  __typename?: 'updateFavouriteMoviePayload';
  favouriteMovie?: Maybe<FavouriteMovies>;
};

export type UpdateGenreInput = {
  data?: InputMaybe<EditGenreInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateGenrePayload = {
  __typename?: 'updateGenrePayload';
  genre?: Maybe<Genres>;
};

export type UpdateHistoryInput = {
  current_time?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  movieId: Scalars['Int'];
  movieUuid: Scalars['String'];
  season?: InputMaybe<Scalars['Int']>;
};

export type UpdateMovieInput = {
  data?: InputMaybe<EditMovieInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateMoviePayload = {
  __typename?: 'updateMoviePayload';
  movie?: Maybe<Movies>;
};

export type UpdateReferralCodeInput = {
  data?: InputMaybe<EditReferralCodeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateReferralCodePayload = {
  __typename?: 'updateReferralCodePayload';
  referralCode?: Maybe<ReferralCode>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTransactionInput = {
  data?: InputMaybe<EditTransactionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTransactionPayload = {
  __typename?: 'updateTransactionPayload';
  transaction?: Maybe<Transactions>;
};

export type UpdateTvSeryInput = {
  data?: InputMaybe<EditTvSeryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTvSeryPayload = {
  __typename?: 'updateTvSeryPayload';
  tvSery?: Maybe<TvSeries>;
};

export type UpdateUserDatumInput = {
  data?: InputMaybe<EditUserDatumInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserDatumPayload = {
  __typename?: 'updateUserDatumPayload';
  userDatum?: Maybe<UserData>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWatchHistoryInput = {
  data?: InputMaybe<EditWatchHistoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateWatchHistoryPayload = {
  __typename?: 'updateWatchHistoryPayload';
  watchHistory?: Maybe<WatchHistory>;
};

export type VerifyTokenPayload = {
  __typename?: 'verifyTokenPayload';
  bnet?: Maybe<Scalars['String']>;
  bnet2?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
};

export type CheckValidReferralCodeQueryVariables = Exact<{
  code?: InputMaybe<Scalars['String']>;
}>;


export type CheckValidReferralCodeQuery = { __typename?: 'Query', checkValidReferralCode?: { __typename?: 'checkValidReferralCodeResult', ok?: boolean | null, jwtRenewToken?: string | null } | null };

export type CreateFavouriteMovieMutationVariables = Exact<{
  movieId: Scalars['ID'];
  userId: Scalars['ID'];
}>;


export type CreateFavouriteMovieMutation = { __typename?: 'Mutation', createFavouriteMovie?: { __typename?: 'createFavouriteMoviePayload', status?: string | null } | null };

export type DeleteFavouriteMovieMutationVariables = Exact<{
  movieId: Scalars['ID'];
}>;


export type DeleteFavouriteMovieMutation = { __typename?: 'Mutation', deleteFavouriteMovie?: { __typename?: 'deleteFavouriteMoviePayload', status?: string | null } | null };

export type GetAllMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMoviesQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: boolean | null, Imdb: number, published_at?: any | null } | null> | null };

export type GetFavouriteMovieQueryVariables = Exact<{
  userId: Scalars['ID'];
  movieId?: InputMaybe<Scalars['ID']>;
}>;


export type GetFavouriteMovieQuery = { __typename?: 'Query', favouriteMovies?: Array<{ __typename?: 'FavouriteMovies', id: string, movie?: { __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean } | null } | null> | null };

export type GetFavouriteMoviesQueryVariables = Exact<{
  userId: Scalars['ID'];
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetFavouriteMoviesQuery = { __typename?: 'Query', favouriteMovies?: Array<{ __typename?: 'FavouriteMovies', id: string, movie?: { __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: boolean | null, Imdb: number } | null } | null> | null };

export type WatchHistoriesQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
  user: Scalars['ID'];
}>;


export type WatchHistoriesQuery = { __typename?: 'Query', watchHistories?: Array<{ __typename?: 'WatchHistory', movie?: { __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: boolean | null, Imdb: number } | null } | null> | null };

export type GetWatchHistoryQueryVariables = Exact<{
  user: Scalars['ID'];
  movieUuid: Scalars['String'];
}>;


export type GetWatchHistoryQuery = { __typename?: 'Query', watchHistories?: Array<{ __typename?: 'WatchHistory', id: string, season?: number | null, episode?: number | null, current_time?: string | null } | null> | null };

export type GetLastestMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastestMoviesQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: boolean | null, Imdb: number } | null> | null };

export type GetMovieQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: { __typename?: 'Movies', id: string, freeServer1?: string | null, uuid?: string | null, freeServer2?: string | null, vipServer1?: string | null, vipServer2?: string | null, name: string, release_date: number, body: string, duration: any, wide_poster?: string | null, Imdb: number, isSeries: boolean, mmsub?: boolean | null, premiumOnly: boolean, published_at?: any | null, genres?: Array<{ __typename?: 'Genres', name?: string | null } | null> | null } | null };

export type GetRelatedMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRelatedMoviesQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: boolean | null, Imdb: number } | null> | null };

export type GetSeriesQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetSeriesQuery = { __typename?: 'Query', getMovie?: { __typename?: 'Movies', id: string, uuid?: string | null, name: string, release_date: number, body: string, duration: any, Imdb: number, isSeries: boolean, mmsub?: boolean | null, premiumOnly: boolean, genres?: Array<{ __typename?: 'Genres', name?: string | null } | null> | null, tv_sery?: { __typename?: 'TvSeries', season?: Array<{ __typename?: 'ComponentTvSeriesSeason', seasonID?: number | null, episodes?: Array<{ __typename?: 'ComponentTvSeriesEpisodes', duration?: any | null, episodeID: number, freeServer1?: string | null, freeServer2?: string | null, vipServer1?: string | null, vipServer2?: string | null } | null> | null } | null> | null } | null } | null };

export type GetSuggestedMoviesQueryVariables = Exact<{
  genres_limit: Scalars['Int'];
  movies_limit: Scalars['Int'];
}>;


export type GetSuggestedMoviesQuery = { __typename?: 'Query', getSuggestedMovies?: Array<{ __typename?: 'getSuggestedMoviesResult', genreName?: string | null, movies?: Array<{ __typename?: 'optionalMovies', photo_url?: string | null, id?: string | null, freeServer1?: string | null, uuid?: string | null, freeServer2?: string | null, vipServer1?: string | null, vipServer2?: string | null, name?: string | null, release_date?: number | null, body?: string | null, duration?: any | null, Imdb?: number | null, isSeries?: boolean | null, mmsub?: boolean | null, premiumOnly?: boolean | null, published_at?: any | null } | null> | null } | null> | null };

export type GetTransactionTokenQueryVariables = Exact<{
  paymentMethod: Scalars['Int'];
  quantity: Scalars['Int'];
}>;


export type GetTransactionTokenQuery = { __typename?: 'Query', transactionPaymentToken?: { __typename?: 'transactionPaymentTokenResponse', qrCode?: string | null, PwaToken?: string | null, orderId?: string | null, transactionId?: string | null, userId?: string | null } | null };

export type GetTrendingMoviesQueryVariables = Exact<{
  last7day?: InputMaybe<Scalars['String']>;
}>;


export type GetTrendingMoviesQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movies', name: string, uuid?: string | null, id: string, release_date: number, quality: string, photo_url: string, isSeries: boolean, mmsub?: boolean | null, Imdb: number } | null> | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUserData?: { __typename?: 'returnUserData', userId?: string | null, userName?: string | null, premium?: boolean | null, expire?: string | null, verify?: boolean | null } | null };

export type SignUpMutationVariables = Exact<{
  uuid: Scalars['String'];
  fuuid: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signupClient?: { __typename?: 'returnSignup', ok?: boolean | null, status?: string | null, accessToken?: string | null, refreshToken?: string | null } | null };

export type Transaction_StatusQueryVariables = Exact<{
  transactionId: Scalars['String'];
  orderId: Scalars['String'];
}>;


export type Transaction_StatusQuery = { __typename?: 'Query', transaction_status?: { __typename?: 'transaction_status_response', transactionStatus?: string | null, accessToken?: string | null } | null };

export type UpdateHistoryMutationVariables = Exact<{
  movieId: Scalars['Int'];
  movieUuid: Scalars['String'];
  season?: InputMaybe<Scalars['Int']>;
  episode?: InputMaybe<Scalars['Int']>;
  current_time?: InputMaybe<Scalars['String']>;
}>;


export type UpdateHistoryMutation = { __typename?: 'Mutation', updateHistory?: { __typename?: 'UpdateMovieReturn', status?: string | null, ok?: boolean | null, current_time?: string | null } | null };

export type UpdateMovieViewMutationVariables = Exact<{
  uuid: Scalars['ID'];
}>;


export type UpdateMovieViewMutation = { __typename?: 'Mutation', updateMovieView?: { __typename?: 'Movies', name: string } | null };


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
    published_at
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
    published_at
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
export const GetSuggestedMoviesDocument = gql`
    query GetSuggestedMovies($genres_limit: Int!, $movies_limit: Int!) {
  getSuggestedMovies(genres_limit: $genres_limit, movies_limit: $movies_limit) {
    genreName
    movies {
      photo_url
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
      Imdb
      isSeries
      mmsub
      premiumOnly
      published_at
    }
  }
}
    `;

/**
 * __useGetSuggestedMoviesQuery__
 *
 * To run a query within a React component, call `useGetSuggestedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSuggestedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSuggestedMoviesQuery({
 *   variables: {
 *      genres_limit: // value for 'genres_limit'
 *      movies_limit: // value for 'movies_limit'
 *   },
 * });
 */
export function useGetSuggestedMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetSuggestedMoviesQuery, GetSuggestedMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSuggestedMoviesQuery, GetSuggestedMoviesQueryVariables>(GetSuggestedMoviesDocument, options);
      }
export function useGetSuggestedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSuggestedMoviesQuery, GetSuggestedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSuggestedMoviesQuery, GetSuggestedMoviesQueryVariables>(GetSuggestedMoviesDocument, options);
        }
export type GetSuggestedMoviesQueryHookResult = ReturnType<typeof useGetSuggestedMoviesQuery>;
export type GetSuggestedMoviesLazyQueryHookResult = ReturnType<typeof useGetSuggestedMoviesLazyQuery>;
export type GetSuggestedMoviesQueryResult = Apollo.QueryResult<GetSuggestedMoviesQuery, GetSuggestedMoviesQueryVariables>;
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
    accessToken
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
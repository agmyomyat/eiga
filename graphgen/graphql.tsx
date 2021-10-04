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
  published_at?: Maybe<Scalars['DateTime']>;
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


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | TypeRegisterEmbedUploader | Typeloginembeduploader | VerifyTokenPayload | ReturnSignup | ReturnUserData | UpdateMovieReturn | EmbedUploader | EmbedUploaderConnection | EmbedUploaderAggregator | EmbedUploaderAggregatorSum | EmbedUploaderAggregatorAvg | EmbedUploaderAggregatorMin | EmbedUploaderAggregatorMax | EmbedUploaderGroupBy | EmbedUploaderConnectionId | EmbedUploaderConnectionCreated_At | EmbedUploaderConnectionUpdated_At | EmbedUploaderConnectionUserName | EmbedUploaderConnectionPassword | EmbedUploaderConnectionTokenVersion | EmbedUploaderConnectionVerify | CreateEmbedUploaderPayload | UpdateEmbedUploaderPayload | DeleteEmbedUploaderPayload | EmbedVideo | EmbedVideoConnection | EmbedVideoAggregator | EmbedVideoAggregatorSum | EmbedVideoAggregatorAvg | EmbedVideoAggregatorMin | EmbedVideoAggregatorMax | EmbedVideoGroupBy | EmbedVideoConnectionId | EmbedVideoConnectionCreated_At | EmbedVideoConnectionUpdated_At | EmbedVideoConnectionMovieName | EmbedVideoConnectionSeason | EmbedVideoConnectionEpisode | EmbedVideoConnectionEigaLink | EmbedVideoConnectionOriginalLink | EmbedVideoConnectionUploadStatus | EmbedVideoConnectionUploader | EmbedVideoConnectionFileSize | EmbedVideoConnectionPublished_At | CreateEmbedVideoPayload | UpdateEmbedVideoPayload | DeleteEmbedVideoPayload | FavouriteMovies | FavouriteMoviesConnection | FavouriteMoviesAggregator | FavouriteMoviesGroupBy | FavouriteMoviesConnectionId | FavouriteMoviesConnectionCreated_At | FavouriteMoviesConnectionUpdated_At | FavouriteMoviesConnectionMovie | FavouriteMoviesConnectionUser_Info | FavouriteMoviesConnectionPublished_At | CreateFavouriteMoviePayload | UpdateFavouriteMoviePayload | DeleteFavouriteMoviePayload | Genres | GenresConnection | GenresAggregator | GenresGroupBy | GenresConnectionId | GenresConnectionCreated_At | GenresConnectionUpdated_At | GenresConnectionName | GenresConnectionUuid | GenresConnectionPublished_At | CreateGenrePayload | UpdateGenrePayload | DeleteGenrePayload | Movies | MoviesConnection | MoviesAggregator | MoviesAggregatorSum | MoviesAggregatorAvg | MoviesAggregatorMin | MoviesAggregatorMax | MoviesGroupBy | MoviesConnectionId | MoviesConnectionCreated_At | MoviesConnectionUpdated_At | MoviesConnectionName | MoviesConnectionBody | MoviesConnectionUuid | MoviesConnectionFreeServer1 | MoviesConnectionPhoto_Url | MoviesConnectionFreeServer2 | MoviesConnectionVipServer1 | MoviesConnectionVipServer2 | MoviesConnectionPremiumOnly | MoviesConnectionRecommend | MoviesConnectionTv_Sery | MoviesConnectionQuality | MoviesConnectionViews | MoviesConnectionRelease_Date | MoviesConnectionDuration | MoviesConnectionPublished_At | CreateMoviePayload | UpdateMoviePayload | DeleteMoviePayload | TvSeries | TvSeriesConnection | TvSeriesAggregator | TvSeriesGroupBy | TvSeriesConnectionId | TvSeriesConnectionCreated_At | TvSeriesConnectionUpdated_At | TvSeriesConnectionName | TvSeriesConnectionPublished_At | CreateTvSeryPayload | UpdateTvSeryPayload | DeleteTvSeryPayload | UserData | UserDataConnection | UserDataAggregator | UserDataAggregatorSum | UserDataAggregatorAvg | UserDataAggregatorMin | UserDataAggregatorMax | UserDataGroupBy | UserDataConnectionId | UserDataConnectionCreated_At | UserDataConnectionUpdated_At | UserDataConnectionUuid | UserDataConnectionVerify | UserDataConnectionExpire | UserDataConnectionTokenVersion | UserDataConnectionPublished_At | CreateUserDatumPayload | UpdateUserDatumPayload | DeleteUserDatumPayload | WatchHistory | WatchHistoryConnection | WatchHistoryAggregator | WatchHistoryAggregatorSum | WatchHistoryAggregatorAvg | WatchHistoryAggregatorMin | WatchHistoryAggregatorMax | WatchHistoryGroupBy | WatchHistoryConnectionId | WatchHistoryConnectionCreated_At | WatchHistoryConnectionUpdated_At | WatchHistoryConnectionMovieName | WatchHistoryConnectionEpisode | WatchHistoryConnectionSeason | WatchHistoryConnectionUser_Data | WatchHistoryConnectionMovie | WatchHistoryConnectionPublished_At | CreateWatchHistoryPayload | UpdateWatchHistoryPayload | DeleteWatchHistoryPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentTvSeriesEpisodes | ComponentTvSeriesSeason;

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
  release_date?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Time']>;
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
  release_date?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Time']>;
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
};

export type MoviesAggregatorMax = {
  __typename?: 'MoviesAggregatorMax';
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorMin = {
  __typename?: 'MoviesAggregatorMin';
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesAggregatorSum = {
  __typename?: 'MoviesAggregatorSum';
  release_date?: Maybe<Scalars['Float']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  values?: Maybe<Array<Maybe<Movies>>>;
  groupBy?: Maybe<MoviesGroupBy>;
  aggregate?: Maybe<MoviesAggregator>;
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
  createFavouriteMovie?: Maybe<CreateFavouriteMoviePayload>;
  updateFavouriteMovie?: Maybe<UpdateFavouriteMoviePayload>;
  deleteFavouriteMovie?: Maybe<DeleteFavouriteMoviePayload>;
  createGenre?: Maybe<CreateGenrePayload>;
  updateGenre?: Maybe<UpdateGenrePayload>;
  deleteGenre?: Maybe<DeleteGenrePayload>;
  createMovie?: Maybe<CreateMoviePayload>;
  updateMovie?: Maybe<UpdateMoviePayload>;
  deleteMovie?: Maybe<DeleteMoviePayload>;
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


export type MutationSignupClientArgs = {
  uuid?: Maybe<Scalars['String']>;
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
  favouriteMovie?: Maybe<FavouriteMovies>;
  favouriteMovies?: Maybe<Array<Maybe<FavouriteMovies>>>;
  favouriteMoviesConnection?: Maybe<FavouriteMoviesConnection>;
  genre?: Maybe<Genres>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  genresConnection?: Maybe<GenresConnection>;
  movie?: Maybe<Movies>;
  movies?: Maybe<Array<Maybe<Movies>>>;
  moviesConnection?: Maybe<MoviesConnection>;
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
  search?: Maybe<Array<Maybe<Movies>>>;
  getMovie?: Maybe<Movies>;
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

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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
  published_at?: Maybe<Array<Maybe<UserDataConnectionPublished_At>>>;
};

export type UserDatumInput = {
  uuid?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  expire?: Maybe<Scalars['DateTime']>;
  tokenVersion?: Maybe<Scalars['Int']>;
  watch_histories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  favourite_movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  published_at?: Maybe<Array<Maybe<WatchHistoryConnectionPublished_At>>>;
};

export type WatchHistoryInput = {
  movieName?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  user_data?: Maybe<Scalars['ID']>;
  movie?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateEmbedUploaderInput = {
  data?: Maybe<EmbedUploaderInput>;
};

export type CreateEmbedUploaderPayload = {
  __typename?: 'createEmbedUploaderPayload';
  embedUploader?: Maybe<EmbedUploader>;
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

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
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

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
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

export type EditEmbedVideoInput = {
  movieName?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  eigaLink?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['String']>;
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
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type LoginEmbedInput = {
  userName: Scalars['String'];
  password: Scalars['String'];
};

export type ReturnSignup = {
  __typename?: 'returnSignup';
  ok?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
};

export type ReturnUserData = {
  __typename?: 'returnUserData';
  premium?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  expire?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
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
};

export type UpdateMovieInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMovieInput>;
};

export type UpdateMoviePayload = {
  __typename?: 'updateMoviePayload';
  movie?: Maybe<Movies>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
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
  user?: Maybe<Scalars['String']>;
};

export type GetAllMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMoviesQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date?: Maybe<number>, quality: string, photo_url: string }>>> };

export type WatchHistoriesQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
  user: Scalars['ID'];
}>;


export type WatchHistoriesQuery = { __typename?: 'Query', watchHistories?: Maybe<Array<Maybe<{ __typename?: 'WatchHistory', movie?: Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, photo_url: string, quality: string }> }>>> };

export type GetMovieQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: Maybe<{ __typename?: 'Movies', id: string, freeServer1?: Maybe<string>, uuid?: Maybe<string>, freeServer2?: Maybe<string>, vipServer1?: Maybe<string>, vipServer2?: Maybe<string>, name: string, release_date?: Maybe<number>, body: string, genres?: Maybe<Array<Maybe<{ __typename?: 'Genres', name?: Maybe<string> }>>> }> };

export type GetRelatedMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRelatedMoviesQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, id: string, release_date?: Maybe<number>, quality: string, photo_url: string }>>> };

export type GetSeriesQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetSeriesQuery = { __typename?: 'Query', getMovie?: Maybe<{ __typename?: 'Movies', id: string, uuid?: Maybe<string>, name: string, release_date?: Maybe<number>, body: string, genres?: Maybe<Array<Maybe<{ __typename?: 'Genres', name?: Maybe<string> }>>>, tv_sery?: Maybe<{ __typename?: 'TvSeries', season?: Maybe<Array<Maybe<{ __typename?: 'ComponentTvSeriesSeason', seasonID?: Maybe<number>, episodes?: Maybe<Array<Maybe<{ __typename?: 'ComponentTvSeriesEpisodes', episodeID: number, freeServer1?: Maybe<string>, freeServer2?: Maybe<string>, vipServer1?: Maybe<string>, vipServer2?: Maybe<string> }>>> }>>> }> }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUserData?: Maybe<{ __typename?: 'returnUserData', userId?: Maybe<string>, userName?: Maybe<string>, premium?: Maybe<boolean>, expire?: Maybe<string>, verify?: Maybe<boolean> }> };

export type SearchMovieQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchMovieQuery = { __typename?: 'Query', search?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, uuid?: Maybe<string>, release_date?: Maybe<number>, photo_url: string }>>> };

export type SignUpMutationVariables = Exact<{
  uuid?: Maybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signupClient?: Maybe<{ __typename?: 'returnSignup', ok?: Maybe<boolean>, status?: Maybe<string>, accessToken?: Maybe<string> }> };

export type UpdateHistoryMutationVariables = Exact<{
  movieId: Scalars['Int'];
  movieUuid: Scalars['String'];
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
}>;


export type UpdateHistoryMutation = { __typename?: 'Mutation', updateHistory?: Maybe<{ __typename?: 'UpdateMovieReturn', status?: Maybe<string>, ok?: Maybe<boolean> }> };


export const GetAllMoviesDocument = gql`
    query getAllMovies {
  movies {
    name
    uuid
    id
    release_date
    quality
    photo_url
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
      photo_url
      quality
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
    genres {
      name
    }
    tv_sery {
      season {
        seasonID
        episodes {
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
export const SearchMovieDocument = gql`
    query searchMovie($search: String!) {
  search(q: $search, limit: 5) {
    name
    uuid
    release_date
    photo_url
  }
}
    `;

/**
 * __useSearchMovieQuery__
 *
 * To run a query within a React component, call `useSearchMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMovieQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchMovieQuery(baseOptions: Apollo.QueryHookOptions<SearchMovieQuery, SearchMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMovieQuery, SearchMovieQueryVariables>(SearchMovieDocument, options);
      }
export function useSearchMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMovieQuery, SearchMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMovieQuery, SearchMovieQueryVariables>(SearchMovieDocument, options);
        }
export type SearchMovieQueryHookResult = ReturnType<typeof useSearchMovieQuery>;
export type SearchMovieLazyQueryHookResult = ReturnType<typeof useSearchMovieLazyQuery>;
export type SearchMovieQueryResult = Apollo.QueryResult<SearchMovieQuery, SearchMovieQueryVariables>;
export const SignUpDocument = gql`
    mutation signUp($uuid: String) {
  signupClient(uuid: $uuid) {
    ok
    status
    accessToken
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
export const UpdateHistoryDocument = gql`
    mutation updateHistory($movieId: Int!, $movieUuid: String!, $season: Int, $episode: Int) {
  updateHistory(
    input: {movieId: $movieId, movieUuid: $movieUuid, season: $season, episode: $episode}
  ) {
    status
    ok
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
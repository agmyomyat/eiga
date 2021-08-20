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

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Maybe<Movies>>>;
};


export type CategoryMoviesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
};

export type CategoryInput = {
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSectionsHeroInput = {
  title: Scalars['String'];
};

export type ComponentSharedFilm = {
  __typename?: 'ComponentSharedFilm';
  id: Scalars['ID'];
  film?: Maybe<Scalars['String']>;
  Genre?: Maybe<Enum_Componentsharedfilm_Genre>;
};

export type ComponentSharedFilmInput = {
  film?: Maybe<Scalars['String']>;
  Genre?: Maybe<Enum_Componentsharedfilm_Genre>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSeoInput = {
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<Scalars['ID']>;
};



export enum Enum_Componentsharedfilm_Genre {
  Mistery = 'mistery'
}

export enum Enum_Movies_Quality {
  Hd = 'Hd',
  Cam = 'Cam',
  Sd = 'SD'
}

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

export type Global = {
  __typename?: 'Global';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  favicon?: Maybe<UploadFile>;
  siteName: Scalars['String'];
  defaultSeo?: Maybe<ComponentSharedSeo>;
};

export type GlobalInput = {
  favicon?: Maybe<Scalars['ID']>;
  siteName: Scalars['String'];
  defaultSeo: ComponentSharedSeoInput;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  seo?: Maybe<ComponentSharedSeo>;
  hero?: Maybe<ComponentSectionsHero>;
};

export type HomepageInput = {
  seo?: Maybe<ComponentSharedSeoInput>;
  hero: ComponentSectionsHeroInput;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | GetMovietype | ReturnSignup | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_At | CategoryConnectionUpdated_At | CategoryConnectionName | CategoryConnectionSlug | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | Global | UpdateGlobalPayload | DeleteGlobalPayload | Homepage | UpdateHomepagePayload | DeleteHomepagePayload | Movies | MoviesConnection | MoviesAggregator | MoviesGroupBy | MoviesConnectionId | MoviesConnectionCreated_At | MoviesConnectionUpdated_At | MoviesConnectionName | MoviesConnectionBody | MoviesConnectionDate | MoviesConnectionUuid | MoviesConnectionFreeServer1 | MoviesConnectionPhoto_Url | MoviesConnectionQuality | MoviesConnectionFreeServer2 | MoviesConnectionVipServer1 | MoviesConnectionVipServer2 | MoviesConnectionPremiumOnly | MoviesConnectionRecommend | MoviesConnectionPublished_At | CreateMoviePayload | UpdateMoviePayload | DeleteMoviePayload | TvSeries | TvSeriesConnection | TvSeriesAggregator | TvSeriesGroupBy | TvSeriesConnectionId | TvSeriesConnectionCreated_At | TvSeriesConnectionUpdated_At | TvSeriesConnectionName | TvSeriesConnectionSeason | TvSeriesConnectionPublished_At | CreateTvSeryPayload | UpdateTvSeryPayload | DeleteTvSeryPayload | UserData | UserDataConnection | UserDataAggregator | UserDataAggregatorSum | UserDataAggregatorAvg | UserDataAggregatorMin | UserDataAggregatorMax | UserDataGroupBy | UserDataConnectionId | UserDataConnectionCreated_At | UserDataConnectionUpdated_At | UserDataConnectionUuid | UserDataConnectionVerify | UserDataConnectionExpire | UserDataConnectionTokenVersion | UserDataConnectionPublished_At | CreateUserDatumPayload | UpdateUserDatumPayload | DeleteUserDatumPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentSectionsHero | ComponentSharedFilm | ComponentSharedSeo;

export type MovieInput = {
  name: Scalars['String'];
  body: Scalars['String'];
  date?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['ID']>>>;
  photo_url: Scalars['String'];
  quality: Enum_Movies_Quality;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly?: Maybe<Scalars['Boolean']>;
  recommend?: Maybe<Scalars['Boolean']>;
  tv_series?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  date?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  photo_url: Scalars['String'];
  quality: Enum_Movies_Quality;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly: Scalars['Boolean'];
  recommend?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  genres?: Maybe<Array<Maybe<Category>>>;
  tv_series?: Maybe<Array<Maybe<TvSeries>>>;
};


export type MoviesGenresArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type MoviesTv_SeriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MoviesAggregator = {
  __typename?: 'MoviesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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

export type MoviesConnectionDate = {
  __typename?: 'MoviesConnectionDate';
  key?: Maybe<Scalars['DateTime']>;
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
  date?: Maybe<Array<Maybe<MoviesConnectionDate>>>;
  uuid?: Maybe<Array<Maybe<MoviesConnectionUuid>>>;
  freeServer1?: Maybe<Array<Maybe<MoviesConnectionFreeServer1>>>;
  photo_url?: Maybe<Array<Maybe<MoviesConnectionPhoto_Url>>>;
  quality?: Maybe<Array<Maybe<MoviesConnectionQuality>>>;
  freeServer2?: Maybe<Array<Maybe<MoviesConnectionFreeServer2>>>;
  vipServer1?: Maybe<Array<Maybe<MoviesConnectionVipServer1>>>;
  vipServer2?: Maybe<Array<Maybe<MoviesConnectionVipServer2>>>;
  premiumOnly?: Maybe<Array<Maybe<MoviesConnectionPremiumOnly>>>;
  recommend?: Maybe<Array<Maybe<MoviesConnectionRecommend>>>;
  published_at?: Maybe<Array<Maybe<MoviesConnectionPublished_At>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  updateGlobal?: Maybe<UpdateGlobalPayload>;
  deleteGlobal?: Maybe<DeleteGlobalPayload>;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  createMovie?: Maybe<CreateMoviePayload>;
  updateMovie?: Maybe<UpdateMoviePayload>;
  deleteMovie?: Maybe<DeleteMoviePayload>;
  createTvSery?: Maybe<CreateTvSeryPayload>;
  updateTvSery?: Maybe<UpdateTvSeryPayload>;
  deleteTvSery?: Maybe<DeleteTvSeryPayload>;
  createUserDatum?: Maybe<CreateUserDatumPayload>;
  updateUserDatum?: Maybe<UpdateUserDatumPayload>;
  deleteUserDatum?: Maybe<DeleteUserDatumPayload>;
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
  signupClient?: Maybe<ReturnSignup>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationUpdateGlobalArgs = {
  input?: Maybe<UpdateGlobalInput>;
};


export type MutationUpdateHomepageArgs = {
  input?: Maybe<UpdateHomepageInput>;
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


export type MutationSignupClientArgs = {
  uuid?: Maybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  global?: Maybe<Global>;
  homepage?: Maybe<Homepage>;
  movie?: Maybe<Movies>;
  movies?: Maybe<Array<Maybe<Movies>>>;
  moviesConnection?: Maybe<MoviesConnection>;
  tvSery?: Maybe<TvSeries>;
  tvSeries?: Maybe<Array<Maybe<TvSeries>>>;
  tvSeriesConnection?: Maybe<TvSeriesConnection>;
  userDatum?: Maybe<UserData>;
  userData?: Maybe<Array<Maybe<UserData>>>;
  userDataConnection?: Maybe<UserDataConnection>;
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
  getMovie?: Maybe<GetMovietype>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGlobalArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomepageArgs = {
  publicationState?: Maybe<PublicationState>;
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
  season?: Maybe<Scalars['JSON']>;
  published_at?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<Array<Maybe<Movies>>>;
};


export type TvSeriesMoviesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
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

export type TvSeriesConnectionSeason = {
  __typename?: 'TvSeriesConnectionSeason';
  key?: Maybe<Scalars['JSON']>;
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
  season?: Maybe<Array<Maybe<TvSeriesConnectionSeason>>>;
  published_at?: Maybe<Array<Maybe<TvSeriesConnectionPublished_At>>>;
};

export type TvSeryInput = {
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['JSON']>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
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

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGlobalPayload = {
  __typename?: 'deleteGlobalPayload';
  global?: Maybe<Global>;
};

export type DeleteHomepagePayload = {
  __typename?: 'deleteHomepagePayload';
  homepage?: Maybe<Homepage>;
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

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentSectionsHeroInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentSharedFilmInput = {
  id?: Maybe<Scalars['ID']>;
  film?: Maybe<Scalars['String']>;
  Genre?: Maybe<Enum_Componentsharedfilm_Genre>;
};

export type EditComponentSharedSeoInput = {
  id?: Maybe<Scalars['ID']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  shareImage?: Maybe<Scalars['ID']>;
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

export type EditGlobalInput = {
  favicon?: Maybe<Scalars['ID']>;
  siteName?: Maybe<Scalars['String']>;
  defaultSeo?: Maybe<EditComponentSharedSeoInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomepageInput = {
  seo?: Maybe<EditComponentSharedSeoInput>;
  hero?: Maybe<EditComponentSectionsHeroInput>;
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
  date?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  freeServer1?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['ID']>>>;
  photo_url?: Maybe<Scalars['String']>;
  quality?: Maybe<Enum_Movies_Quality>;
  freeServer2?: Maybe<Scalars['String']>;
  vipServer1?: Maybe<Scalars['String']>;
  vipServer2?: Maybe<Scalars['String']>;
  premiumOnly?: Maybe<Scalars['Boolean']>;
  recommend?: Maybe<Scalars['Boolean']>;
  tv_series?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  season?: Maybe<Scalars['JSON']>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserDatumInput = {
  uuid?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
  expire?: Maybe<Scalars['DateTime']>;
  tokenVersion?: Maybe<Scalars['Int']>;
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

export type GetMovietype = {
  __typename?: 'getMovietype';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  body: Scalars['String'];
  date?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  server1: Scalars['String'];
  server2: Scalars['String'];
  photo_url: Scalars['String'];
  quality: Enum_Movies_Quality;
  premiumOnly: Scalars['Boolean'];
  recommend?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  genres?: Maybe<Array<Maybe<Category>>>;
  tv_series?: Maybe<Array<Maybe<TvSeries>>>;
};


export type GetMovietypeGenresArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GetMovietypeTv_SeriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ReturnSignup = {
  __typename?: 'returnSignup';
  ok?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateGlobalInput = {
  data?: Maybe<EditGlobalInput>;
};

export type UpdateGlobalPayload = {
  __typename?: 'updateGlobalPayload';
  global?: Maybe<Global>;
};

export type UpdateHomepageInput = {
  data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
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

export type GetMovieQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', movies?: Maybe<Array<Maybe<{ __typename?: 'Movies', name: string, id: string, date?: Maybe<any>, quality: Enum_Movies_Quality, photo_url: string }>>> };

export type GetUserQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', userData?: Maybe<Array<Maybe<{ __typename?: 'UserData', uuid?: Maybe<string>, verify?: Maybe<boolean>, expire?: Maybe<any> }>>> };

export type SignUpMutationVariables = Exact<{
  uuid?: Maybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signupClient?: Maybe<{ __typename?: 'returnSignup', ok?: Maybe<boolean>, status?: Maybe<string>, accessToken?: Maybe<string> }> };


export const GetMovieDocument = gql`
    query getMovie($id: String!) {
  movies(where: {uuid: $id}) {
    name
    id
    date
    quality
    photo_url
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
 *      id: // value for 'id'
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
export const GetUserDocument = gql`
    query getUser($uuid: String!) {
  userData(where: {uuid: $uuid}) {
    uuid
    verify
    expire
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
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
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
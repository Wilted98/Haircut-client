import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ErrorsField = {
  __typename?: 'ErrorsField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Gallery = {
  __typename?: 'Gallery';
  id: Scalars['Float'];
  photos: Array<Scalars['String']>;
  salon?: Maybe<Salon>;
};

export type GalleryOptions = {
  imageLink: Scalars['String'];
  salonID: Scalars['Float'];
};

export type GetReviewsOptions = {
  id: Scalars['Float'];
  sortBy: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGallery: Gallery;
  createReview: Review;
  createSalon: Salon;
  createService: Service;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateUserPicture: Scalars['String'];
};


export type MutationCreateGalleryArgs = {
  options: GalleryOptions;
};


export type MutationCreateReviewArgs = {
  options: ReviewOptions;
};


export type MutationCreateSalonArgs = {
  name: Scalars['String'];
};


export type MutationCreateServiceArgs = {
  options: ServiceOptions;
};


export type MutationLoginArgs = {
  options: LoginOptions;
};


export type MutationRegisterArgs = {
  options: UserRegisterOptions;
};


export type MutationUpdateUserPictureArgs = {
  id: Scalars['Float'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllHairStylists: Array<User>;
  getAllSalons?: Maybe<Array<Salon>>;
  getGallery?: Maybe<Gallery>;
  getReviews?: Maybe<Array<Review>>;
  getSalon?: Maybe<Salon>;
  getServices: Array<Service>;
  getUsers: Array<User>;
  me?: Maybe<User>;
};


export type QueryGetGalleryArgs = {
  id: Scalars['Float'];
};


export type QueryGetReviewsArgs = {
  options: GetReviewsOptions;
};


export type QueryGetSalonArgs = {
  id: Scalars['Int'];
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  hairstylist_rating: Scalars['Float'];
  id: Scalars['Float'];
  postedBy?: Maybe<User>;
  salon?: Maybe<Salon>;
  salon_rating: Scalars['Float'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
};

export type ReviewOptions = {
  comment: Scalars['String'];
  hairstylist_rating: Scalars['Float'];
  postedBy: Scalars['Float'];
  salon: Scalars['Float'];
  salon_rating: Scalars['Float'];
  user: Scalars['Float'];
};

export type Salon = {
  __typename?: 'Salon';
  gallery?: Maybe<Gallery>;
  id: Scalars['Float'];
  name: Scalars['String'];
  rating: Scalars['Float'];
  review?: Maybe<Array<Review>>;
  services?: Maybe<Array<Service>>;
  users?: Maybe<Array<User>>;
};

export type Service = {
  __typename?: 'Service';
  currency: Scalars['String'];
  duration: Scalars['Float'];
  id: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  salon?: Maybe<Salon>;
};

export type ServiceOptions = {
  name: Scalars['String'];
  price: Scalars['Float'];
  salonID: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  postedBy?: Maybe<Array<Review>>;
  profile_picture?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  review?: Maybe<Array<Review>>;
  salon?: Maybe<Salon>;
  updatedAt: Scalars['String'];
  user_type: Scalars['String'];
};

export type UserRegisterOptions = {
  email: Scalars['String'];
  password: Scalars['String'];
  salonId?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type LoginOptions = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'userResponse';
  errors?: Maybe<Array<ErrorsField>>;
  user?: Maybe<User>;
};

export type RegularUserFragment = { __typename?: 'User', id: number, name: string, email: string, profile_picture?: string | null, createdAt: string, updatedAt: string };

export type LoginMutationVariables = Exact<{
  options: LoginOptions;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'userResponse', user?: { __typename?: 'User', id: number, name: string, email: string, profile_picture?: string | null, createdAt: string, updatedAt: string } | null, errors?: Array<{ __typename?: 'ErrorsField', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UserRegisterOptions;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'userResponse', user?: { __typename?: 'User', id: number, name: string, email: string, profile_picture?: string | null, createdAt: string, updatedAt: string } | null, errors?: Array<{ __typename?: 'ErrorsField', field: string, message: string }> | null } };

export type UpdateUserPictureMutationVariables = Exact<{
  url: Scalars['String'];
  updateUserPictureId: Scalars['Float'];
}>;


export type UpdateUserPictureMutation = { __typename?: 'Mutation', updateUserPicture: string };

export type GetAllSalonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSalonsQuery = { __typename?: 'Query', getAllSalons?: Array<{ __typename?: 'Salon', id: number, name: string, rating: number }> | null };

export type GetGalleryQueryVariables = Exact<{
  getGalleryId: Scalars['Float'];
}>;


export type GetGalleryQuery = { __typename?: 'Query', getGallery?: { __typename?: 'Gallery', id: number, photos: Array<string> } | null };

export type GetAllHairStylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHairStylistsQuery = { __typename?: 'Query', getAllHairStylists: Array<{ __typename?: 'User', id: number, name: string, rating: number, salon?: { __typename?: 'Salon', id: number, name: string, rating: number } | null }> };

export type GetReviewsQueryVariables = Exact<{
  options: GetReviewsOptions;
}>;


export type GetReviewsQuery = { __typename?: 'Query', getReviews?: Array<{ __typename?: 'Review', id: number, comment: string, createdAt: string, hairstylist_rating: number, postedBy?: { __typename?: 'User', id: number, name: string } | null, user?: { __typename?: 'User', id: number, name: string } | null }> | null };

export type GetSalonQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSalonQuery = { __typename?: 'Query', getSalon?: { __typename?: 'Salon', id: number, name: string, services?: Array<{ __typename?: 'Service', id: number, name: string, price: number, duration: number, currency: string }> | null, users?: Array<{ __typename?: 'User', id: number, name: string }> | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, name: string, email: string, profile_picture?: string | null, createdAt: string, updatedAt: string } | null };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
  profile_picture
  createdAt
  updatedAt
}
    `;
export const LoginDocument = gql`
    mutation Login($options: loginOptions!) {
  login(options: $options) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UserRegisterOptions!) {
  register(options: $options) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const UpdateUserPictureDocument = gql`
    mutation UpdateUserPicture($url: String!, $updateUserPictureId: Float!) {
  updateUserPicture(url: $url, id: $updateUserPictureId)
}
    `;

export function useUpdateUserPictureMutation() {
  return Urql.useMutation<UpdateUserPictureMutation, UpdateUserPictureMutationVariables>(UpdateUserPictureDocument);
};
export const GetAllSalonsDocument = gql`
    query getAllSalons {
  getAllSalons {
    id
    name
    rating
  }
}
    `;

export function useGetAllSalonsQuery(options?: Omit<Urql.UseQueryArgs<GetAllSalonsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllSalonsQuery>({ query: GetAllSalonsDocument, ...options });
};
export const GetGalleryDocument = gql`
    query getGallery($getGalleryId: Float!) {
  getGallery(id: $getGalleryId) {
    id
    photos
  }
}
    `;

export function useGetGalleryQuery(options: Omit<Urql.UseQueryArgs<GetGalleryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetGalleryQuery>({ query: GetGalleryDocument, ...options });
};
export const GetAllHairStylistsDocument = gql`
    query getAllHairStylists {
  getAllHairStylists {
    id
    name
    rating
    salon {
      id
      name
      rating
    }
  }
}
    `;

export function useGetAllHairStylistsQuery(options?: Omit<Urql.UseQueryArgs<GetAllHairStylistsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllHairStylistsQuery>({ query: GetAllHairStylistsDocument, ...options });
};
export const GetReviewsDocument = gql`
    query getReviews($options: GetReviewsOptions!) {
  getReviews(options: $options) {
    id
    comment
    createdAt
    hairstylist_rating
    postedBy {
      id
      name
    }
    user {
      id
      name
    }
  }
}
    `;

export function useGetReviewsQuery(options: Omit<Urql.UseQueryArgs<GetReviewsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetReviewsQuery>({ query: GetReviewsDocument, ...options });
};
export const GetSalonDocument = gql`
    query getSalon($id: Int!) {
  getSalon(id: $id) {
    id
    name
    services {
      id
      name
      price
      duration
      currency
    }
    users {
      id
      name
    }
  }
}
    `;

export function useGetSalonQuery(options: Omit<Urql.UseQueryArgs<GetSalonQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSalonQuery>({ query: GetSalonDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
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

export type Mutation = {
  __typename?: 'Mutation';
  createSalon: Salon;
  createService: Service;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
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

export type Query = {
  __typename?: 'Query';
  getAllHairStylists: Array<User>;
  getServices: Array<Service>;
  getUsers: Array<User>;
  me?: Maybe<User>;
};

export type Salon = {
  __typename?: 'Salon';
  id: Scalars['Float'];
  name: Scalars['String'];
  rating: Scalars['Float'];
  services?: Maybe<Array<Service>>;
  users?: Maybe<Array<User>>;
};

export type Service = {
  __typename?: 'Service';
  ID: Scalars['Float'];
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

export type RegularUserFragment = { __typename?: 'User', id: number, name: string, email: string, createdAt: string, updatedAt: string };

export type LoginMutationVariables = Exact<{
  options: LoginOptions;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'userResponse', user?: { __typename?: 'User', id: number, name: string, email: string, createdAt: string, updatedAt: string } | null, errors?: Array<{ __typename?: 'ErrorsField', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UserRegisterOptions;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'userResponse', user?: { __typename?: 'User', id: number, name: string, email: string, createdAt: string, updatedAt: string } | null, errors?: Array<{ __typename?: 'ErrorsField', field: string, message: string }> | null } };

export type GetAllHairStylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHairStylistsQuery = { __typename?: 'Query', getAllHairStylists: Array<{ __typename?: 'User', id: number, name: string, salon?: { __typename?: 'Salon', id: number, name: string, rating: number } | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, name: string, email: string, createdAt: string, updatedAt: string } | null };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
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
export const GetAllHairStylistsDocument = gql`
    query getAllHairStylists {
  getAllHairStylists {
    id
    name
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
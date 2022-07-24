import {createClient, dedupExchange, fetchExchange} from 'urql';
import {cacheExchange, query} from '@urql/exchange-graphcache';
import {
  LoginMutation,
  MeQuery,
  MeDocument,
  LogoutMutation,
  RegisterMutation,
} from '../generated/graphql';
import {betterUpdateQuery} from './betterUpdateQuery';
import {SERVER_URL} from './constants';

export const client = createClient({
  url: SERVER_URL,
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              {query: MeDocument},
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              },
            );
          },
          logout: (_result, args, cache, info) => {
            betterUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              {query: MeDocument},
              _result,
              () => ({me: null}),
            );
          },
          register: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              {query: MeDocument},
              _result,
              (result, query) => {
                if (result.register.errors) {
                  return query;
                } else {
                  return {
                    me: result.register.user,
                  };
                }
              },
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});

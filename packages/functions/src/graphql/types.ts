export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: Date; output: Date; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type AnalyticsCount = {
  __typename?: 'AnalyticsCount';
  name: Scalars['String']['output'];
  total: Scalars['Int']['output'];
};

export type AnalyticsEvent = {
  __typename?: 'AnalyticsEvent';
  browserEngine: Scalars['String']['output'];
  browserName: Scalars['String']['output'];
  browserVersion: Scalars['String']['output'];
  created: Scalars['Date']['output'];
  deviceModel: Scalars['String']['output'];
  deviceType: Scalars['String']['output'];
  deviceVendor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: Scalars['JSON']['output'];
  name: EventName;
  osName: Scalars['String']['output'];
  osVersion: Scalars['String']['output'];
  url: Scalars['String']['output'];
  visitorId: Scalars['String']['output'];
};

export enum EventName {
  Click = 'click',
  CursorThrash = 'cursorThrash',
  Error = 'error',
  Form = 'form',
  Hover = 'hover',
  Navigation = 'navigation',
  PageView = 'pageView',
  RageClick = 'rageClick'
}

export type Message = {
  __typename?: 'Message';
  created: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnalyticsEvent: AnalyticsEvent;
  createMessage: Message;
  signIn: SignInResult;
};


export type MutationCreateAnalyticsEventArgs = {
  metadata: InputMaybe<Scalars['String']['input']>;
  name: EventName;
  visitorId: Scalars['String']['input'];
};


export type MutationCreateMessageArgs = {
  email: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  Messages: Array<Message>;
  analyticsEvents: Array<AnalyticsEvent>;
  countEvents: Array<AnalyticsCount>;
};


export type QueryAnalyticsEventsArgs = {
  fields: InputMaybe<Scalars['String']['input']>;
};

export type SignInResult = {
  __typename?: 'SignInResult';
  error: Maybe<Scalars['String']['output']>;
  isAuthorized: Maybe<Scalars['Boolean']['output']>;
};
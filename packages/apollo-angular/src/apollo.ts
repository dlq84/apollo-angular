import {Injectable, Optional, Inject, NgZone} from '@angular/core';
import type {
  QueryOptions,
  ApolloQueryResult,
  SubscriptionOptions,
  ApolloClientOptions,
  ObservableQuery,
  FetchResult,
} from '@apollo/client/core';
import {ApolloClient} from '@apollo/client/core';
import {Observable, from} from 'rxjs';

import {QueryRef} from './query-ref';
import {
  WatchQueryOptions,
  ExtraSubscriptionOptions,
  EmptyObject,
  NamedOptions,
  Flags,
  MutationResult,
  MutationOptions,
} from './types';
import {APOLLO_OPTIONS, APOLLO_NAMED_OPTIONS, APOLLO_FLAGS} from './tokens';
import {
  fromPromise,
  useMutationLoading,
  wrapWithZone,
  fixObservable,
  pickFlag,
} from './utils';

export class ApolloBase<TCacheShape = any> {
  private useInitialLoading: boolean;
  private useMutationLoading: boolean;

  constructor(
    protected ngZone: NgZone,
    protected flags?: Flags,
    protected _client?: ApolloClient<TCacheShape>,
  ) {
    this.useInitialLoading = pickFlag(flags, 'useInitialLoading', false);
    this.useMutationLoading = pickFlag(flags, 'useMutationLoading', false);
  }

  public watchQuery<TData, TVariables = EmptyObject>(
    options: WatchQueryOptions<TVariables, TData>,
  ): QueryRef<TData, TVariables> {
    return new QueryRef<TData, TVariables>(
      this.ensureClient().watchQuery<TData, TVariables>({
        ...options,
      }) as ObservableQuery<TData, TVariables>,
      this.ngZone,
      {
        useInitialLoading: this.useInitialLoading,
        ...options,
      },
    );
  }

  public query<T, V = EmptyObject>(
    options: QueryOptions<V, T>,
  ): Observable<ApolloQueryResult<T>> {
    return fromPromise<ApolloQueryResult<T>>(() =>
      this.ensureClient().query<T, V>({...options}),
    );
  }

  public mutate<T, V = EmptyObject>(
    options: MutationOptions<T, V>,
  ): Observable<MutationResult<T>> {
    return useMutationLoading(
      fromPromise(() => this.ensureClient().mutate<T, V>({...options})),
      options.useMutationLoading ?? this.useMutationLoading,
    );
  }

  public subscribe<T, V = EmptyObject>(
    options: SubscriptionOptions<V, T>,
    extra?: ExtraSubscriptionOptions,
  ): Observable<FetchResult<T>> {
    const obs = from(
      fixObservable(this.ensureClient().subscribe<T, V>({...options})),
    );

    return extra && extra.useZone !== true
      ? obs
      : wrapWithZone(obs, this.ngZone);
  }

  /**
   * Get an access to an instance of ApolloClient
   * @deprecated use `apollo.client` instead
   */
  public getClient() {
    return this.client;
  }

  /**
   * Set a new instance of ApolloClient
   * Remember to clean up the store before setting a new client.
   * @deprecated use `apollo.client = client` instead
   *
   * @param client ApolloClient instance
   */
  public setClient(client: ApolloClient<TCacheShape>) {
    this.client = client;
  }

  /**
   * Get an access to an instance of ApolloClient
   */
  public get client(): ApolloClient<TCacheShape> {
    return this._client;
  }

  /**
   * Set a new instance of ApolloClient
   * Remember to clean up the store before setting a new client.
   *
   * @param client ApolloClient instance
   */
  public set client(client: ApolloClient<TCacheShape>) {
    if (this._client) {
      throw new Error('Client has been already defined');
    }

    this._client = client;
  }

  private ensureClient() {
    this.checkInstance();

    return this._client;
  }

  private checkInstance(): void {
    if (!this._client) {
      throw new Error('Client has not been defined yet');
    }
  }
}

@Injectable()
export class Apollo extends ApolloBase<any> {
  private map: Map<string, ApolloBase<any>> = new Map<
    string,
    ApolloBase<any>
  >();

  constructor(
    private _ngZone: NgZone,
    @Optional()
    @Inject(APOLLO_OPTIONS)
    apolloOptions?: ApolloClientOptions<any>,
    @Optional()
    @Inject(APOLLO_NAMED_OPTIONS)
    apolloNamedOptions?: NamedOptions,
    @Optional() @Inject(APOLLO_FLAGS) flags?: Flags,
  ) {
    super(_ngZone, flags);

    if (apolloOptions) {
      this.createDefault(apolloOptions);
    }

    if (apolloNamedOptions && typeof apolloNamedOptions === 'object') {
      for (let name in apolloNamedOptions) {
        if (apolloNamedOptions.hasOwnProperty(name)) {
          const options = apolloNamedOptions[name];
          this.createNamed(name, options);
        }
      }
    }
  }

  /**
   * Create an instance of ApolloClient
   * @param options Options required to create ApolloClient
   * @param name client's name
   */
  public create<TCacheShape>(
    options: ApolloClientOptions<TCacheShape>,
    name?: string,
  ): void {
    if (isDefault(name)) {
      this.createDefault<TCacheShape>(options);
    } else {
      this.createNamed<TCacheShape>(name, options);
    }
  }

  /**
   * Use a default ApolloClient
   */
  public default(): ApolloBase<any> {
    return this;
  }

  /**
   * Use a named ApolloClient
   * @param name client's name
   */
  public use(name: string): ApolloBase<any> {
    if (isDefault(name)) {
      return this.default();
    }
    return this.map.get(name);
  }

  /**
   * Create a default ApolloClient, same as `apollo.create(options)`
   * @param options ApolloClient's options
   */
  public createDefault<TCacheShape>(
    options: ApolloClientOptions<TCacheShape>,
  ): void {
    if (this.getClient()) {
      throw new Error('Apollo has been already created.');
    }

    return this.setClient(new ApolloClient<TCacheShape>(options));
  }

  /**
   * Create a named ApolloClient, same as `apollo.create(options, name)`
   * @param name client's name
   * @param options ApolloClient's options
   */
  public createNamed<TCacheShape>(
    name: string,
    options: ApolloClientOptions<TCacheShape>,
  ): void {
    if (this.map.has(name)) {
      throw new Error(`Client ${name} has been already created`);
    }
    this.map.set(
      name,
      new ApolloBase(
        this._ngZone,
        this.flags,
        new ApolloClient<TCacheShape>(options),
      ),
    );
  }

  /**
   * Remember to clean up the store before removing a client
   * @param name client's name
   */
  public removeClient(name?: string): void {
    if (isDefault(name)) {
      this._client = undefined;
    } else {
      this.map.delete(name);
    }
  }
}

function isDefault(name?: string): boolean {
  return !name || name === 'default';
}

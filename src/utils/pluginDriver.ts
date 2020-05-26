/**
 * Get the inner type from a promise
 * @example ResolveValue<Promise<string>> -> string
 */
type ResolveValue<T> = T extends Promise<infer K> ? K : T;

/**
 * Coerce a promise union to always be a promise.
 * @example EnsurePromise<string | Promise<string>> -> Promise<string>
 */
type EnsurePromise<T> = Promise<ResolveValue<T>>;

export class PluginDriver {
  runHookSync() {}
  runHook() {
    return Promise.resolve();
  }
}

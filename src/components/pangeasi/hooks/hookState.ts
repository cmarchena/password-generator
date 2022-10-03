export type IHookStateInitialSetter<S> = () => S
export type IHookStateInitAction<S> = S | IHookStateInitialSetter<S>

export type IHookStateSetter<S> = ((prevState: S) => S) | (() => S)
export type IHookStateSetAction<S> = S | IHookStateSetter<S>

export type IHookStateResolvable<S> = S | IHookStateInitialSetter<S> | IHookStateSetter<S>

// export function resolveHookState<S>(nextState: IHookStateInitAction<S>): S
// export function resolveHookState<S, C extends S>(
// 	nextState: IHookStateSetAction<S>,
// 	currentState?: C
// ): S
// export function resolveHookState<S, C extends S>(
// 	nextState: IHookStateResolvable<S>,
// 	currentState?: C
// ): S

export function resolveHookState<S, C extends S> (
	nextState: IHookStateResolvable<S>,
	currentState?: C
): S {
	if (typeof nextState === 'function') {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return nextState.length ? (nextState as any)(currentState) : (nextState as any)()
	}

	return nextState
}

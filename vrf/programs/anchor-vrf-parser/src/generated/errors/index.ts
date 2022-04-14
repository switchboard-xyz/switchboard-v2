/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * InvalidSwitchboardVrfAccount: 'Not a valid Switchboard VRF account'
 *
 * @category Errors
 * @category generated
 */
export class InvalidSwitchboardVrfAccountError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'InvalidSwitchboardVrfAccount'
  constructor() {
    super('Not a valid Switchboard VRF account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidSwitchboardVrfAccountError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1770,
  () => new InvalidSwitchboardVrfAccountError()
)
createErrorFromNameLookup.set(
  'InvalidSwitchboardVrfAccount',
  () => new InvalidSwitchboardVrfAccountError()
)

/**
 * MaxResultExceedsMaximum: 'The max result must not exceed u64'
 *
 * @category Errors
 * @category generated
 */
export class MaxResultExceedsMaximumError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'MaxResultExceedsMaximum'
  constructor() {
    super('The max result must not exceed u64')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MaxResultExceedsMaximumError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new MaxResultExceedsMaximumError())
createErrorFromNameLookup.set(
  'MaxResultExceedsMaximum',
  () => new MaxResultExceedsMaximumError()
)

/**
 * EmptyCurrentRoundResult: 'Current round result is empty'
 *
 * @category Errors
 * @category generated
 */
export class EmptyCurrentRoundResultError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'EmptyCurrentRoundResult'
  constructor() {
    super('Current round result is empty')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, EmptyCurrentRoundResultError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new EmptyCurrentRoundResultError())
createErrorFromNameLookup.set(
  'EmptyCurrentRoundResult',
  () => new EmptyCurrentRoundResultError()
)

/**
 * InvalidAuthorityError: 'Invalid authority account provided.'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAuthorityErrorError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'InvalidAuthorityError'
  constructor() {
    super('Invalid authority account provided.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAuthorityErrorError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new InvalidAuthorityErrorError())
createErrorFromNameLookup.set(
  'InvalidAuthorityError',
  () => new InvalidAuthorityErrorError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}

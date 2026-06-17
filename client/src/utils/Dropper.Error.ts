import type { DropperError } from '../types/DropperError';

export const isError = <T, >(err: DropperError | T): err is DropperError => 
  !!err && err instanceof Error && !!err.message

export const isNotCanceled = <T, >(err: DropperError | T): err is DropperError =>
  isError(err) && !err.canceled
import { ApiResponseError } from './api/_prototype';

export interface ActionReducer<PydT = any> {
  type: string;
  payload?:
    | PydT
    | string
    | number
    | ApiResponseError
    | null
    | Record<string, any>
    | any[]
    | any;
}

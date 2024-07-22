import { HttpStatus } from '@nestjs/common';

import { ITcpResponse } from '../types';


export class ErrorResponse implements ITcpResponse<null> {
  public ok: boolean;
  public data: null;
  public errors: string[];

  constructor(status: number | HttpStatus, errorMessages: string[] | string) {
    this.ok = false;
    this.data = null;

    this.errors = Array.isArray(errorMessages)
      ? [ ...errorMessages ]
      : [ errorMessages ];
  }
}

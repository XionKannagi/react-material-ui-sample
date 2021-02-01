
export class CommonResponse<T> {

  private _code: number;
  private _result: T;

  constructor(code: number, result: T) {
    this._code = code;
    this._result = result;
  }

  get code(): number{
    return this._code;
  }

  get result(): T {
    return this._result;
  }
}


//export default CommonResponse;
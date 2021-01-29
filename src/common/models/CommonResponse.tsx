
class CommonResponse<T> {
  private _result: T;

  constructor(result: T) {
    this._result = result;
  }

  get result(): T {
    return this._result;
  }
}


export default CommonResponse;
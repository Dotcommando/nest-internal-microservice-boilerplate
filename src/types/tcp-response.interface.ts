export interface ITcpResponse<T = string> {
  ok: boolean;
  data: T;
}

interface IEntity{};

export interface DataResponse<T extends IEntity>{
  statusCode: number,
  success: boolean,
  message: string,
  data: T
}

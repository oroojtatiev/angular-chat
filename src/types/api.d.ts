import {HttpStatusCode} from '@angular/common/http'

interface IAPIResponse<T> {
  data: T
  status: HttpStatusCode
  message?: string
}

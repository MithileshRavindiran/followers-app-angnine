import { AppException } from './app.exception';

export class BadRequestException extends AppException {

    constructor(public  originalError?:any)  {
        super();
    }
}
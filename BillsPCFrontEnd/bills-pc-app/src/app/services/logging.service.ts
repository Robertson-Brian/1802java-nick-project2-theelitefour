import { Injectable } from '@angular/core';


@Injectable()
export class LoggingService {

    log(status: string, message: string): void {

        console.log('Status: ' + status + ' message: ' + message);

    }

}
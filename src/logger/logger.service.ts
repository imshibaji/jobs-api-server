import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, map } from 'rxjs';

@Injectable()
export class LoggerService {
    constructor(private eventEmitter: EventEmitter2) {}

    observe() {
        return fromEvent(this.eventEmitter, 'log').pipe(
            map((data) => {
                // console.log(data);
                return data;
            }),
        );
    }

    log(data: any) {
        const strData = JSON.stringify(data);
        this.eventEmitter.emit('log', strData);
    }
}

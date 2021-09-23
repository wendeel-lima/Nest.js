import { MessageService } from './message.service';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    findAll(): Message[];
    getById(params: any): Promise<Message>;
    create(messageDto: MessageDto): Message;
    update(params: any, messageDto: MessageDto): Message;
    delete(params: any): boolean;
}

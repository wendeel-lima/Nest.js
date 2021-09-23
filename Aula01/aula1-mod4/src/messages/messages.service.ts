import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
    public messages: Message[] = [
        {
            id: 1,
            texto: "Primeira mensagem"
        }, 
        {
            id: 2,
            texto: "Segunda mensagem"
        }, 
        {
            id: 3,
            texto: "Terceira mensagem"
        },
        {
            id: 4,
            texto: "Quarta mensagem",
        },
    ];

    findAll(){
        return this.messages.filter(Boolean);
    }
    
    async findById(id: number) {
        const message = this.messages.find(message => message.id === id);

        if(!message){
            throw Error(`Mensagem com id ${id} não encontrada`);
        }

        return message;
    }
    
    create(messageDto: MessageDto) {
        const id = this.messages.length + 1;

        const message : Message = {
            id,
            ...messageDto,
        }
        
        this.messages.push(message);

        return message;
    }

    update(id:number, messageDto: MessageDto) {
        const index = this.messages.findIndex(a => a.id === id);

        const message : Message = {
            id,
            ...messageDto,
        }

        this.messages[index] = message;

        return message;
    }
    
    delete(id: number) {
        const index = this.messages.findIndex(a => a.id === id);

        delete this.messages[index];

        return true;

    }
}

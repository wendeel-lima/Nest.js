import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessageService {
  public message: Message[] = [
    {
      id: 1,
      texto: 'Primeira mensagem',
    },
    {
      id: 2,
      texto: 'Segunda mensagem',
    },
    {
      id: 3,
      texto: 'terceira mensagem',
    },
    {
      id: 4,
      texto: 'quarta mensagem',
    },
  ];

  findAll() {
    return this.message.filter(Boolean);
  }
  async findOne(id: number) {
    const message = this.message.find((message) => message.id === id);
    if (!message) {
      throw Error(`id: ${id} não encontrado`);
    }
    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.message.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.message.push(message);
    return message;
  }

  update(id: number, messageDto: MessageDto) {
    const index = this.message.findIndex((a) => a.id === id);

    const message: Message = {
      id,
      ...messageDto,
    };

    this.message[index] = message;

    return message;
  }

  delete(id: number) {
    const index = this.message.findIndex((msg) => msg.id === id);
    delete this.message[index];
    return true;
  }
}

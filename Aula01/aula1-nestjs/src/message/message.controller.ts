import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './MessageDto';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.messageService.findOne(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messageService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() messageDto: MessageDto) {
    return this.messageService.update(+params.id, messageDto);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messageService.delete(+params.id);
  }
}

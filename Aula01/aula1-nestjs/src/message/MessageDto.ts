import { IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @IsString({ message: 'O texto da mensagem deve ser string' })
  @IsNotEmpty({ message: 'A mensagem não pode ser vazia' })
  texto: string;
}

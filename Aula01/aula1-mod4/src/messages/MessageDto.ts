import { IsNotEmpty, IsString } from "class-validator";

export class MessageDto {
    @IsString({message: "O texto da mensagem deve ser uma string!"})
    @IsNotEmpty({message: "O texto da mensagem não pode ser vazio!"})
    texto: string;
}

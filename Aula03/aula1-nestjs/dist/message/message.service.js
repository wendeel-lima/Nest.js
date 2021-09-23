"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
let MessageService = class MessageService {
    constructor() {
        this.message = [
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
    }
    findAll() {
        return this.message.filter(Boolean);
    }
    async findOne(id) {
        const message = this.message.find((message) => message.id === id);
        if (!message) {
            throw Error(`id: ${id} não encontrado`);
        }
        return message;
    }
    create(messageDto) {
        const id = this.message.length + 1;
        const message = Object.assign({ id }, messageDto);
        this.message.push(message);
        return message;
    }
    update(id, messageDto) {
        const index = this.message.findIndex((a) => a.id === id);
        const message = Object.assign({ id }, messageDto);
        this.message[index] = message;
        return message;
    }
    delete(id) {
        const index = this.message.findIndex((msg) => msg.id === id);
        delete this.message[index];
        return true;
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)()
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map
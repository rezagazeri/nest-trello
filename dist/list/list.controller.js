"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../user/user.decorator");
const auth_gaurd_1 = require("../shared/auth.gaurd");
const validation_pipe_1 = require("../shared/validation.pipe");
const list_dto_1 = require("./list.dto");
const list_service_1 = require("./list.service");
let ListController = class ListController {
    constructor(listService) {
        this.listService = listService;
        this.logger = new common_1.Logger('ListController');
    }
    showListByBoard(board, page) {
        return this.listService.showByBoard(board, page);
    }
    createList(board, user, data) {
        return this.listService.create(board, user, data);
    }
    showListsByUser(user, page) {
        return this.listService.showByUser(user, page);
    }
    showList(id) {
        return this.listService.show(id);
    }
    updateCard(id, user, data) {
        return this.listService.update(id, user, data);
    }
    destroyList(id, user) {
        return this.listService.destroy(id, user);
    }
};
__decorate([
    common_1.Get('board/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "showListByBoard", null);
__decorate([
    common_1.Post('board/:id'),
    common_1.UseGuards(new auth_gaurd_1.AuthGuard()),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, list_dto_1.ListDTO]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "createList", null);
__decorate([
    common_1.Get('user/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "showListsByUser", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "showList", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(new auth_gaurd_1.AuthGuard()),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __param(1, user_decorator_1.User('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, list_dto_1.ListDTO]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "updateCard", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(new auth_gaurd_1.AuthGuard()),
    __param(0, common_1.Param('id')), __param(1, user_decorator_1.User('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ListController.prototype, "destroyList", null);
ListController = __decorate([
    common_1.Controller('api/lists'),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListController);
exports.ListController = ListController;
//# sourceMappingURL=list.controller.js.map
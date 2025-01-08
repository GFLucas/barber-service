import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import CreateUserDto from "./dtos/create-users";
import { Response } from "express";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() data: CreateUserDto, @Res() res: Response) {
    const userEmail = await this.usersService.findUserByEmail(data.email);

    if (userEmail) {
      throw new BadRequestException("Email já cadastrado.");
    }
    const user = await this.usersService.CreateUser(data);
    res.status(HttpStatus.CREATED).json(user);
  }
}

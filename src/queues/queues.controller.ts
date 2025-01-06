/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Res,
} from "@nestjs/common";
import { QueuesService } from "./queues.service";
import CreateQueueDto from "./dtos/create-queue";
import { Response } from "express";
import { ExpertsService } from "src/experts/experts.service";

@Controller("queues")
export class QueuesController {
  constructor(
    private readonly queuesService: QueuesService,
    private readonly expertsService: ExpertsService
  ) {}

  @Post()
  async create(@Body() data: CreateQueueDto, @Res() res: Response) {
    const expert = await this.expertsService.findExpert(data.expertId);

    if (!expert) {
      throw new NotFoundException("Profissional não encontrado.");
    }

    const queueExists = await this.queuesService.queueExpertExist(
      data.expertId
    );

    if (queueExists) {
      throw new BadRequestException(
        "Já existe uma fila para este profissional."
      );
    }

    const queue = await this.queuesService.createQueue(data);
    return res.status(HttpStatus.CREATED).json(queue);
  }
}

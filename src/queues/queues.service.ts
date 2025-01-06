/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import CreateQueueDto from "./dtos/create-queue";

@Injectable()
export class QueuesService {
  constructor(private readonly prisma: PrismaService) {}

  async createQueue(data: CreateQueueDto) {
    return await this.prisma.queue.create({ data });
  }

  async queueExpertExist(expertId: string) {
    return await this.prisma.queue.findFirst({
      where: {
        createdAt: {
          equals: new Date(),
        },
        expertId: expertId,
      },
    });
  }

  async getQueues() {
    return await this.prisma.queue.findMany({
      include: {
        expert: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getExpertQueues(expertId: string) {
    return await this.prisma.queue.findMany({
      where: {
        expertId: expertId,
      },
      include: {
        expert: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async queuesToday() {
    const queueToday = await this.prisma.queue.findMany({
      where: {
        createdAt: {
          equals: new Date(),
        },
      },
      include: {
        expert: true,
        queuecustomers: true,
      },
    });
    return queueToday;
  }
}

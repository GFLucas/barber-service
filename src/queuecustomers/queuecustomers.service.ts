/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

type CreateCustomer = {
  name: string;
  service: string;
  queueId: string;
};

@Injectable()
export class QueuecustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async addCustomer(data: CreateCustomer) {
    return await this.prisma.queueCustomer.create({
      data,
    });
  }

  async getExpertQueueToday(expertId) {
    return await this.prisma.queue.findFirst({
      where: {
        expertId: expertId,
        createdAt: {
          equals: new Date(),
        },
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CatCreateInput): Promise<Cat> {
    return this.prisma.cat.create({ data });
  }

  async findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }
}

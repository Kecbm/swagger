import { Injectable } from '@nestjs/common';
import { CreateInstanceDto } from './dto/create-instance.dto';
import { UpdateInstanceDto } from './dto/update-instance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstanceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInstanceDto: CreateInstanceDto) {
    return this.prisma.instance.create({ data: createInstanceDto });
  }

  findAll() {
    return this.prisma.instance.findMany();
  }

  findOne(id: number) {
    return this.prisma.instance.findUnique({ where: { id } });
  }

  update(id: number, updateInstanceDto: UpdateInstanceDto) {
    return this.prisma.instance.update({
      where: { id },
      data: updateInstanceDto,
    });
  }

  remove(id: number) {
    return this.prisma.instance.delete({ where: { id } });
  }
}

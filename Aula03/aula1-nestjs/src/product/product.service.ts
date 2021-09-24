import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    //return 'This action adds a new product';
    return this.prisma.product.create({
      data,
      include: {
        images: true,
      },
    });
  }

  findAll() {
    // return `This action returns all product`;
    return this.prisma.product.findMany({
      include: {
        images: true,
      },
    });
  }

  findOne(id: number) {
    // return `This action returns a #${id} product`;
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });
  }

  update(id: number, data: UpdateProductDto) {
    //return `This action updates a #${id} product`;
    return this.prisma.product.update({
      where: { id },
      data,
      include: {
        images: true,
      },
    });
  }

  remove(id: number) {
    //return `This action removes a #${id} product`;
    return this.prisma.product.delete({
      where: { id },
      include: {
        images: true,
      },
    });
  }
}

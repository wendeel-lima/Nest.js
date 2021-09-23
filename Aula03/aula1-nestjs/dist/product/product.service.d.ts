import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): string;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}

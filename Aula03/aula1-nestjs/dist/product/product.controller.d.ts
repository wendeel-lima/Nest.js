import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
    update(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
}

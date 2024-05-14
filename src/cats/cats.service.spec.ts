import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { PrismaService } from '../prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';

describe('CatsService', () => {
  let service: CatsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService, PrismaService],
    }).compile();

    service = module.get<CatsService>(CatsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.cat.deleteMany();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create cat', async () => {
    const cat: CreateCatDto = {
      age: 123,
      name: 'Kitty',
      breed: 'White',
    };

    const result = await service.create(cat);

    expect(result.name).toBe('Kitty');
  });
});

import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import {
  HasMimeType,
  IsFile,
  IsFiles,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class CreateApartmentDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly price: string;

  @IsString()
  @IsNotEmpty()
  readonly rooms: string;

  @IsString()
  @IsNotEmpty()
  readonly baths: string;

  @IsString()
  @IsNotEmpty()
  readonly area: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly furnishingStatus: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly amenities: string[];

  @IsNotEmpty()
  @IsFiles()
  @HasMimeType(['image/jpeg', 'image/png'], { each: true })
  readonly photos: MemoryStoredFile[];
}

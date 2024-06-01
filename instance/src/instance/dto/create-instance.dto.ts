import { IsString, IsNumber } from 'class-validator';

export class CreateInstanceDto {
  @IsString()
  domain: string;

  @IsNumber()
  phone: number;

  @IsString()
  instance_id: string;

  @IsString()
  type: string;
}

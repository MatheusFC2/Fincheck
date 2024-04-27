import { BankAccountType } from '@prisma/client';
import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}

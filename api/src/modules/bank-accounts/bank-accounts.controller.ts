import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { BankAccountsService } from './services/bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { LoggedUserId } from 'src/shared/decorators/LoggedUserId';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  create(
    @Body() createBankAccountDto: CreateBankAccountDto,
    @LoggedUserId() userId: string,
  ) {
    return this.bankAccountsService.create(userId, createBankAccountDto);
  }

  @Get()
  findAll(@LoggedUserId() userId: string) {
    return this.bankAccountsService.findAllByUserId(userId);
  }

  @Put(':bankAccountId')
  update(
    @LoggedUserId() userId: string,
    @Param('bankAccountId', ParseUUIDPipe) bankAccountId: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return this.bankAccountsService.update(
      userId,
      bankAccountId,
      updateBankAccountDto,
    );
  }

  @Delete(':bankAccountId')
  @HttpCode(204)
  remove(
    @LoggedUserId() userId: string,
    @Param('bankAccountId', ParseUUIDPipe) bankAccountId: string,
  ) {
    return this.bankAccountsService.remove(userId, bankAccountId);
  }
}

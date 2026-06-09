import { Module } from '@nestjs/common';
import { MailtrapService } from './mailtrap.service';
import { MailtrapController } from './mailtrap.controller';

@Module({
  imports: [],
  controllers: [MailtrapController],
  providers: [MailtrapService],
})
export class MailtrapModule {}

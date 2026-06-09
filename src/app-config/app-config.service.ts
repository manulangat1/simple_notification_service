import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentValues } from './dto/Environment.dto';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService<EnvironmentValues>) {}

  get mailTrapEmail(): string {
    return this.configService.getOrThrow('MAILTRAP_SENDER_EMAIL');
  }

  get mailTrapApiKey(): string {
    return this.configService.getOrThrow('MAIL_TRAP_API_KEY');
  }

  get mailTrapSenderName(): string {
    return this.configService.getOrThrow('MAILTRAP_SENDER_NAME');
  }
}

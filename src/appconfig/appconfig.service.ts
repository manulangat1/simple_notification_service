import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariablesDto } from './dto/EnvironmentVariables.dto';

@Injectable()
export class AppconfigService {
  constructor(private configService: ConfigService<EnvironmentVariablesDto>) {}

  get resendApiKey(): string {
    return this.configService.getOrThrow<string>('RESEND_API_KEY');
  }

  get redisConfig() {
    return {
      redisUsername: this.configService.getOrThrow<string>('REDIS_USERNAME'),
      redisPassword: this.configService.getOrThrow<string>('REDIS_PASSWORD'),
      redisPort: this.configService.getOrThrow<string>('REDIS_PORT'),
      redisHost: this.configService.getOrThrow<string>('REDIS_HOST'),
      //   redisPassword: this.configService.getOrThrow<string>('REDIS_PASSWORD'),
    };
  }
}

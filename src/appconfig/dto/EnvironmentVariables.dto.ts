import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnvironmentVariablesDto {
  @IsNotEmpty()
  @IsString()
  RESEND_API_KEY: string;

  @IsNotEmpty()
  @IsString()
  REDIS_USERNAME: string;

  @IsNotEmpty()
  @IsString()
  REDIS_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  REDIS_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  REDIS_PORT: number;
}

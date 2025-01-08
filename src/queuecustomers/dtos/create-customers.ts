/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export default class CreateQueueCustomersDto {
  @IsNotEmpty({ message: "O campo nome é obrigatório!" })
  name: string;
  @IsNotEmpty({ message: "O campo erviço é obrigatório!" })
  service: string;
  @IsNotEmpty({ message: "O campo profissional é obrigatório!" })
  expertId: string;
}

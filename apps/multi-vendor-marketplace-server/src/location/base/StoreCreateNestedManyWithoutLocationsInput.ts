/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StoreCreateNestedManyWithoutLocationsInput {
  @Field(() => [StoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoreWhereUniqueInput],
  })
  connect?: Array<StoreWhereUniqueInput>;
}

export { StoreCreateNestedManyWithoutLocationsInput as StoreCreateNestedManyWithoutLocationsInput };

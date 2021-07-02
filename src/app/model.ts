
export interface RecipeCategory{
    id:string;
    recipe_type: string;
    img:string
    created_date:string;
}

export interface APIResponse<T>{
    response:Array<T>;
}


export class NewAccountUser{
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

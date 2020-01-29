declare module "api" {
  export function submit(data: any): any;
  export function validate(username: string): void | Error;
}

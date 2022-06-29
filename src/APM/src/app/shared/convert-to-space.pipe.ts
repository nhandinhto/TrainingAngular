import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpace'
})

export class ConvertToSpacePipes implements PipeTransform{
    transform(value : string, args : string) : string {
        return value.replace(args,' ');
    }
}
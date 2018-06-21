import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'deleteLeave'
})
export class DeleteLinksPipe implements PipeTransform {
    transform(items: any[], userId: string): any[] {
        if (!items) return [];
        if (!userId) return items;
        userId = userId.toLowerCase();
        return items.filter(leave => {
            return ((leave.userId.toLowerCase() == userId));
        });
    }
}
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'devLinks'
})
export class DevLinksPipe implements PipeTransform {
    transform(items: any[], application: string, env: string): any[] {
        if (!items) { return []; }
        if (!application) { return items; }
        if (!env) { return items; }
        application = application.toLowerCase();
        env = env.toLowerCase();
        return items.filter(link => {
            return ((link.env.toLowerCase() === env) && (link.application.toLowerCase() === application));
        });
    }
}

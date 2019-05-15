import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "searchacronym"
})
export class SearchAcronymPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.abr.toLowerCase().includes(searchText);
    });
  }
}

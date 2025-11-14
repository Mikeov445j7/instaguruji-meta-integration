import { HttpParams } from "@angular/common/http";

export function getParamValueQueryString(paramName: string) {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
        const httpParams = new HttpParams({ fromString: url.split('?')[1] });
        paramValue = httpParams.get(paramName);
    }
    return paramValue;
}
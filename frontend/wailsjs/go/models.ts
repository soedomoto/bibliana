export namespace backend {
	
	export class FindParam {
	    take: number;
	    skip: number;
	    filter?: string;
	
	    static createFrom(source: any = {}) {
	        return new FindParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.take = source["take"];
	        this.skip = source["skip"];
	        this.filter = source["filter"];
	    }
	}
	export class Item {
	    itemID?: number;
	    itemTypeID: number;
	    // Go type: time
	    dateAdded: any;
	    // Go type: time
	    dateModified: any;
	    // Go type: time
	    clientDateModified: any;
	    libraryID: number;
	    key: string;
	    version: number;
	    synced: number;
	
	    static createFrom(source: any = {}) {
	        return new Item(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.itemID = source["itemID"];
	        this.itemTypeID = source["itemTypeID"];
	        this.dateAdded = this.convertValues(source["dateAdded"], null);
	        this.dateModified = this.convertValues(source["dateModified"], null);
	        this.clientDateModified = this.convertValues(source["clientDateModified"], null);
	        this.libraryID = source["libraryID"];
	        this.key = source["key"];
	        this.version = source["version"];
	        this.synced = source["synced"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class FindResult {
	    count: number;
	    data: Item[];
	
	    static createFrom(source: any = {}) {
	        return new FindResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.count = source["count"];
	        this.data = this.convertValues(source["data"], Item);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}


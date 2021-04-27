export interface Villa {
    id?: number;
    code?: string;
    ownerName?: string;
    name?: string;
    address?: string;
    imageUrl?: string;
    cityID?: number;
    maxCapacity?: string;
    minPrice?: string;
    rooms?: string;
    insideCity?: string;
    isRural?: string;
    isYeylaghi?: string;
    commonCourtyard?: string;
    closedCourtyard?: string;
    insideTownship?: string;
    janitor?: string;
    areaIndoor?: number;
    areaOutdoor?: number;
    details?: string;
    villaType?: string;
    capacity?: number;
    views?: string;
    statusID?: number;
    location?: string;
    locations?: string;
    mode?: string;
    isActive?: boolean;
    pictures?: string;
    picturesArr?: string[];
    typeId?: number;
    provinceID?: number;
    ownerPhone?: string;
    organizationID?: number;
    x?: string;
    Y?: string;
    documents?: string;
    facilities?: string;
    rules?: string;
    twindBed?: number;
    singleBed?: number;
    mattress?: number
}

export interface ResData{
    isDone?: boolean;
    hasException?: boolean;
    errorCode?: string;
    serverMessage?: string;
    id?: number;
    value?: number;
    datum?: Villa
}
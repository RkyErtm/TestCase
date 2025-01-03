export interface Properties {
    id: number;
    state: string;
    name: string;
    population: number;
    temperature: number;
    humidity: number;
    status: number;
    randomDate: string;
}

interface Geometry {
    type: string;
    coordinates: number[];
}
export interface Feature {
    type: string;
    geometry: Geometry;
    properties: Properties;
}

export interface Capital {
    type: string;
    features: Feature[];
}
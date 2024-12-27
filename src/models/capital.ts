interface Properties {
    state: string;
    name: string;
    population: number;
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
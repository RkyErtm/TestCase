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

interface FeatureCollection {
    type: string;
    features: Feature[];
}
//Tek bir yerden data çektiğim için model'i buraya yazdım. Normalde modeller içinde ayrı klasörde çalışırım.

export const datas: FeatureCollection[] = [
    {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [32.8597, 39.9334]
                },
                properties: {
                    state: "Ankara",
                    name: "Ankara",
                    population: 5445000
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [28.9784, 41.0082]
                },
                properties: {
                    state: "İstalbul",
                    name: "İstanbul",
                    population: 15460000
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [27.1428, 38.4237]
                },
                properties: {
                    state: "İzmir",
                    name: "İzmir",
                    population: 4325000
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [30.6956, 36.8969]
                },
                properties: {
                    state: "Antalya",
                    name: "Antalya",
                    population: 2426356
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [32.4846, 37.8746]
                },
                properties: {
                    state: "Konya",
                    name: "Konya",
                    population: 2232374
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [35.2433, 38.7312]
                },
                properties: {
                    state: "Kayseri",
                    name: "Kayseri",
                    population: 1412000
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [29.0611, 40.1826]
                },
                properties: {
                    state: "Bursa",
                    name: "Bursa",
                    population: 3056120
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [36.3348, 36.9946]
                },
                properties: {
                    state: "Hatay",
                    name: "Hatay",
                    population: 1625000
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [35.3213, 37.0025]
                },
                properties: {
                    state: "Adana",
                    name: "Adana",
                    population: 2237940
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [39.9208, 41.0053]
                },
                properties: {
                    state: "Trabzon",
                    name: "Trabzon",
                    population: 807903
                }
            }
        ]
    }
];
export interface Data {
    deviceGroups: DevicesGroup[],
    protocols: Protocol[],
    timePeriods: TimePeriod[]
}

export interface DevicesGroup {
    groupName: string;
    devices: Device[];
}

export interface Device {
    deviceName: string;
}

export interface Protocol {
    protocol: string;
}

export interface TimePeriod {
    timePeriod: string;
}

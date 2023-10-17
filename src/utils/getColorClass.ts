import { COLOR_TYPES, ColorTypes } from "@/constants";

export const getColorClass = (prefix: any, type: keyof ColorTypes, value: any) => `${prefix}-${COLOR_TYPES[type]}-${value}`
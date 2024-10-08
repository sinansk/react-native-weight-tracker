import { activityLevels } from "./data";

export const convertActivityLevel = (value) => {
  const index = activityLevels.findIndex((item) => item.status === value);
  if (index !== -1) {
    return activityLevels[index].apiValue;
  }
  return null;
};

export const convertActivityLevelForMacro = (value) => {
  const index = activityLevels.findIndex((item) => item.status === value);
  if (index !== -1) {
    return activityLevels[index].macroValue;
  }
  return null;
};

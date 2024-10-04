import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../utils/requestMethods";
import { convertActivityLevel } from "../utils/convertActivityLevel";
import { convertBodyGoalForMacro } from "../utils/convertBodyGoalStatus";

export const fetchIdealWeight = createAsyncThunk(
  "userInfo/fetchIdealWeight",
  async (_, { getState }) => {
    const { gender, height, weight, bodyType } = getState().userInfo;
    try {
      const response = await apiRequest.get(
        `/ideal-weight?gender=${gender}&height=${height}&weight=${weight}&bodyType=${bodyType}`
      );
      return response.data;
    } catch (error) {
      console.error("HTTP isteği hatası:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchBodyFat = createAsyncThunk(
  "userInfo/fetchBodyFat",
  async (_, { getState }) => {
    const { neck, waist, hip, age, weight, height, gender } =
      getState().userInfo;
    try {
      const response = await apiRequest.get(
        `/body-fat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`
      );
      return response.data.bodyFat;
    } catch (error) {
      console.error("HTTP isteği hatası:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchMacroNeed = createAsyncThunk(
  "userInfo/fetchMacroNeed",
  async (_, { getState }) => {
    const { height, weight, age, gender, activityLevel, bodyGoal } =
      getState().userInfo;
    const activityLevelApiValue = await convertActivityLevel(activityLevel);
    const bodyGoalApiValue = await convertBodyGoalForMacro(bodyGoal);
    try {
      const response = await apiRequest.get(
        `macro-calculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activityLevel=${activityLevelApiValue}&goal=${bodyGoalApiValue}`
      );
      return response.data;
    } catch (error) {
      console.error("HTTP isteği hatası:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchIdealMeasurements = createAsyncThunk(
  "userInfo/fetchIdealMeasurements",
  async (_, { getState, dispatch }) => {
    const { wrist, gender } = getState().userInfo;
    try {
      const response = await apiRequest.get(
        `ideal-measurements?gender=${gender}&wrist=${wrist}`
      );
      return response.data.idealMeasurements;
    } catch (error) {
      console.error("HTTP isteği hatası:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

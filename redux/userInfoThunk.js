import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../utils/requestMethods";

export const fetchIdealWeight = createAsyncThunk(
    'user/fetchIdealWeight',
    async (_, { getState }) => {
        const { gender, height } = getState().userInfo;
        const response = await publicRequest.get(
            `/idealweight?gender=${gender}&height=${height}`
        );
        const sortedValues = Object.values(response.data.data)
            .map((item) => item)
            .sort((a, b) => a - b);
        return sortedValues;
    }
);

export const fetchBodyFat = createAsyncThunk(
    "userInfo/fetchBodyFat",
    async (_, { getState }) => {
        const { age, weight, height, neck, waist, hip, gender } = getState().userInfo;
        const response = await publicRequest.get(
            `/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`
        );
        return response.data.data;
    }
);

export const fetchCalorieNeed = createAsyncThunk(
    "userInfo/fetchCalorieNeed",
    async (_, { getState }) => {
        const { height, weight, age, activityLevel, gender } = getState().userInfo;
        const response = await publicRequest.get(
            `/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`
        );
        return response.data.data;
    }
);
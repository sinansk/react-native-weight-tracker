import { createAsyncThunk, getState } from "@reduxjs/toolkit";
import { publicRequest } from "../utils/requestMethods";

export const fetchIdealWeight = createAsyncThunk(
    'user/fetchIdealWeight',
    async (_, { getState }) => {
        const { gender, height } = getState().userInfo;
        const response = await publicRequest.get(
            `/idealweight?gender=${gender}&height=${height}`
        );
        return response.data;
    }
);

export const fetchBodyFat = createAsyncThunk(
    "userInfo/fetchBodyFat",
    async (_, { getState }) => {
        const { age, weight, height, neck, waist, hip, gender } = getState().userInfo;
        const response = await publicRequest.get(
            `/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`
        );
        return response.data;
    }
);

export const fetchCalorieNeed = createAsyncThunk(
    "userInfo/fetchCalorieNeed",
    async () => {
        const { height, weight, age, activityLevel, gender } = getState().userInfo;
        const response = await publicRequest.get(
            `/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`
        );
        return response.data;
    }
);
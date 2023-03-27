import { createSlice } from "@reduxjs/toolkit";
import { calculateMeasurements } from "../utils/calculateMeasurements";
import { fetchIdealWeight, fetchBodyFat, fetchCalorieNeed } from "./userInfoThunk";
import produce from "immer";

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        birthDay: "29.01.1993",
        gender: "male",
        height: 169,
        weight: 60,
        age: 29,
        bodyType: "Ectomorph",
        bodyGoal: "maintain weight",
        activityLevel: "level_1",
        idealWeight: null,
        idealWeightRange: null,
        bmi: "",
        bodyFat: null,
        calorieNeed: null,
        calorieNeedByBodyGoal: null,
        neck: 34,
        shoulder: 112,
        chest: 95,
        arm: 34,
        foreArm: 28,
        wrist: 15,
        waist: 70,
        hip: 86,
        thigh: 56,
        calve: 34,
        idealMeasurements: null,
        status: "idle",
        error: null,
    },
    reducers: {
        reset: (state) => { },
        setInput: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        setIdealMeasurements: (state) => {
            state.idealMeasurements = calculateMeasurements(wrist = state.wrist, gender = state.gender)
        },
        setGender: (state, action) => {
            state.gender = action.payload
            state.calorieNeedByBodyGoal = null
            state.idealWeightRange = null
            state.idealMeasurements = null
            state.bodyFat = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIdealWeight.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchIdealWeight.fulfilled, (state, action) => {
                state.status = "succeeded";
                if (state.bodyType === "Ectomorph") {
                    state.idealWeight = action.payload.map((item) =>
                        Math.round((item * 96) / 100)
                    );
                } else if (state.bodyType === "Endomorph") {
                    state.idealWeight = action.payload.map((item) =>
                        Math.round((item * 104) / 100)
                    );
                } else {
                    state.idealWeight = action.payload.map((item) =>
                        Math.round(item)
                    );
                }
                state.idealWeightRange = state.idealWeight?.[0] + ` - ` + state.idealWeight[3]
                state.bmi = (
                    (state.weight /
                        (state.height * state.height)) *
                    10000
                ).toFixed(1);

            })
            .addCase(fetchIdealWeight.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchBodyFat.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBodyFat.fulfilled, (state, action) => {
                state.status = "succeeded";
                //i18n-js package not translating U.S. word somewhat, so I am deleting it.
                state.bodyFat = produce(action.payload, draftState => {
                    draftState['Body Fat (Navy Method)'] = draftState['Body Fat (U.S. Navy Method)'];
                    delete draftState['Body Fat (U.S. Navy Method)'];
                });
            })
            .addCase(fetchBodyFat.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchCalorieNeed.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCalorieNeed.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.calorieNeed = action.payload;   //bc of api data structure things..
                state.calorieNeedByBodyGoal = state.calorieNeed["goals"]?.[state.bodyGoal]["calory"] ? state.calorieNeed["goals"]?.[state.bodyGoal]["calory"].toFixed(0)
                    + ` kcal` : state.calorieNeed["goals"]?.[state.bodyGoal].toFixed(0) + ` kcal`
            })
            .addCase(fetchCalorieNeed.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const { setInput, setIdealMeasurements, setGender, reset } = userInfoSlice.actions;
export const userInfoSelector = (state) => state.userInfo;
export default userInfoSlice.reducer;
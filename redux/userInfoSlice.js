import { createSlice } from "@reduxjs/toolkit";
import { calculateMeasurements } from "../utils/calculateMeasurements";
import {
  fetchIdealWeight,
  fetchBodyFat,
  fetchMacroNeed,
  fetchIdealMeasurements,
} from "./userInfoThunk";
import produce from "immer";
import i18n from "../locales/i18n";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    language: i18n.locale,
    birthDay: "29.01.1993",
    gender: "male",
    height: 169,
    weight: 60,
    age: 29,
    bodyType: "Ectomorph",
    bodyGoal: "maintain weight",
    activityLevel: "Sedentary: little or no exercise",
    idealWeightRange: null,
    idealWeightStatus: null,
    bmi: "",
    bmr: null,
    bodyFat: null,
    macroNeed: null,
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
    reset: (state) => {},
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setIdealMeasurements: (state) => {
      state.idealMeasurements = calculateMeasurements(
        (wrist = state.wrist),
        (gender = state.gender)
      );
    },
    setGender: (state, action) => {
      state.gender = action.payload;
      state.calorieNeedByBodyGoal = null;
      state.idealWeightRange = null;
      state.idealMeasurements = null;
      state.bodyFat = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdealWeight.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIdealWeight.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.idealWeightRange = action.payload.idealWeightRange;
        state.idealWeightStatus = action.payload.idealWeightStatus;
        state.bmi = action.payload.bmi;
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
        //i18n-js package not translating "." somewhat, so I am deleting it.
        state.bodyFat = produce(action.payload, (draftState) => {
          draftState["Body Fat (US Navy Method)"] =
            draftState["Body Fat (U.S. Navy Method)"];
          delete draftState["Body Fat (U.S. Navy Method)"];
        });
        state.bodyFatUsNavy = action.payload["Body Fat (U.S. Navy Method)"];
      })
      .addCase(fetchBodyFat.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMacroNeed.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMacroNeed.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.macroNeed = action.payload.macroNeed;
        state.calorieNeedByBodyGoal = action.payload.calorieNeedByBodyGoal;
        state.bmr = action.payload.bmr;
      })
      .addCase(fetchMacroNeed.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchIdealMeasurements.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIdealMeasurements.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.idealMeasurements = action.payload;
      })
      .addCase(fetchIdealMeasurements.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setInput, setIdealMeasurements, setGender, reset, setLanguage } =
  userInfoSlice.actions;
export const userInfoSelector = (state) => state.userInfo;
export default userInfoSlice.reducer;

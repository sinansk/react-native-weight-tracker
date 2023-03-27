export const calculateMeasurements = (gender, wrist) => {
    const ratios = {
        chest: 6.5,
        neck: 0.37,
        arm: 0.36,
        foreArm: 0.29,
        waist: 0.7,
        hip: 0.85,
        thigh: 0.53,
        calce: 0.34,
        shoulder: 1.61,
    };

    const idealMeasurements = Object.keys(ratios).reduce((result, key) => {
        result[key] = wrist * ratios[key];
        return result;
    }, {});

    if (gender === "male") {
        return idealMeasurements;
    } else if (gender === "female") {
        return {
            chest: idealMeasurements.chest,
            waist: idealMeasurements.waist,
            hip: idealMeasurements.hip
        };
    }
};




// export const calculateMeasurements = (gender, wrist) => {

//     let chest;
//     let neck;
//     let arm;
//     let foreArm;
//     let waist;
//     let hip;
//     let thigh;
//     let calce;
//     let shoulder;
//     idealMeasurements = {
//         chest: wrist * 6.5,
//         neck: chest * 0.37,
//         arm: chest * 0.36,
//         foreArm: chest * 0.29,
//         waist: chest * 0.7,
//         hip: chest * 0.85,
//         thigh: chest * 0.53,
//         calce: chest * 0.34,
//         shoulder: waist * 1.61
//     }
//     if (gender = "male") {
//         return idealMeasurements
//     } else if (gender = "female") {
//         return idealMeasurements = {
//             chest,
//             waist,
//             hip
//         }
//     }


// }
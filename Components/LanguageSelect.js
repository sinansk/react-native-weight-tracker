import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectInput from './SelectInput'
import { languageInputs } from '../utils/languageInputs'
import { Picker } from "@react-native-picker/picker";
import i18n from '../locales/i18n';
import { setLanguage } from "../redux/userInfoSlice"
import { useSelector, useDispatch } from 'react-redux';
const LanguageSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const { language } = useSelector((state) => state.userInfo)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(selectedLanguage, "selectedLanguage")
        dispatch(setLanguage(selectedLanguage))
    }, [selectedLanguage])


    return (

        <Picker
            selectedValue={selectedLanguage ?? languageInputs[0].value}
            onValueChange={(itemValue, itemIndex) => {
                setSelectedLanguage(itemValue)
            }}
        >
            {languageInputs.map((language, index) => (
                <Picker.Item
                    key={index}
                    label={language.status}
                    value={language.value}>
                </Picker.Item>
            ))}
        </Picker>

    )
}

export default LanguageSelect


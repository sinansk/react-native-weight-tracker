import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import i18n from '../locales/i18n'
import { FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setGender, setLanguage } from '../redux/userInfoSlice';
import * as Network from 'expo-network';
import { useRef } from 'react';
import BannerAdComponent from '../Components/BannerAdComponent';
import LanguageSelectButton from '../Components/LanguageSelectButton';

const LandingScreen = ({ navigation }) => {
    const { language } = useSelector((state) => state.userInfo)
    const modalRef = useRef(null);
    const dispatch = useDispatch()
    const { gender } = useSelector((state) => state.userInfo)
    const [network, setNetwork] = useState()
    const [showNoConnectionMessage, setShowNoConnectionMessage] = useState(false);
    const checkNetwork = async () => {
        try {
            const networkStatus = await Network.getNetworkStateAsync()
            if (networkStatus.isConnected) {
                setNetwork(true)
                setShowNoConnectionMessage(false)
            } else {
                setNetwork(false)
                setShowNoConnectionMessage(true)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkNetwork()
    }, [])

    const handleGender = (selectedGender) => {
        dispatch(setGender(selectedGender))
    }
    const handleNavigate = (nextScreen) => {
        checkNetwork()
        network &&
            navigation.navigate(nextScreen)
    }

    return (
        <View className="flex-col items-center justify-center w-full h-full bg-slate-100">
            <Text className="mb-10 text-xs font-semibold text-center text-slate-200">{showNoConnectionMessage && i18n.t("This app requires internet connection")}</Text>
            <View className="absolute top-10 right-2">
                <LanguageSelectButton />
            </View>
            <View className="flex-row items-center justify-center gap-9 mb-9">
                <TouchableOpacity onPress={() => handleGender("female")} className={`${gender === "female" && 'border-[0.3px] border-slate-500 rounded-xl bg-slate-50'} ' p-3`}>
                    <FontAwesome className="" name="female" size={gender === 'female' ? 68 : 60} color={gender === 'female' ? '#ec4899' : '#d6d3d1'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleGender("male")} className={`${gender === "male" && 'border-[0.3px] border-slate-500 rounded-xl bg-slate-100'} ' p-3`}>
                    <FontAwesome name="male" size={gender === 'male' ? 68 : 60} color={gender === 'male' ? '#0ea5e9' : '#d6d3d1'} />
                </TouchableOpacity>
            </View>
            <View className="flex-col items-center justify-center gap-1">
                <View className="flex-row gap-2">
                    <TouchableOpacity onPress={() => handleNavigate(i18n.t("Ideal Weight Calculator"))} className="flex items-center justify-center w-40 h-40 p-2 bg-sky-700 rounded-xl">
                        <FontAwesome5 name="weight" size={58} color="white"></FontAwesome5>
                        <Text className="mt-2 font-semibold text-center text-white">{i18n.t("Ideal Weight Calculator")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigate(i18n.t("Body Fat Calculator"))} className="items-center justify-center w-40 h-40 p-2 bg-emerald-500 rounded-xl">
                        <FontAwesome5 name="percentage" size={58} color="white"></FontAwesome5>
                        <Text className="mt-2 font-semibold text-center text-white">{i18n.t("Body Fat Calculator")}</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row gap-2">
                    <TouchableOpacity onPress={() => handleNavigate(i18n.t("Daily Calorie Calculator"))} className="items-center justify-center w-40 h-40 p-2 bg-amber-400 rounded-xl">
                        <MaterialIcons name="local-dining" size={58} color="white"></MaterialIcons>
                        <Text className="mt-2 font-semibold text-center text-white">{i18n.t("Daily Calorie Calculator")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigate(i18n.t("Ideal Measurements Calculator"))} className="items-center justify-center w-40 h-40 p-2 bg-fuchsia-600 rounded-xl">
                        <MaterialCommunityIcons name="arm-flex" size={58} color="white"></MaterialCommunityIcons>
                        <Text className="mt-2 font-semibold text-center text-white">{i18n.t("Ideal Measurements Calculator")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BannerAdComponent />
        </View>
    )
}

export default LandingScreen

const styles = StyleSheet.create({})
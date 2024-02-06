import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../redux/userInfoSlice';
import i18n from '../locales/i18n';

const LanguageSelectButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const language = i18n.locale;
    const dispatch = useDispatch()
    const languageImages = {
        tr: require('../assets/tr.png'),
        es: require('../assets/es.png'),
        en: require('../assets/en.png'),
        de: require('../assets/de.png'),
    };
    const otherLanguages = Object.keys(languageImages).filter(
        (key) => key !== language
    );

    const handleLanguageClick = (lang) => {
        i18n.locale = lang
        dispatch((setLanguage(lang)))
        closeMenu()
    };

    const closeMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <TouchableOpacity>
            {language && (
                <>
                    <TouchableOpacity
                        onPress={() => handleLanguageClick(language)}
                    >
                        <Image className="w-9 h-9" source={languageImages[language]} />
                    </TouchableOpacity>
                    {isMenuOpen &&
                        <View className="z-10 flex flex-col mt-1">
                            <TouchableOpacity className="ml-auto mr-auto -mt-2" onPress={() => closeMenu()}>
                                <Entypo name="chevron-small-up" size={24} color="black" />
                            </TouchableOpacity>
                            {otherLanguages.map((lang) => (
                                <TouchableOpacity
                                    key={lang}
                                    onPress={() => handleLanguageClick(lang)}
                                >
                                    <Image className="z-10 mt-1 w-9 h-9" source={languageImages[lang]} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    }
                </>
            )}
        </TouchableOpacity>
    )
}

export default LanguageSelectButton
import en from "./homepage/en"
import ru from "./homepage/ru"
import tr from "./homepage/tr"

export const GetLocale = async (locale) => {
    if (locale === 'en') return en
    if (locale === 'ru') return ru
    else return tr
}
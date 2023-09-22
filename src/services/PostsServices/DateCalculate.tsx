import Cookies from "js-cookie";

export const DateCalculate = (createdAt: any) => {

    const currentLanguageCode = Cookies.get('i18next') || 'ar'

    const DateCalculator = () => {
        var CreatedAt = new Date(createdAt);
        var NowDate = new Date(Date.now());
        var Difference = NowDate.getTime() - CreatedAt.getTime();
        var Difference_In_Days = Difference / (1000 * 3600 * 24);
        var Difference_In_Hours = Difference / (1000 * 3600);
        var Difference_In_Minutes = Difference / (1000 * 60);

        if (Difference_In_Minutes < 60) return `${Difference_In_Minutes.toFixed()} ${currentLanguageCode === "ar" ? "د" : "m"}`
        else if (Difference_In_Hours < 24 && Difference_In_Minutes > 60) return `${Difference_In_Hours.toFixed()}  ${currentLanguageCode === "ar" ? "س" : "h"}`
        else return `${Difference_In_Days.toFixed()}  ${currentLanguageCode === "ar" ? "ي" : "d"}`
    }

    return DateCalculator
}

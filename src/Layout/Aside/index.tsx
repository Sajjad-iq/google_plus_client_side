import { AsideWrapper } from './styled/AsideWrapper'
import React from 'react';
import { NormalAside } from './components/NormalAside';
import { MobileAside } from './components/MobileAside';

interface Props {
    IsPageActive: boolean
    setIsPageActive: any
}
export const Aside = React.memo((props: Props) => {

    const OpenMenu = () => {
        if (window.innerWidth < 1024) {
            if (props.IsPageActive) return { transform: "translate(0)" }
            else return { transform: "", boxShadow: "unset" }
        } else return { transform: "translate(0)", boxShadow: "unset" }
    }

    return (
        <AsideWrapper style={OpenMenu()}>
            {window.innerWidth >= 1024 ?
                <NormalAside />
                :
                <MobileAside setIsPageActive={props.setIsPageActive} />
            }
        </AsideWrapper>
    )
})

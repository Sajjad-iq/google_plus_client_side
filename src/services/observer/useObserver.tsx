import { useEffect } from "react";

export const useObserver = (BottomRef: any, Callback: () => any, ReTrigger: any) => {

    useEffect(() => {
        if (!BottomRef?.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    Callback()
                }
            },
            { rootMargin: "0px" }
        );

        observer.observe(BottomRef.current);

        return () => {
            if (BottomRef?.current) observer.unobserve(BottomRef.current)
        }
    }, [BottomRef, ReTrigger])
};
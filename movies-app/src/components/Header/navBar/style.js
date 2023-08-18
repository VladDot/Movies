import clsx from "clsx";

export const getStyles = (isActiveBurger) => ({
    mobile: clsx(
        "border-2 border-black bg-yellow-500",
        { block: isActiveBurger },
        { hidden: !isActiveBurger }
    ),
});

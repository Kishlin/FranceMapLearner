import React from "react";

export function useCheckboxState(initialValue) {
    const [value, setter] = React.useState(initialValue);

    const definitiveSetter = function (event) {
        return setter(event.target.checked);
    }

    return [value, definitiveSetter];
}

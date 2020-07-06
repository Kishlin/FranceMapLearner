import React from "react";

export function useSliderState(initialValue) {
    const [value, setter] = React.useState(initialValue);

    const sliderSetter = (event, newValue) => setter(newValue);
    const inputSetter = (event) => setter(event.target.value === '' ? '' : Number(event.target.value));

    return [value, sliderSetter, inputSetter];
}

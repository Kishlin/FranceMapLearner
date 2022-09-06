import { useState } from 'react';

function useSliderState(initialValue: number): [ number, SliderSetter, InputSetter ] {
    const [sliderValue, valueSetter] = useState(initialValue);

    const sliderSetter: SliderSetter = (event, value) => valueSetter(Array.isArray(value) ? value[0] : value);
    const inputSetter: InputSetter = ({ target: { value } }) => valueSetter('' === value ? +'' : Number(value));

    return [sliderValue, sliderSetter, inputSetter];
}

export default useSliderState;

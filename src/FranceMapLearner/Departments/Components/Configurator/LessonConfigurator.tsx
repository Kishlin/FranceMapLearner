import React, { useContext } from 'react';

import IndicationCountPicker from '../../../Shared/Configurator/Components/IndicationCountPicker';
import useRegionSelectionState from '../../../Shared/Configurator/State/RegionSelectionState';
import ConfiguratorTitle from '../../../Shared/Configurator/Components/ConfiguratorTitle';
import { REGIONS_INDICATIONS_COUNT } from '../../../Shared/Configurator/Constants/Config';
import Configurator from '../../../Shared/Configurator/Components/Configurator';
import GoButtonBox from '../../../Shared/Configurator/Components/GoButtonBox';
import useSliderState from '../../../Shared/Configurator/State/SliderState';
import { RegionsContext } from '../../../Regions/Context/RegionsContext';
import RegionSelection from './RegionsSelection';

type LessonConfiguratorProps = {
    setConfiguration: (configuration: Configuration) => void,
};

function LessonConfigurator({ setConfiguration }: LessonConfiguratorProps) {
    const { regions } = useContext(RegionsContext);

    const [regionSelectionState, toggleRegion] = useRegionSelectionState();
    const [indicationCount, sliderSetter, inputSetter] = useSliderState(REGIONS_INDICATIONS_COUNT);

    const configuration: DepartmentsLessonConfiguration = {};

    const configurationIsValid = false;

    return (
        <Configurator>
            <ConfiguratorTitle text="Learn the location of departments" />
            <RegionSelection regions={regions} regionSelection={regionSelectionState} toggleRegion={toggleRegion} />
            <IndicationCountPicker indicationCount={indicationCount} sliderSetter={sliderSetter} inputSetter={inputSetter} max={maxIndication} />
            <GoButtonBox disabled={!configurationIsValid} onGoButtonClick={() => setConfiguration(configuration)} />
        </Configurator>
    );
}

export default LessonConfigurator;

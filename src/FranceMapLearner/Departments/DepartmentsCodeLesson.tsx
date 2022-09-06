import React, { useState } from 'react';

import LessonConfigurator from './Components/Configurator/LessonConfigurator';

function DepartmentsCodeLesson() {
    const [configuration, setConfiguration] = useState<DepartmentsLessonConfiguration|null>(null);

    if (null === configuration) {
        return <LessonConfigurator setConfiguration={setConfiguration} />;
    }

    return <noscript />;
}

export default DepartmentsCodeLesson;

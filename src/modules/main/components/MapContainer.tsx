import Env from '@config/ConfigureEnv';
import React, { ReactElement, useState } from 'react';
import ReactMapGL, { Layer, Popup, Source } from 'react-map-gl';

import { IMapContainerProps, IMapViewport } from '../types/Map_T';
import Styles from './styles/MapContainer.style';

export default function MapContainer({
                                       onClick,
                                       showPopup,
                                       togglePopup,
                                       sourceData = { type: 'raster' },
                                       popupData = { longitude: 0, latitude: 0 },
                                     }: IMapContainerProps): ReactElement {


  return (
    <Styles.MainContainer>

    </Styles.MainContainer>
  );
}

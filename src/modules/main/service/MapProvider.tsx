import React, { ReactElement, createContext, useState } from 'react';
import { MapEvent } from 'react-map-gl';

import { IMapContext, IMapPopup } from '../types/Map_T';

export const MapContext = createContext<IMapContext>({
  togglePopup: (data: boolean) => data,
});

export default function MapProvider({ children }: { children: ReactElement }): ReactElement {
  const [showPopup, togglePopup] = useState<boolean>(false);
  const [popupData, setPopup] = useState<IMapPopup>({ longitude: -85.595, latitude: 44.775 });

  const setPopupData = (data: MapEvent): void => {
    togglePopup(true);
    setPopup({ longitude: data.lngLat[0], latitude: data.lngLat[1] });
  };

  return <MapContext.Provider
    value={{ showPopup, popupData, setPopupData, togglePopup }}>{children}</MapContext.Provider>;
}

import { MapEvent, SourceProps } from 'react-map-gl';

export interface IMapContext {
  showPopup?: boolean;
  popupData?: IMapPopup;
  togglePopup: (data: boolean) => void;
  setPopupData?: (data: MapEvent) => void;
}

export interface IMapPopup {
  longitude: number;
  latitude: number;
}

export interface IMapContainerProps {
  showPopup?: boolean;
  popupData?: IMapPopup;
  sourceData?: SourceProps;
  onClick?: (data: MapEvent) => void;
  onHover?: (data: MapEvent) => void;
  togglePopup: (data: boolean) => void;
}

export interface IMapViewport {
  longitude: number;
  latitude: number;
  zoom: number;
}

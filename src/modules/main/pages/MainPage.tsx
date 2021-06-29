import { Col, Layout, Row, Typography } from 'antd';
import React, { ReactElement, useContext } from 'react';

import { MapContainer } from '../components';
import { MapContext } from '../service/MapProvider';
import Styles from './styles/MainPage.style';

export default function MainPage(): ReactElement {
  const { showPopup, popupData, setPopupData, togglePopup } = useContext(MapContext);

  return (
    <Styles.MainContainer>
      <Layout>
        <Layout.Content className='layout-content'>
          <Row justify='center'>
            <Typography.Title>Map Container And Raster Image Comparison</Typography.Title>
          </Row>

          <Row gutter={[32, 32]} className='maps'>
            <Col span={12}>
              <MapContainer
                popupData={popupData}
                showPopup={showPopup}
                onClick={setPopupData}
                togglePopup={togglePopup}
                sourceData={{
                  type: 'raster',
                  url: 'mapbox://amirrstm.4ue8z3ye',
                  bounds: [-85.8, 44.68, -85.39, 44.87],
                }}
              />
            </Col>
            <Col span={12}>
              <MapContainer
                popupData={popupData}
                showPopup={showPopup}
                onClick={setPopupData}
                togglePopup={togglePopup}
                sourceData={{
                  type: 'raster',
                  url: 'mapbox://amirrstm.4ue8z3ye',
                  bounds: [-85.8, 44.68, -85.39, 44.87],
                }}
              />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </Styles.MainContainer>
  );
}

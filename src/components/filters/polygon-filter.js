import React from 'react';
import styled from 'styled-components';
import {PanelLabel, PanelValue, SidePanelSection} from '../common/styled-components';

const StyledInfo = styled.div`
  display: flex;
  .label {
    flex-grow: 1;
  }
`;

const PolygonFilter = React.memo(({dataset, filter, setFilter}) => (
  <SidePanelSection>
    <StyledInfo>
      <PanelLabel className="label">Layer</PanelLabel>
      <PanelValue className="value">{filter.name}</PanelValue>
    </StyledInfo>
    <StyledInfo>
      <PanelLabel className="label">Count</PanelLabel>
      <PanelValue className="value">{dataset.data.length}</PanelValue>
    </StyledInfo>
  </SidePanelSection>
));

export default PolygonFilter;

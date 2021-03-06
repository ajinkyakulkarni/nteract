// @flow
import React from 'react';

import { List as ImmutableList, Map as ImmutableMap } from 'immutable';

import { transforms, displayOrder } from '../../transforms';

import Output from './output';

type Props = {
  displayOrder: ImmutableList<string>,
  outputs: ImmutableList<any>,
  transforms: ImmutableMap<string, any>,
  theme: string,
}

export default function Display(props: Props): ?React.Element<any> {
  const order = props.displayOrder;
  const tf = props.transforms;
  return (
    <div className="cell_display">
      {
        props.outputs.map((output, index) =>
          <Output
            key={index}
            output={output}
            displayOrder={order}
            transforms={tf}
            theme={props.theme}
          />
        )
      }
    </div>
  );
}

Display.defaultProps = {
  transforms,
  displayOrder,
};

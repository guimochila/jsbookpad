import { useSelector } from './useTypedSelector';

export function useCumultiveCode(cellId: string) {
  const cumulativeCode = useSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const showFn = `
    import _React from 'react';
    import _ReactDOM from 'react-dom';

    var show = async (value) => {
      if(typeof value === 'object') {
        if (value.$$typeof && value.props) {
          _ReactDOM.render(value, document.querySelector('#root'));
        } else {
          document.querySelector('#root').innerHTML = JSON.stringify(value);
        }
      } else {
        document.querySelector('#root').innerHTML = value;
      }
    }
    `;
    const showFnNoop = `var show = () => {}`;

    const codeAcc = [];

    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          codeAcc.push(showFn);
        } else {
          codeAcc.push(showFnNoop);
        }
        codeAcc.push(c.content);
      }

      if (c.id === cellId) {
        break;
      }
    }

    return codeAcc;
  }).join('\n');

  return cumulativeCode;
}

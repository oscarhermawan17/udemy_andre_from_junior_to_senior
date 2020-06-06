import * as React from 'react';


//cari tau beda type dan interface
type Props = {
  children?: JSX.Element
}

const Scroll: React.SFC<Props> = (props: Props): JSX.Element => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
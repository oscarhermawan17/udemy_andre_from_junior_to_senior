import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App'

// can choose, use this below code.
// interface Props {
//   robots: Array<IRobot>
// }

const CardList: React.SFC<{robots: Array<IRobot>}> = ({ robots }: {robots: Array<IRobot>}): JSX.Element => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
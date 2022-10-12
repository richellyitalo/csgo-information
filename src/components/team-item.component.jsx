import { useState } from 'react';
import { Col } from 'react-grid-system';
import { Button, Card, Elevation, Icon } from '@blueprintjs/core';
import DialogTeam from './dialog-team.component';

const TeamItem = (props) => {
  const { team } = props;
  const { name, players, image_url } = team;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  // display: flex;
  // align-content: space-around;
  // flex-direction: column;
  // justify-content: space-between;
  return (
    <Col key={team.id} md={6} lg={4} className="mb-3 flex items-stretch">
      <Card
        interactive={false}
        elevation={Elevation.TWO}
        className="w-full flex place-content-between flex-col"
      >
        <h3 className="mt-0 text-center">{name}</h3>
        <div className="flex">
          <div className="flex-1 w-50">
            <ul className="list-none text1 p-2 m-0">
              {players.map((player) => (
                <li key={player.id}>
                  <Icon icon="person" className="mr-1" />
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          {image_url && (
            <div className="flex-1 w-50">
              <img src={`${image_url}`} alt={`${name}`} className="w-full" />
            </div>
          )}
        </div>

        <Button
          onClick={handleOpen}
          text="More details"
          small
          fill
          className="mt-1"
        />

        {isOpen && (
          <DialogTeam team={team} isOpen={isOpen} onHandleClose={handleClose} />
        )}
      </Card>
    </Col>
  );
};

export default TeamItem;

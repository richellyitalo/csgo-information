import { useState } from 'react';
import { Col } from 'react-grid-system';
import {
  Classes,
  Button,
  Card,
  Elevation,
  Icon,
  Dialog,
} from '@blueprintjs/core';

const TeamItem = (props) => {
  const { name, players, image_url } = props.team;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Col
      md={6}
      lg={4}
      className="mb-3"
      style={{ display: 'flex', alignItems: 'strech' }}
    >
      <Card interactive={false} elevation={Elevation.TWO} className="w-full">
        <h3 className="mt-0 text-center">{name}</h3>
        <div className="flex">
          <div className="flex-1 w-50">
            <ul className="list-none text1 p-2 m-0">
              {players.map((player) => (
                <li>
                  <Icon icon="person" className="mr-1" />
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-50">
            <img src={`${image_url}`} alt={`${name}`} className="w-full" />
          </div>
        </div>
        <Button onClick={handleOpen} text={name} small fill className="mt-1" />
        <Dialog
          isOpen={isOpen}
          hasBackdrop={false}
          title="Imperial"
          onClose={handleClose}
        >
          <div className={Classes.DIALOG_BODY}>
            {players.map((player) => {
              return (
                <>
                  <h4>{player.name}</h4>
                  <img class="w-full" src={`${player.image_url}`} alt={player.name} />
                </>
              );
            })}
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </div>
        </Dialog>
      </Card>
    </Col>
  );
};

export default TeamItem;

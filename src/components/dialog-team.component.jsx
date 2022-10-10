import { Button, Classes, Dialog } from '@blueprintjs/core';
import PlayerDetail from './player-detail.component';

const DialogTeam = (props) => {
  const { onHandleClose, isOpen } = props;
  const { name, players } = props.team;
  console.log(isOpen);

  return (
    <Dialog
      isOpen={isOpen}
      hasBackdrop={false}
      title={name}
      onClose={onHandleClose}
    >
      <div className={Classes.DIALOG_BODY}>
        {players.map((player) => (
          <PlayerDetail player={player} />
        ))}
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={onHandleClose}>Close</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogTeam;

import { Button, Classes, Dialog } from '@blueprintjs/core';
import PlayerDetail from './player-detail.component';

const DialogTeam = (props) => {
  const { onHandleClose, isOpen } = props;
  const { id, name, players } = props.team;

  return (
    <Dialog
      isOpen={isOpen}
      hasBackdrop={false}
      title={name}
      onClose={onHandleClose}
      key={id}
    >
      <div className={Classes.DIALOG_BODY}>
        {players.map((player) => (
          <PlayerDetail key={player.id} player={player} />
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

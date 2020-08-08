import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppModal(props) {
    const { header, isOpen, children, action, onClose } = props

    return (
        
            <Dialog
                open={isOpen}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{header}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} fullWidth color="primary">
                        cancelar
                    </Button>
                    <Button onClick={action} fullWidth color="primary">
                        aceptar
                    </Button>
                </DialogActions>
            </Dialog>
       
    );
}
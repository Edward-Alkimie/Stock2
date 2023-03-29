import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function AddButton() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>Add Chart</Button>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        title of modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        information inside the modal
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Age
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={"annual.totalDebtToTotalAsset"}>annual.totalDebtToTotalAsset</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <Button variant="outlined" onClick={handleClose}>close</Button>
                    <Button variant="contained">Save changes</Button>
                </Box>
            </Modal>

        </div>

    )

}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
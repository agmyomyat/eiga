import { Button, Modal } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";

type ModalProp={open:boolean,handleClose:()=>void}
export default function DetectOtherLogin({open,handleClose}:ModalProp) {
	return (
		<div>
			<Modal
  		open={open}
  		onClose={()=>handleClose}
  		aria-labelledby="simple-modal-title"
  		aria-describedby="simple-modal-description"
		>
		<>
		<h1>We detect Another Login Do Not Share Your Account</h1>
		<Button onClick={()=>handleClose()}></Button>
		</>
		</Modal>		
		</div>
	)
}

